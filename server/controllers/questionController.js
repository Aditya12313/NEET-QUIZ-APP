import mongoose from 'mongoose'
import DefaultQuestion, { getModelForSubject } from '../models/Question.js'
import { fetchMocks } from '../services/externalApiService.js'

/**
 * GET /api/questions?chapter=<id>&limit=<n>
 * Returns verified questions for a given chapter (10–20 limit).
 */
export async function getQuestions(req, res) {
  try {
    console.log(`[GET /api/questions] Incoming request: chapter=${req.query.chapter}, subject=${req.query.subject}, limit=${req.query.limit}`);
    
    // Check if database is connected before proceeding
    if (mongoose.connection.readyState !== 1) {
      console.error(`[GET /api/questions] Database not connected. ReadyState: ${mongoose.connection.readyState}`);
      return res.status(500).json({ error: 'Database connection is not established' })
    }

    const { chapter, subject, limit = 20 } = req.query
    if (!chapter) {
      console.warn(`[GET /api/questions] Missing chapter parameter`);
      return res.status(400).json({ error: 'chapter query parameter is required' })
    }

    const cap = Math.min(Math.max(parseInt(limit, 10) || 20, 1), 20)

    const inferredSubject = subject || 'biology'
    
    let QuestionModel;
    try {
      QuestionModel = getModelForSubject(inferredSubject)
      console.log(`[GET /api/questions] Selected model for subject '${inferredSubject}': mapped to collection '${QuestionModel.collection.name}'`);
    } catch (modelErr) {
      console.error(`[GET /api/questions] Error getting model for subject '${inferredSubject}':`, modelErr);
      return res.status(500).json({ error: 'Failed to initialize database model', message: modelErr.message, stack: modelErr.stack });
    }

    // Step 1: Fetch verified questions randomly
    let verifiedQs = [];
    try {
      verifiedQs = await QuestionModel.aggregate([
        { $match: { chapter, verified: true } },
        { $sample: { size: cap } }
      ])
      console.log(`[GET /api/questions] Step 1: Fetched ${verifiedQs.length} verified questions from ${QuestionModel.collection.name}`);
    } catch (aggErr) {
      console.error(`[GET /api/questions] Error in aggregate query for verified questions:`, aggErr);
      return res.status(500).json({ error: 'Database query failed', message: aggErr.message, stack: aggErr.stack });
    }

    // Step 2: Top up with external questions when verified coverage is low.
    // Keep a slightly larger external pool so refresh can rotate question sets.
    let externalQs = []
    if (verifiedQs.length < cap) {
      const realInferredSubject = verifiedQs[0]?.subject || inferredSubject
      const needed = cap - verifiedQs.length
      const externalPoolTarget = realInferredSubject === 'physics'
        ? Math.max(cap * 3, 45)
        : Math.max(cap, needed * 2)

      // Fetch from existing external pool for this chapter.
      let existingExternal = await QuestionModel.aggregate([
        { $match: { chapter, source: 'external' } },
        { $sample: { size: externalPoolTarget } }
      ])

      // Ignore legacy generic mock templates so chapter-specific mocks dominate.
      existingExternal = existingExternal.filter(
        q => !String(q.question || '').startsWith('Realistic simulated question')
      )

      if (existingExternal.length < externalPoolTarget) {
        // Mocking an external fetch by requesting realistic questions from API.
        const toGenerate = externalPoolTarget - existingExternal.length
        const mocks = fetchMocks(chapter, toGenerate, { subject: realInferredSubject })

        const mocksWithMeta = mocks.map(m => ({
          ...m,
          subject: realInferredSubject,
          unit: verifiedQs[0]?.unit || 'Unknown Unit',
          chapter,
        }))

        // Step 4: Save unverified questions to DB
        const inserted = await QuestionModel.insertMany(mocksWithMeta)
        existingExternal = [...existingExternal, ...inserted.map(d => d.toObject ? d.toObject() : d)]
      }

      externalQs = existingExternal
        .sort(() => Math.random() - 0.5)
        .slice(0, needed)
    }

    // Combine datasets, ensuring maximum cap is respected, then shuffle them
    let questions = [...verifiedQs, ...externalQs].slice(0, cap).map(q => {
      // Remove sensitive mongoose fields for the client
      const { __v, createdAt, updatedAt, ...rest } = q
      return rest
    })

    // Randomize the final combined array so verified and external questions are mixed
    questions.sort(() => Math.random() - 0.5)

    console.log(`[GET /api/questions] Success: Returning ${questions.length} questions for chapter: ${chapter}`);

    return res.json({ chapter, count: questions.length, questions })
  } catch (err) {
    console.error('[GET /api/questions] UNEXPECTED ERROR:', err)
    return res.status(500).json({ error: 'Failed to fetch questions', message: err.message, stack: err.stack })
  }
}
