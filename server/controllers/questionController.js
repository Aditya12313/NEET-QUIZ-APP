import Question from '../models/Question.js'
import { fetchMocks } from '../services/externalApiService.js'

/**
 * GET /api/questions?chapter=<id>&limit=<n>
 * Returns verified questions for a given chapter (10–20 limit).
 */
export async function getQuestions(req, res) {
  try {
    const { chapter, subject, limit = 20 } = req.query
    if (!chapter) {
      return res.status(400).json({ error: 'chapter query parameter is required' })
    }

    const cap = Math.min(Math.max(parseInt(limit, 10) || 20, 1), 20)

    // Step 1: Fetch verified questions randomly
    const verifiedQs = await Question.aggregate([
      { $match: { chapter, verified: true } },
      { $sample: { size: cap } }
    ])

    // Step 2: Top up with external questions when verified coverage is low.
    // Keep a slightly larger external pool so refresh can rotate question sets.
    let externalQs = []
    if (verifiedQs.length < cap) {
      const inferredSubject = verifiedQs[0]?.subject || subject || 'biology'
      const needed = cap - verifiedQs.length
      const externalPoolTarget = inferredSubject === 'physics'
        ? Math.max(cap * 3, 45)
        : Math.max(cap, needed * 2)

      // Fetch from existing external pool for this chapter.
      let existingExternal = await Question.aggregate([
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
        const mocks = fetchMocks(chapter, toGenerate, { subject: inferredSubject })

        const mocksWithMeta = mocks.map(m => ({
          ...m,
          subject: inferredSubject,
          unit: verifiedQs[0]?.unit || 'Unknown Unit',
          chapter,
        }))

        // Step 4: Save unverified questions to DB
        const inserted = await Question.insertMany(mocksWithMeta)
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

    return res.json({ chapter, count: questions.length, questions })
  } catch (err) {
    console.error('getQuestions error:', err)
    return res.status(500).json({ error: 'Failed to fetch questions' })
  }
}
