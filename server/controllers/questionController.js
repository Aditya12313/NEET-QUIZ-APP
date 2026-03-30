import Question from '../models/Question.js'
import { fetchMocks } from '../services/externalApiService.js'

/**
 * GET /api/questions?chapter=<id>&limit=<n>
 * Returns verified questions for a given chapter (10–20 limit).
 */
export async function getQuestions(req, res) {
  try {
    const { chapter, limit = 20 } = req.query
    if (!chapter) {
      return res.status(400).json({ error: 'chapter query parameter is required' })
    }

    const cap = Math.min(Math.max(parseInt(limit) || 20, 10), 20)

    // Step 1: Fetch verified questions randomly
    const verifiedQs = await Question.aggregate([
      { $match: { chapter, verified: true } },
      { $sample: { size: cap } }
    ])

    // Step 2: Check if < 15, if so mock "external" questions
    let externalQs = []
    if (verifiedQs.length < 15) {
      const needed = 15 - verifiedQs.length

      // Only check if we ALREADY fetched external ones randomly
      let existingExternal = await Question.aggregate([
        { $match: { chapter, source: 'external' } },
        { $sample: { size: needed } }
      ])

      // Ignore legacy generic mock templates so chapter-specific mocks dominate.
      existingExternal = existingExternal.filter(
        q => !String(q.question || '').startsWith('Realistic simulated question')
      )

      if (existingExternal.length < needed) {
        // Mocking an external fetch by requesting realistic questions from API
        // In a real app, this would be: await axios.get('https://api.neetpyq.com/...')
        const toGenerate = needed - existingExternal.length
        
        let mocks = fetchMocks(chapter, toGenerate);
        
        const mocksWithMeta = mocks.map(m => ({
          ...m,
          subject: verifiedQs[0]?.subject || 'biology',
          unit: verifiedQs[0]?.unit || 'Unknown Unit',
        }))

        // Step 4: Save unverified questions to DB
        const inserted = await Question.insertMany(mocksWithMeta)
        existingExternal = [...existingExternal, ...inserted.map(d => d.toObject ? d.toObject() : d)]
      }
      
      externalQs = existingExternal
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
