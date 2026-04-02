import content from '../../src/data/neetContent.js'

const ASSERTION_REASON_OPTIONS = [
  'Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.',
  'Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.',
  'Assertion is true, but Reason is false.',
  'Assertion is false, but Reason is true.'
]

const STATEMENT_OPTIONS = [
  'Both Statement I and Statement II are correct.',
  'Both Statement I and Statement II are incorrect.',
  'Statement I is correct but Statement II is incorrect.',
  'Statement I is incorrect but Statement II is correct.'
]

const MATCH_OPTIONS = [
  'P-1 and Q-2',
  'P-2 and Q-1',
  'P-1 and Q-1',
  'P-2 and Q-2',
]

const SUBJECT_HINT = {
  biology: {
    examFocus: 'NCERT lines, exceptions, and biological examples',
    trap: 'Close options often differ by one NCERT keyword or exception case.'
  },
  chemistry: {
    examFocus: 'formula use, reaction logic, and stoichiometric relationships',
    trap: 'Most incorrect options come from unit errors or wrong reaction assumptions.'
  },
  physics: {
    examFocus: 'formula selection, sign conventions, and conceptual traps',
    trap: 'In numericals, first choose the correct relation and check units before solving.'
  }
}

function cleanText(text) {
  return String(text || '')
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, '')
    .replace(/[\u2022\u25cf\u25aa]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function firstSentence(text) {
  const cleaned = cleanText(text)
  if (!cleaned) return ''
  const parts = cleaned.split(/(?<=[.!?])\s+/)
  return (parts[0] || cleaned).trim()
}

function createRng(seed = Date.now()) {
  let state = Math.abs(Number(seed) || 1) % 2147483647
  if (!state) state = 1
  return () => {
    state = (state * 48271) % 2147483647
    return state / 2147483647
  }
}

function shuffle(list, rng) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function uniqueByLower(list) {
  const out = []
  const seen = new Set()
  for (const item of list || []) {
    const text = cleanText(item)
    if (!text) continue
    const key = text.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(text)
  }
  return out
}

function mutateToFalse(statement) {
  const s = cleanText(statement)
  if (!s) return 'This statement is not correct for this chapter.'

  const replacements = [
    [' directly proportional ', ' inversely proportional '],
    [' inversely proportional ', ' directly proportional '],
    [' increases ', ' decreases '],
    [' decreases ', ' increases '],
    [' always ', ' never '],
    [' maximum ', ' minimum '],
    [' minimum ', ' maximum '],
  ]

  for (const [from, to] of replacements) {
    const idx = s.toLowerCase().indexOf(from.trim())
    if (idx >= 0) {
      const re = new RegExp(from.trim(), 'i')
      return s.replace(re, to.trim())
    }
  }

  if (/\bis\b/i.test(s)) return s.replace(/\bis\b/i, 'is not')
  if (/\bare\b/i.test(s)) return s.replace(/\bare\b/i, 'are not')
  return `It is incorrect that ${s}`
}

function extractEquations(text) {
  return (String(text || '').match(/[A-Za-z][A-Za-z0-9_]*\s*=\s*[^.,;\n]+/g) || []).map(cleanText)
}

function buildChapterIndex() {
  const map = new Map()
  for (const subject of content.subjects || []) {
    for (const unit of subject.units || []) {
      for (const chapter of unit.chapters || []) {
        if (!chapter?.id) continue
        const key = `${subject.id}:${chapter.id}`
        if (!map.has(key)) {
          map.set(key, { subjectId: subject.id, unitId: unit.id, chapter })
        }
      }
    }
  }
  return map
}

const CHAPTER_INDEX = buildChapterIndex()

function getChapter(subjectId, chapterId) {
  if (subjectId) {
    return CHAPTER_INDEX.get(`${subjectId}:${chapterId}`) || null
  }

  for (const item of CHAPTER_INDEX.values()) {
    if (item.chapter.id === chapterId) return item
  }
  return null
}

function extractSignals(subjectId, chapter) {
  const concepts = []
  const facts = []
  const formulas = []
  const patterns = []
  const quick = []
  const mistakes = []

  for (const n of chapter.notes || []) {
    if (n.concept) concepts.push(cleanText(n.concept))
    if (n.fact) facts.push(firstSentence(n.fact))
    if (n.tip) mistakes.push(firstSentence(n.tip))
    formulas.push(...extractEquations(`${n.concept || ''} ${n.fact || ''}`))
  }

  for (const c of chapter.concept_explanations || []) {
    if (c.title) concepts.push(cleanText(c.title))
    if (c.description) facts.push(firstSentence(c.description))
    formulas.push(...extractEquations(c.description || ''))
  }

  for (const f of chapter.formulas_relations || []) {
    if (f.formula) formulas.push(cleanText(f.formula))
    if (f.meaning) facts.push(firstSentence(f.meaning))
  }

  for (const p of chapter.key_patterns || []) patterns.push(firstSentence(p))
  for (const a of chapter.application_insights || []) facts.push(firstSentence(a))
  for (const q of chapter.quick_revision || []) quick.push(firstSentence(q))

  for (const m of chapter.common_mistakes || []) {
    if (m.mistake) mistakes.push(cleanText(m.mistake))
    if (m.why) mistakes.push(firstSentence(m.why))
  }

  for (const q of chapter.quiz || []) {
    if (q.explanation) facts.push(firstSentence(q.explanation))
  }

  const subjectHint = SUBJECT_HINT[subjectId] || SUBJECT_HINT.biology
  return {
    concepts: uniqueByLower(concepts),
    facts: uniqueByLower(facts),
    formulas: uniqueByLower(formulas),
    patterns: uniqueByLower(patterns),
    quick: uniqueByLower(quick),
    mistakes: uniqueByLower(mistakes),
    subjectHint,
  }
}

function pickDistractors(pool, correct, count, rng) {
  const correctKey = cleanText(correct).toLowerCase()
  const candidates = uniqueByLower(pool).filter(item => item.toLowerCase() !== correctKey)
  return shuffle(candidates, rng).slice(0, count)
}

function buildMcq({ question, correct, distractors, explanation, tags, rng, difficulty = 'medium' }) {
  const options = shuffle([cleanText(correct), ...distractors.map(cleanText)], rng)
  const correctAnswer = options.findIndex(opt => opt.toLowerCase() === cleanText(correct).toLowerCase())
  if (options.length !== 4 || correctAnswer < 0) return null

  return {
    question: cleanText(question),
    options,
    correctAnswer,
    explanation: cleanText(explanation),
    tags: uniqueByLower(tags),
    difficulty,
    verified: false,
    source: 'external'
  }
}

function makeConceptual(signals, chapterTitle, chapterId, subjectId, count, rng) {
  const out = []
  const factsPool = uniqueByLower([...signals.facts, ...signals.quick, ...signals.formulas])
  const concepts = shuffle(signals.concepts, rng)

  for (const concept of concepts) {
    if (out.length >= count) break
    const conceptKey = concept.toLowerCase().split(':')[0]
    const correct = factsPool.find(f => f.toLowerCase().includes(conceptKey)) || factsPool[0]
    if (!correct) continue

    const distractors = pickDistractors([...factsPool, ...signals.mistakes], correct, 3, rng)
    if (distractors.length < 3) continue

    const mcq = buildMcq({
      question: `In ${chapterTitle}, which option is most accurate about ${concept}?`,
      correct,
      distractors,
      explanation: `${correct} This aligns with ${signals.subjectHint.examFocus} and is a common elimination checkpoint in objective tests.`,
      tags: [subjectId, chapterId, 'conceptual'],
      rng,
      difficulty: 'medium'
    })
    if (mcq) out.push(mcq)
  }

  return out
}

function makeApplication(signals, chapterTitle, chapterId, subjectId, count, rng) {
  const out = []
  const formulaPool = signals.formulas.length ? signals.formulas : signals.facts
  const supportPool = uniqueByLower([...signals.facts, ...signals.quick, ...signals.patterns, ...signals.mistakes])

  for (const formula of shuffle(formulaPool, rng)) {
    if (out.length >= count) break
    const correct = formula
    const distractors = pickDistractors([...formulaPool, ...supportPool], correct, 3, rng)
    if (distractors.length < 3) continue

    const mcq = buildMcq({
      question: `An application-type question from ${chapterTitle} requires selecting the most suitable relation first. Choose it.`,
      correct,
      distractors,
      explanation: `${correct} In application questions, the first mark is gained by choosing the correct governing relation before substituting values.`,
      tags: [subjectId, chapterId, 'application'],
      rng,
      difficulty: 'medium'
    })
    if (mcq) out.push(mcq)
  }

  for (const insight of shuffle(supportPool, rng)) {
    if (out.length >= count) break
    const correct = insight
    const distractors = pickDistractors([...supportPool, ...signals.mistakes], correct, 3, rng)
    if (distractors.length < 3) continue
    const mcq = buildMcq({
      question: `While solving a chapter-based problem from ${chapterTitle}, which strategy is correct?`,
      correct,
      distractors,
      explanation: `${correct} This is where students lose marks through avoidable procedural errors in objective exams.`,
      tags: [subjectId, chapterId, 'application'],
      rng,
      difficulty: 'medium'
    })
    if (mcq) out.push(mcq)
  }

  return out
}

function makeAssertionReason(signals, chapterTitle, chapterId, subjectId, count, rng) {
  const out = []
  const facts = shuffle(signals.facts, rng)
  const truthPatterns = [0, 1, 2, 3]

  for (let i = 0; i < facts.length - 1 && out.length < count; i++) {
    const assertionTrue = facts[i]
    const reasonTrue = facts[i + 1]
    const pattern = truthPatterns[out.length % truthPatterns.length]

    const assertion = pattern === 3 ? mutateToFalse(assertionTrue) : assertionTrue
    const reason = pattern === 2 ? mutateToFalse(reasonTrue) : reasonTrue

    const explanationMap = [
      `${assertionTrue} ${reasonTrue} The reason directly supports the assertion in this chapter context.`,
      `${assertionTrue} ${reasonTrue} Both are true, but the reason does not explain the assertion causally.`,
      `${assertionTrue} The reason statement is incorrect for this chapter and hence cannot justify the assertion.`,
      `${reasonTrue} The assertion statement is incorrect, while the reason remains valid.`
    ]

    const mcq = buildMcq({
      question: `Assertion-Reason (${chapterTitle}): Assertion: ${assertion} Reason: ${reason}`,
      correct: ASSERTION_REASON_OPTIONS[pattern],
      distractors: ASSERTION_REASON_OPTIONS.filter((_, idx) => idx !== pattern),
      explanation: explanationMap[pattern],
      tags: [subjectId, chapterId, 'assertion-reason'],
      rng,
      difficulty: 'medium'
    })
    if (mcq) out.push(mcq)
  }

  return out
}

function makeStatementBased(signals, chapterTitle, chapterId, subjectId, count, rng) {
  const out = []
  const facts = shuffle(signals.facts, rng)
  const patterns = [0, 2, 3]

  for (let i = 0; i < facts.length - 1 && out.length < count; i++) {
    const pattern = patterns[out.length % patterns.length]
    const s1True = facts[i]
    const s2True = facts[i + 1]

    const statement1 = pattern === 3 ? mutateToFalse(s1True) : s1True
    const statement2 = pattern === 2 ? mutateToFalse(s2True) : s2True

    const mcq = buildMcq({
      question: `For ${chapterTitle}, consider the following statements: Statement I: ${statement1} Statement II: ${statement2}`,
      correct: STATEMENT_OPTIONS[pattern],
      distractors: STATEMENT_OPTIONS.filter((_, idx) => idx !== pattern),
      explanation: `${s1True} ${s2True} Statement-based questions reward careful truth-value checking of each line independently.`,
      tags: [subjectId, chapterId, 'statement-based'],
      rng,
      difficulty: 'medium'
    })
    if (mcq) out.push(mcq)
  }

  return out
}

function makeLogicBased(signals, chapterTitle, chapterId, subjectId, count, rng) {
  const out = []
  const concepts = shuffle(signals.concepts, rng)
  const facts = shuffle(signals.facts, rng)
  const formulas = shuffle(signals.formulas.length ? signals.formulas : signals.quick, rng)

  if (concepts.length >= 2 && facts.length >= 2) {
    const p = concepts[0]
    const q = concepts[1]
    const one = facts[0]
    const two = facts[1]

    const mcq = buildMcq({
      question: `Match-the-following (MCQ) from ${chapterTitle}: List I: P. ${p}; Q. ${q}. List II: 1. ${one}; 2. ${two}. Choose the correct match.`,
      correct: MATCH_OPTIONS[0],
      distractors: MATCH_OPTIONS.slice(1),
      explanation: `${p} aligns with statement 1 and ${q} aligns with statement 2 based on chapter mapping used in logic questions.`,
      tags: [subjectId, chapterId, 'logic-based'],
      rng,
      difficulty: 'medium'
    })
    if (mcq) out.push(mcq)
  }

  if (out.length < count && formulas.length >= 2 && signals.patterns.length >= 2) {
    const p = formulas[0]
    const q = formulas[1]
    const one = signals.patterns[0]
    const two = signals.patterns[1]

    const mcq = buildMcq({
      question: `Logic-based chapter mapping in ${chapterTitle}: List I: P. ${p}; Q. ${q}. List II: 1. ${one}; 2. ${two}. Choose the correct option.`,
      correct: MATCH_OPTIONS[0],
      distractors: MATCH_OPTIONS.slice(1),
      explanation: `The first relation maps to statement 1 and the second to statement 2. Such mapping-style MCQs are common in revision sets.`,
      tags: [subjectId, chapterId, 'logic-based'],
      rng,
      difficulty: 'medium'
    })
    if (mcq) out.push(mcq)
  }

  return out.slice(0, count)
}

function makeFallbackByType(type, signals, chapterTitle, chapterId, subjectId, rng, variant = 1) {
  const factPool = uniqueByLower([...signals.facts, ...signals.quick, ...signals.patterns, ...signals.mistakes])
  const formulaPool = signals.formulas.length ? signals.formulas : factPool
  const concepts = signals.concepts.length ? signals.concepts : [chapterTitle]

  if (factPool.length < 4) return null

  if (type === 'conceptual') {
    const concept = concepts[Math.floor(rng() * concepts.length)]
    const correct = factPool[Math.floor(rng() * factPool.length)]
    const distractors = pickDistractors(factPool, correct, 3, rng)
    if (distractors.length < 3) return null
    return buildMcq({
      question: `Concept check ${variant} for ${chapterTitle}: which option best describes ${concept}?`,
      correct,
      distractors,
      explanation: `${correct} Conceptual options are usually close, so lock the chapter-defining phrase first.`,
      tags: [subjectId, chapterId, 'conceptual'],
      rng,
      difficulty: 'medium'
    })
  }

  if (type === 'application') {
    const correct = formulaPool[Math.floor(rng() * formulaPool.length)]
    const distractors = pickDistractors([...formulaPool, ...factPool], correct, 3, rng)
    if (distractors.length < 3) return null
    return buildMcq({
      question: `Application set ${variant} from ${chapterTitle}: choose the relation or rule that should be applied first.`,
      correct,
      distractors,
      explanation: `${correct} Application-based questions are solved by selecting the correct governing relation before substitution.`,
      tags: [subjectId, chapterId, 'application'],
      rng,
      difficulty: 'medium'
    })
  }

  if (type === 'assertion-reason') {
    const trueA = factPool[Math.floor(rng() * factPool.length)]
    const trueR = factPool[Math.floor(rng() * factPool.length)]
    const pattern = variant % 4
    const assertion = pattern === 3 ? mutateToFalse(trueA) : trueA
    const reason = pattern === 2 ? mutateToFalse(trueR) : trueR
    return buildMcq({
      question: `Assertion-Reason ${variant} (${chapterTitle}): Assertion: ${assertion} Reason: ${reason}`,
      correct: ASSERTION_REASON_OPTIONS[pattern],
      distractors: ASSERTION_REASON_OPTIONS.filter((_, idx) => idx !== pattern),
      explanation: `${trueA} ${trueR} Evaluate both truth values first, then decide whether the reason explains the assertion.`,
      tags: [subjectId, chapterId, 'assertion-reason'],
      rng,
      difficulty: 'medium'
    })
  }

  if (type === 'statement-based') {
    const s1 = factPool[Math.floor(rng() * factPool.length)]
    const s2 = factPool[Math.floor(rng() * factPool.length)]
    const patternCycle = [0, 2, 3, 1]
    const pattern = patternCycle[variant % patternCycle.length]
    const statement1 = pattern === 3 ? mutateToFalse(s1) : s1
    const statement2 = pattern === 2 ? mutateToFalse(s2) : s2
    return buildMcq({
      question: `Statement-based ${variant} (${chapterTitle}): Statement I: ${statement1} Statement II: ${statement2}`,
      correct: STATEMENT_OPTIONS[pattern],
      distractors: STATEMENT_OPTIONS.filter((_, idx) => idx !== pattern),
      explanation: `${s1} ${s2} In statement MCQs, evaluate each statement independently before choosing the pair.`,
      tags: [subjectId, chapterId, 'statement-based'],
      rng,
      difficulty: 'medium'
    })
  }

  if (type === 'logic-based') {
    const p = concepts[Math.floor(rng() * concepts.length)]
    const q = concepts[Math.floor(rng() * concepts.length)]
    const one = factPool[Math.floor(rng() * factPool.length)]
    const two = factPool[Math.floor(rng() * factPool.length)]
    return buildMcq({
      question: `Logic-based ${variant} in ${chapterTitle}: List I: P. ${p}; Q. ${q}. List II: 1. ${one}; 2. ${two}. Choose the correct match.`,
      correct: MATCH_OPTIONS[0],
      distractors: MATCH_OPTIONS.slice(1),
      explanation: `P maps with statement 1 and Q maps with statement 2 by chapter context. These mapping traps are common in objective tests.`,
      tags: [subjectId, chapterId, 'logic-based'],
      rng,
      difficulty: 'medium'
    })
  }

  return null
}

function ensureCategoryCount(list, target, type, signals, chapterTitle, chapterId, subjectId, rng) {
  const out = dedupeQuestions(list)
  let guard = 0
  while (out.length < target && guard < 120) {
    guard += 1
    const fallback = makeFallbackByType(type, signals, chapterTitle, chapterId, subjectId, rng, guard)
    if (!fallback) break
    out.push(fallback)
    const deduped = dedupeQuestions(out)
    out.length = 0
    out.push(...deduped)
  }
  return out.slice(0, target)
}

function dedupeQuestions(list) {
  const out = []
  const seen = new Set()
  for (const q of list) {
    const key = cleanText(q.question).toLowerCase()
    if (!key || seen.has(key)) continue
    seen.add(key)
    out.push(q)
  }
  return out
}

function buildStrictSet(subjectId, chapterId, chapterTitle, signals, rng) {
  const conceptual = ensureCategoryCount(
    makeConceptual(signals, chapterTitle, chapterId, subjectId, 4, rng),
    4,
    'conceptual',
    signals,
    chapterTitle,
    chapterId,
    subjectId,
    rng
  )
  const application = ensureCategoryCount(
    makeApplication(signals, chapterTitle, chapterId, subjectId, 3, rng),
    3,
    'application',
    signals,
    chapterTitle,
    chapterId,
    subjectId,
    rng
  )
  const assertionReason = ensureCategoryCount(
    makeAssertionReason(signals, chapterTitle, chapterId, subjectId, 3, rng),
    3,
    'assertion-reason',
    signals,
    chapterTitle,
    chapterId,
    subjectId,
    rng
  )
  const statementBased = ensureCategoryCount(
    makeStatementBased(signals, chapterTitle, chapterId, subjectId, 3, rng),
    3,
    'statement-based',
    signals,
    chapterTitle,
    chapterId,
    subjectId,
    rng
  )
  const logicBased = ensureCategoryCount(
    makeLogicBased(signals, chapterTitle, chapterId, subjectId, 2, rng),
    2,
    'logic-based',
    signals,
    chapterTitle,
    chapterId,
    subjectId,
    rng
  )

  const ordered = [
    ...conceptual,
    ...application,
    ...assertionReason,
    ...statementBased,
    ...logicBased,
  ]

  return dedupeQuestions(ordered)
}

function fillToCount(questions, count, subjectId, chapterId, chapterTitle, signals, rng) {
  const out = [...questions]
  const pool = uniqueByLower([...signals.facts, ...signals.quick, ...signals.formulas, ...signals.mistakes])
  const concepts = signals.concepts.length ? signals.concepts : [chapterTitle]
  let attempts = 0
  const maxAttempts = Math.max(80, count * 20)

  while (out.length < count && pool.length > 4 && attempts < maxAttempts) {
    attempts += 1
    const correct = pool[Math.floor(rng() * pool.length)]
    const distractors = pickDistractors(pool, correct, 3, rng)
    if (distractors.length < 3) break
    const concept = concepts[Math.floor(rng() * concepts.length)]
    const question = `Chapter-focused check (${chapterTitle}): choose the most accurate option about ${concept}.`

    const mcq = buildMcq({
      question,
      correct,
      distractors,
      explanation: `${correct} Keep the chapter scope strict and eliminate options that violate the core chapter relation.`,
      tags: [subjectId, chapterId, 'conceptual'],
      rng,
      difficulty: 'medium'
    })
    if (!mcq) continue
    out.push(mcq)
    const deduped = dedupeQuestions(out)
    out.length = 0
    out.push(...deduped)
  }

  return out.slice(0, count)
}

function attachMeta(list, chapterId) {
  const nowYear = new Date().getFullYear()
  return list.map((q, idx) => ({
    ...q,
    chapter: chapterId,
    year: nowYear - (idx % 15),
  }))
}

export function generateChapterQuestions(chapterId, needed, options = {}) {
  const { subject, seed = Date.now() } = options
  const chapterData = getChapter(subject, chapterId)
  if (!chapterData || needed <= 0) return []

  const { subjectId, chapter } = chapterData
  const chapterTitle = cleanText(chapter.title || chapter.id)
  const signals = extractSignals(subjectId, chapter)

  if (!signals.facts.length && !signals.concepts.length && !signals.formulas.length) {
    return []
  }

  const targetPerSet = 15
  const setsNeeded = Math.ceil(needed / targetPerSet)
  const merged = []

  for (let setIndex = 0; setIndex < setsNeeded; setIndex++) {
    const rng = createRng(Number(seed) + (setIndex + 1) * 9973)
    const strictSet = buildStrictSet(subjectId, chapterId, chapterTitle, signals, rng)
    const completed = fillToCount(strictSet, targetPerSet, subjectId, chapterId, chapterTitle, signals, rng)
    merged.push(...completed)
  }

  const unique = dedupeQuestions(merged)
  const finalQuestions = attachMeta(unique, chapterId)

  if (finalQuestions.length >= needed) return finalQuestions.slice(0, needed)

  // Final fallback to ensure exact count.
  const rng = createRng(Number(seed) + 777)
  const topped = fillToCount(finalQuestions, needed, subjectId, chapterId, chapterTitle, signals, rng)
  return attachMeta(dedupeQuestions(topped), chapterId).slice(0, needed)
}
