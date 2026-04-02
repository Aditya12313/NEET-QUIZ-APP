import { useMemo, useState, useEffect, useCallback } from 'react'
import content from './data/neetContent.js'
import { adaptChapter } from './utils/chapterAdapter.js'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'
console.log("Using API:", API);

const SUBJECTS = [
  { id: 'biology',   label: 'Biology',   emoji: '🧬' },
  { id: 'chemistry', label: 'Chemistry', emoji: '⚗️' },
  { id: 'physics',   label: 'Physics',   emoji: '⚡' },
]

const MOTIVATIONAL = [
  "You're doing well, Hitashi. Keep going.",
  "Consistency beats intensity. You've got this.",
  "One chapter at a time — you're building a topper's foundation.",
  "Every concept you revise is a mark secured.",
  "Take a short break if needed — then come back stronger.",
]

const TABS = ['Concepts', 'Patterns', 'Formulas', 'Insights', 'Mistakes', 'Quick Revision']
const QUIZ_SIZE = 15

function mergeUniqueStrings(...groups) {
  const seen = new Set()
  const merged = []
  groups.flat().forEach(item => {
    if (!item) return
    const key = String(item).trim().toLowerCase()
    if (!key || seen.has(key)) return
    seen.add(key)
    merged.push(item)
  })
  return merged
}

function mergeUniqueObjects(...groups) {
  const seen = new Set()
  const merged = []
  groups.flat().forEach(item => {
    if (!item || typeof item !== 'object') return
    const key = `${item.title ?? item.formula ?? item.mistake ?? ''}::${item.description ?? item.meaning ?? item.why ?? ''}`
      .trim()
      .toLowerCase()
    if (!key || seen.has(key)) return
    seen.add(key)
    merged.push(item)
  })
  return merged
}

function normalizeQuizQuestion(q) {
  if (!q || typeof q !== 'object') return null
  const question = String(q.question ?? '').trim()
  const options = Array.isArray(q.options)
    ? q.options.map(opt => String(opt ?? '').trim()).filter(Boolean)
    : []
  const explanation = String(q.explanation ?? '').trim()
  const correctAnswer = Number(q.correctAnswer)
  const isTemplate = question.startsWith('Realistic simulated question')

  if (!question || isTemplate) return null
  if (options.length !== 4) return null
  if (!Number.isInteger(correctAnswer) || correctAnswer < 0 || correctAnswer > 3) return null
  if (!explanation) return null

  return {
    ...q,
    question,
    options,
    explanation,
    correctAnswer,
  }
}

function mergeUniqueQuestions(...groups) {
  const seen = new Set()
  const merged = []
  groups.flat().forEach(raw => {
    const q = normalizeQuizQuestion(raw)
    if (!q) return
    const key = q.question.toLowerCase().replace(/\s+/g, ' ').trim()
    if (!key || seen.has(key)) return
    seen.add(key)
    merged.push(q)
  })
  return merged
}

function shuffled(list) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = copy[i]
    copy[i] = copy[j]
    copy[j] = tmp
  }
  return copy
}

function quizSignature(list) {
  return list.map(q => String(q.question ?? '').trim().toLowerCase()).join('||')
}

function hashText(text) {
  const value = String(text ?? '')
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = ((hash << 5) - hash) + value.charCodeAt(i)
    hash |= 0
  }
  return hash
}

function chunkQuestions(list, size) {
  if (!Array.isArray(list) || size <= 0 || !list.length) return []
  if (list.length <= size) return [list.slice(0, size)]

  const chunks = []
  for (let i = 0; i < list.length; i += size) {
    const chunk = list.slice(i, i + size)
    if (chunk.length < size) {
      const needed = size - chunk.length
      chunks.push([...chunk, ...list.slice(0, needed)])
    } else {
      chunks.push(chunk)
    }
  }
  return chunks
}

function getNextQuestionSet(pool, { subjectId, chapterId, size }) {
  const fallback = { questions: [], setIndex: 0, totalSets: 0 }
  if (!Array.isArray(pool) || !pool.length) return fallback

  const seed = `${subjectId ?? ''}:${chapterId ?? ''}`
  const ordered = [...pool].sort((a, b) => {
    const aKey = `${seed}:${a.question ?? ''}`
    const bKey = `${seed}:${b.question ?? ''}`
    return hashText(aKey) - hashText(bKey)
  })

  const sets = chunkQuestions(ordered, size)
  if (!sets.length) return fallback

  const storageKey = `neet_quiz_set_idx:${seed}`
  let previousIndex = -1
  try {
    const stored = Number.parseInt(localStorage.getItem(storageKey) ?? '-1', 10)
    if (Number.isInteger(stored) && stored >= -1) previousIndex = stored
  } catch {
    previousIndex = -1
  }

  const nextIndex = (previousIndex + 1) % sets.length

  try {
    localStorage.setItem(storageKey, String(nextIndex))
  } catch {
    // ignore storage failures (private mode, quota, etc.)
  }

  return {
    questions: sets[nextIndex],
    setIndex: nextIndex + 1,
    totalSets: sets.length,
  }
}

function parseLabeledItems(section) {
  const cleaned = String(section ?? '').replace(/\s+/g, ' ').trim()
  if (!cleaned) return { items: [], trailingText: '' }

  const labelRegex = /([A-Za-z0-9]+)[\.)]\s*/g
  const labels = []
  let labelMatch

  while ((labelMatch = labelRegex.exec(cleaned)) !== null) {
    labels.push({
      label: labelMatch[1],
      start: labelMatch.index,
      contentStart: labelRegex.lastIndex,
    })
  }

  if (labels.length) {
    const items = []
    let trailingText = ''

    for (let i = 0; i < labels.length; i++) {
      const current = labels[i]
      const next = labels[i + 1]
      const rawText = cleaned.slice(current.contentStart, next ? next.start : cleaned.length).replace(/^;\s*/, '').trim()
      if (!rawText) continue

      if (!next) {
        const split = rawText.match(/^(.*?)(\b(?:Choose|Select|Match)\b.*)$/i)
        if (split) {
          const itemText = split[1].trim().replace(/[;,.]\s*$/, '')
          trailingText = split[2].trim()
          if (itemText) items.push({ label: current.label, text: itemText })
          continue
        }
      }

      items.push({ label: current.label, text: rawText })
    }

    return { items, trailingText }
  }

  return {
    items: cleaned
      .split(';')
      .map(part => part.trim())
      .filter(Boolean)
      .map((text, index) => ({ label: String(index + 1), text })),
    trailingText: '',
  }
}

function QuestionStem({ text }) {
  const question = String(text ?? '').trim()
  if (!question) return null

  const isMatchType = /list i:/i.test(question) && /list ii:/i.test(question)
  if (isMatchType) {
    const intro = (question.match(/^(.*?)(?=List I:)/i)?.[1] ?? '').trim()
    const listISection = (question.match(/List I:\s*(.*?)(?=List II:)/i)?.[1] ?? '').trim()
    const listIISection = (question.match(/List II:\s*(.*)$/i)?.[1] ?? '').trim()

    const listIParsed = parseLabeledItems(listISection)
    const listIIParsed = parseLabeledItems(listIISection)
    const listI = listIParsed.items
    const listII = listIIParsed.items
    const matchPrompt = [listIParsed.trailingText, listIIParsed.trailingText].filter(Boolean).join(' ')
    const rowCount = Math.max(listI.length, listII.length)

    if (!rowCount) {
      return <p className="text-ink font-medium leading-snug text-sm">{question}</p>
    }

    return (
      <div className="space-y-3 text-sm text-ink leading-relaxed">
        {intro && <p className="font-medium">{intro}</p>}
        <div className="overflow-x-auto">
          <table className="w-full border border-rule rounded-lg overflow-hidden text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-xs uppercase tracking-wide text-muted font-semibold">List I</th>
                <th className="px-3 py-2 text-xs uppercase tracking-wide text-muted font-semibold">List II</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: rowCount }).map((_, idx) => {
                const left = listI[idx]
                const right = listII[idx]
                return (
                  <tr key={idx} className="border-t border-rule align-top">
                    <td className="px-3 py-2">
                      {left ? (
                        <span>
                          <span className="font-semibold mr-2">{left.label}.</span>
                          {left.text}
                        </span>
                      ) : null}
                    </td>
                    <td className="px-3 py-2">
                      {right ? (
                        <span>
                          <span className="font-semibold mr-2">{right.label}.</span>
                          {right.text}
                        </span>
                      ) : null}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {matchPrompt && <p className="text-xs text-muted">{matchPrompt}</p>}
      </div>
    )
  }

  const isStatementType = /statement i:/i.test(question) && /statement ii:/i.test(question)
  if (isStatementType) {
    const intro = (question.match(/^(.*?)(?=Statement I:)/i)?.[1] ?? '').trim()
    const statementI = (question.match(/Statement I:\s*(.*?)(?=Statement II:)/i)?.[1] ?? '').trim()
    const statementII = (question.match(/Statement II:\s*(.*)$/i)?.[1] ?? '').trim()

    return (
      <div className="space-y-3 text-sm text-ink leading-relaxed">
        {intro && <p className="font-medium">{intro}</p>}
        {statementI && (
          <div className="rounded-lg border border-rule p-3 bg-slate-50/60">
            <p className="text-xs uppercase tracking-wide text-muted font-semibold mb-1">Statement I</p>
            <p>{statementI}</p>
          </div>
        )}
        {statementII && (
          <div className="rounded-lg border border-rule p-3 bg-slate-50/60">
            <p className="text-xs uppercase tracking-wide text-muted font-semibold mb-1">Statement II</p>
            <p>{statementII}</p>
          </div>
        )}
      </div>
    )
  }

  return <p className="text-ink font-medium leading-snug text-sm">{question}</p>
}

function loadProgress() {
  try { return JSON.parse(localStorage.getItem('neet_progress') || '{}') } catch { return {} }
}
function saveProgress(p) {
  try { localStorage.setItem('neet_progress', JSON.stringify(p)) } catch {}
}

export default function App() {
  const [view,         setView]        = useState('landing')
  const [subjectId,    setSubjectId]   = useState(null)
  const [unitId,       setUnitId]      = useState(null)
  const [chapterId,    setChapterId]   = useState(null)
  const [activeTab,    setActiveTab]   = useState(0)
  const [quizQ,        setQuizQ]       = useState([])
  const [quizIdx,      setQuizIdx]     = useState(0)
  const [picked,       setPicked]      = useState(null)
  const [revealed,     setRevealed]    = useState(false)
  const [sessionScore, setScore]       = useState(0)
  const [progress,     setProgress]    = useState(loadProgress)
  const [revision,     setRevision]    = useState(null)
  const [revLoading,   setRevLoading]  = useState(false)
  const [quizLoading,  setQuizLoading] = useState(false)
  const [quizSetInfo,  setQuizSetInfo] = useState({ setIndex: 0, totalSets: 0 })
  const [motiIdx]                      = useState(() => Math.floor(Math.random() * MOTIVATIONAL.length))
  const [sidebarOpen,  setSidebarOpen] = useState(false)

  useEffect(() => { saveProgress(progress) }, [progress])

  const subjectData = useMemo(() => content.subjects.find(s => s.id === subjectId) ?? null, [subjectId])
  const unitData    = useMemo(() => subjectData?.units.find(u => u.id === unitId) ?? null, [subjectData, unitId])
  const chapterRaw  = useMemo(() => unitData?.chapters.find(c => c.id === chapterId) ?? null, [unitData, chapterId])
  const chapterData = useMemo(() => adaptChapter(chapterRaw), [chapterRaw])

  const chapterKey = subjectId && chapterId ? `${subjectId}:${chapterId}` : null
  const cp         = chapterKey ? (progress[chapterKey] ?? {}) : {}

  const getChapterProg = useCallback((sid, cid) => progress[`${sid}:${cid}`] ?? {}, [progress])

  const markRevised = useCallback(() => {
    if (!chapterKey) return
    setProgress(p => ({ ...p, [chapterKey]: { ...p[chapterKey], revised: !p[chapterKey]?.revised } }))
  }, [chapterKey])

  function subjectStats(sid) {
    const sub = content.subjects.find(s => s.id === sid)
    if (!sub) return { total: 0, revised: 0 }
    let total = 0, revised = 0
    sub.units.forEach(u => u.chapters.forEach(c => {
      total++
      if (progress[`${sid}:${c.id}`]?.revised) revised++
    }))
    return { total, revised }
  }

  // ── Navigation ───────────────────────────────────────────────────────────
  const goLanding   = () => setView('landing')
  const goSubjects  = () => setView('subjects')
  const goUnits     = sid => { setSubjectId(sid); setUnitId(null); setView('units') }
  const goChapters  = uid => { setUnitId(uid); setChapterId(null); setView('chapters') }
  const goChapter   = cid => { setChapterId(cid); setRevision(null); setView('chapter') }
  const goRevision  = () => { setActiveTab(0); setView('revision') }

  // ── Practice PYQs ────────────────────────────────────────────────────────
  async function startQuiz() {
    setQuizLoading(true)
    let apiQuestions = []
    try {
      const chapterParam = encodeURIComponent(chapterId ?? '')
      const subjectParam = encodeURIComponent(subjectId ?? '')
      // Adding a timestamp to bust cache in case backend doesn't randomize aggressively
      const r = await fetch(`${API}/api/questions?chapter=${chapterParam}&subject=${subjectParam}&limit=${QUIZ_SIZE}&t=${Date.now()}`)
      if (r.ok) {
        const data = await r.json()
        apiQuestions = data.questions ?? []
      } else {
        console.error("API error while fetching questions:", r.statusText)
      }
    } catch (err) {
      console.error("Fetch failed parsing questions:", err.message)
    }

    const localQuestions = chapterData?.quiz ?? []
    const pool = mergeUniqueQuestions(apiQuestions, localQuestions)
    let { questions, setIndex, totalSets } = getNextQuestionSet(pool, {
      subjectId,
      chapterId,
      size: QUIZ_SIZE,
    })

    // Safety fallback: if set rotation fails for any reason, keep old random behavior.
    if (!questions.length && pool.length) {
      questions = shuffled(pool).slice(0, QUIZ_SIZE)
      setIndex = 1
      totalSets = Math.max(1, Math.ceil(pool.length / QUIZ_SIZE))
    }

    // Avoid showing the exact same set/order when only one set exists.
    if (questions.length > 1 && totalSets <= 1 && quizSignature(questions) === quizSignature(quizQ)) {
      questions = [...questions.slice(1), questions[0]]
    }

    setQuizLoading(false)
    if (!questions.length) return
    setQuizSetInfo({ setIndex, totalSets })
    setQuizQ(questions)
    setQuizIdx(0); setPicked(null); setRevealed(false); setScore(0)
    setView('quiz')
  }

  // ── Generate Revision ────────────────────────────────────────────────────
  async function generateRevision() {
    setRevLoading(true)
    try {
      const chapterParam = encodeURIComponent(chapterId ?? '')
      const subjectParam = encodeURIComponent(subjectId ?? '')
      // Pre-fetch questions to ensure the backend auto-generates external mocks if DB is empty
      await fetch(`${API}/api/questions?chapter=${chapterParam}&subject=${subjectParam}&limit=${QUIZ_SIZE}`).catch(err => console.error(err))

      const r = await fetch(`${API}/api/revision`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chapter: chapterId }),
      })
      if (r.ok) {
        const data = await r.json()
        if (data.count > 0 || data.concepts?.length > 0) { 
          setRevision(data); goRevision(); setRevLoading(false); return 
        }
      } else {
        console.error("API error while fetching revision:", r.statusText)
      }
    } catch (err) {
      console.error("Fetch failed generating revision:", err.message)
    }
    setRevision(null)
    goRevision()
    setRevLoading(false)
  }

  // ── Quiz logic ───────────────────────────────────────────────────────────
  const q = quizQ[quizIdx]

  function submitAnswer() {
    if (picked === null || revealed) return
    if (picked === q.correctAnswer) setScore(s => s + 1)
    setRevealed(true)
  }

  async function nextQuestion() {
    const correct = picked === q.correctAnswer
    const newScore = sessionScore + (correct ? 1 : 0)
    if (quizIdx < quizQ.length - 1) {
      setQuizIdx(i => i + 1); setPicked(null); setRevealed(false)
    } else {
      const finalScore = revealed ? newScore : sessionScore
      // Persist locally
      if (chapterKey) {
        setProgress(p => ({ ...p, [chapterKey]: { ...p[chapterKey], quizScore: finalScore, quizTotal: quizQ.length, lastAttempt: new Date().toISOString() } }))
      }
      // Submit to backend (fire-and-forget)
      const weakTags = quizQ.filter((_, i) => i !== quizIdx || !correct).flatMap(qi => qi.tags ?? [])
      try {
        await fetch(`${API}/api/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chapter: chapterId, score: finalScore, total: quizQ.length, weakTags }),
        }).catch(err => console.error("Submit API error:", err.message))
      } catch (err) {
        console.error("Fetch failed submittting data:", err.message)
      }
      setView('result')
    }
  }

  // ── Revision content source (backend or local) ───────────────────────────
  // ── Revision content source (backend + static local overrides) ───────────────────────
  const revConcepts   = mergeUniqueObjects(chapterData?.concept_explanations ?? [], revision?.concept_explanations ?? [])
  const revPatterns   = mergeUniqueStrings(chapterData?.key_patterns ?? [], revision?.key_patterns ?? [])
  const revFormulas   = mergeUniqueObjects(chapterData?.formulas_relations ?? [], revision?.formulas_relations ?? [])
  const revInsights   = mergeUniqueStrings(chapterData?.application_insights ?? [], revision?.application_insights ?? [])
  const revMistakes   = mergeUniqueObjects(chapterData?.common_mistakes ?? [], revision?.common_mistakes ?? [])
  const revQuick      = mergeUniqueStrings(chapterData?.quick_revision ?? [], revision?.quick_revision ?? [])

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="app-shell">

      {/* ── LEFT SIDEBAR ──────────────────────────────────────────────── */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <span className="text-lg font-serif text-ink">📘 NEET</span>
          <button className="sidebar-close md:hidden" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>

        {SUBJECTS.map(s => {
          const sub = content.subjects.find(x => x.id === s.id)
          return (
            <div key={s.id} className="sidebar-subject">
              <button
                className={`sidebar-subject-btn ${subjectId === s.id ? 'sidebar-subject-active' : ''}`}
                onClick={() => { goUnits(s.id); setSidebarOpen(false) }}
              >
                <span>{s.emoji}</span> {s.label}
              </button>
              {subjectId === s.id && sub?.units.map(u => (
                <div key={u.id} className="sidebar-unit">
                  <button
                    className={`sidebar-unit-btn ${unitId === u.id ? 'sidebar-unit-active' : ''}`}
                    onClick={() => { goChapters(u.id); setSidebarOpen(false) }}
                  >
                    {u.name}
                  </button>
                  {unitId === u.id && u.chapters.map(c => {
                    const p2 = getChapterProg(s.id, c.id)
                    return (
                      <button
                        key={c.id}
                        className={`sidebar-chapter-btn ${chapterId === c.id ? 'sidebar-chapter-active' : ''}`}
                        onClick={() => { setSubjectId(s.id); goChapter(c.id); setSidebarOpen(false) }}
                      >
                        <span className="flex-1 text-left">{c.title}</span>
                        {p2.revised && <span className="text-green-500 text-xs">✓</span>}
                      </button>
                    )
                  })}
                </div>
              ))}
            </div>
          )
        })}

        <button className="sidebar-home-btn" onClick={() => { goLanding(); setSidebarOpen(false) }}>
          ← Home
        </button>
      </aside>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────── */}
      <main className="main-content">

        {/* Mobile topbar */}
        <div className="mobile-topbar md:hidden">
          <button className="back-link" onClick={() => setSidebarOpen(true)}>☰ Menu</button>
          <span className="font-serif text-ink text-sm">Hitashi · NEET</span>
        </div>

        <div className="content-inner">

          {/* ── LANDING ───────────────────────────────────────────────── */}
          {view === 'landing' && (
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
              <div className="mb-5 text-5xl">📘</div>
              <h1 className="font-serif text-4xl text-ink mb-2">Hi, Hitashi</h1>
              <p className="text-muted text-sm mb-1">Your personal NEET revision system.</p>
              <p className="text-xs text-muted italic mb-10">{MOTIVATIONAL[motiIdx]}</p>
              <button className="btn-primary px-8 py-3" onClick={goSubjects}>Begin Revision →</button>
            </div>
          )}

          {/* ── SUBJECTS ──────────────────────────────────────────────── */}
          {view === 'subjects' && (
            <div>
              <button className="back-link mb-6" onClick={goLanding}>← Home</button>
              <h2 className="font-serif text-3xl text-ink mb-1">Subjects</h2>
              <p className="text-muted text-sm mb-6">Select a subject to begin.</p>
              <div className="grid gap-3">
                {SUBJECTS.map(s => {
                  const { total, revised } = subjectStats(s.id)
                  const pct = total ? Math.round((revised / total) * 100) : 0
                  return (
                    <div key={s.id} className="subject-card" onClick={() => goUnits(s.id)}>
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{s.emoji}</span>
                        <div className="flex-1">
                          <p className="font-medium text-ink">{s.label}</p>
                          <p className="text-xs text-muted">{revised}/{total} chapters revised</p>
                          <div className="progress-track mt-2">
                            <div className="progress-fill" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                        <span className="text-muted text-sm">→</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── UNITS ─────────────────────────────────────────────────── */}
          {view === 'units' && subjectData && (
            <div>
              <button className="back-link mb-6" onClick={goSubjects}>← Subjects</button>
              <h2 className="font-serif text-3xl text-ink mb-1">{subjectData.name}</h2>
              <p className="text-muted text-sm mb-6">Select a unit.</p>
              <div>
                {subjectData.units.map((u, i) => (
                  <div key={u.id} className="index-row" onClick={() => goChapters(u.id)}>
                    <span className="flex gap-3 items-start text-ink text-sm max-w-[85%]">
                      <span className="text-muted shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      {u.name}
                    </span>
                    <span className="text-muted text-sm">→</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CHAPTERS ──────────────────────────────────────────────── */}
          {view === 'chapters' && unitData && (
            <div>
              <button className="back-link mb-6" onClick={() => setView('units')}>← {subjectData?.name}</button>
              <h2 className="font-serif text-2xl text-ink mb-1">{unitData.name}</h2>
              <p className="text-muted text-sm mb-6">Choose a chapter.</p>
              <div>
                {unitData.chapters.map((c, i) => {
                  const p2 = getChapterProg(subjectId, c.id)
                  return (
                    <div key={c.id} className="index-row" onClick={() => goChapter(c.id)}>
                      <span className="flex gap-3 items-start text-ink text-sm max-w-[75%]">
                        <span className="text-muted shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        {c.title}
                      </span>
                      <span className="flex items-center gap-2 shrink-0">
                        {p2.revised && <span className="badge-revised">✓ Revised</span>}
                        {p2.quizScore !== undefined && <span className="text-xs text-muted">{p2.quizScore}/{p2.quizTotal}</span>}
                        {!p2.revised && p2.quizScore === undefined && <span className="text-muted text-sm">→</span>}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── CHAPTER (two-button) ─────────────────────────────────── */}
          {view === 'chapter' && chapterData && (
            <div>
              <button className="back-link mb-6" onClick={() => setView('chapters')}>← {unitData?.name}</button>
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Chapter</p>
                  <h2 className="font-serif text-2xl text-ink">{chapterData.title}</h2>
                </div>
                <button
                  className={`mark-btn ${cp.revised ? 'mark-btn-done' : ''}`}
                  onClick={markRevised}
                >
                  {cp.revised ? '✓ Revised' : 'Mark Revised'}
                </button>
              </div>

              {cp.quizScore !== undefined && (
                <div className="note-card mb-6 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="text-sm text-ink font-medium">Last quiz: {cp.quizScore}/{cp.quizTotal}</p>
                    <p className="text-xs text-muted">{new Date(cp.lastAttempt).toLocaleDateString()}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                <button className="chapter-action-btn" onClick={startQuiz} disabled={quizLoading}>
                  <span className="text-2xl mb-2">📝</span>
                  <span className="font-medium text-ink">{quizLoading ? 'Loading...' : 'Practice PYQs'}</span>
                  <span className="text-xs text-muted mt-1">Dynamic from Database</span>
                </button>
                <button
                  className="chapter-action-btn"
                  onClick={generateRevision}
                  disabled={revLoading}
                >
                  <span className="text-2xl mb-2">📖</span>
                  <span className="font-medium text-ink">{revLoading ? 'Generating…' : 'Generate Revision'}</span>
                  <span className="text-xs text-muted mt-1">Concepts · Formulas · Tips</span>
                </button>
              </div>
            </div>
          )}

          {/* ── REVISION ─────────────────────────────────────────────── */}
          {view === 'revision' && chapterData && (
            <div>
              <button className="back-link mb-5" onClick={() => setView('chapter')}>← {chapterData.title}</button>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Revision Notes</p>
                  <h2 className="font-serif text-2xl text-ink">{chapterData.title}</h2>
                </div>
                <button className={`mark-btn ${cp.revised ? 'mark-btn-done' : ''}`} onClick={markRevised}>
                  {cp.revised ? '✓ Revised' : 'Mark Revised'}
                </button>
              </div>

              <div className="tab-row mb-4">
                {TABS.map((t, i) => (
                  <button key={t} className={`tab-btn ${activeTab === i ? 'tab-active' : ''}`} onClick={() => setActiveTab(i)}>{t}</button>
                ))}
              </div>

              <div className="note-card">
                {activeTab === 0 && (
                  <ul className="space-y-4">
                    {revConcepts.map((c, i) => (
                      <li key={i} className="bg-slate-50 border p-3 rounded-lg">
                        <strong className="block text-ink text-sm mb-1">{c.title}</strong>
                        <span className="text-muted text-sm block leading-relaxed">{c.description}</span>
                      </li>
                    ))}
                    {!revConcepts.length && <li className="text-muted text-sm">No concept explanations available.</li>}
                  </ul>
                )}
                {activeTab === 1 && (
                  <ul className="space-y-3">
                    {revPatterns.map((p, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed p-2 bg-blue-50/50 rounded border-l-2 border-blue-400">
                        <span className="text-ink">{p}</span>
                      </li>
                    ))}
                    {!revPatterns.length && <li className="text-muted text-sm">No patterns found.</li>}
                  </ul>
                )}
                {activeTab === 2 && (
                  <ul className="space-y-3">
                    {revFormulas.map((f, i) => (
                      <li key={i} className="flex flex-col gap-1 text-sm leading-relaxed p-3 bg-white border rounded">
                        <span className="text-indigo-700 font-mono font-medium">{f.formula}</span>
                        <span className="text-muted text-xs">{f.meaning}</span>
                      </li>
                    ))}
                    {!revFormulas.length && <li className="text-muted text-sm">No formulas found in PYQs.</li>}
                  </ul>
                )}
                {activeTab === 3 && (
                  <ul className="space-y-3">
                    {revInsights.map((ins, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed p-2 bg-emerald-50/50 rounded border-l-2 border-emerald-400">
                        <span className="text-ink">{ins}</span>
                      </li>
                    ))}
                    {!revInsights.length && <li className="text-muted text-sm">No application insights available.</li>}
                  </ul>
                )}
                {activeTab === 4 && (
                  <ul className="space-y-4">
                    {revMistakes.map((m, i) => (
                      <li key={i} className="p-3 bg-red-50/30 rounded border border-red-100">
                        <strong className="block text-sm text-red-600 mb-1">⚠️ {m.mistake}</strong>
                        <span className="text-xs text-muted block leading-relaxed">{m.why}</span>
                      </li>
                    ))}
                    {!revMistakes.length && <li className="text-muted text-sm">No common mistakes available.</li>}
                  </ul>
                )}
                {activeTab === 5 && (
                  <ul className="space-y-3 marker:text-ink list-disc pl-5">
                    {revQuick.map((q, i) => (
                      <li key={i} className="text-sm leading-relaxed text-ink pl-1">
                        {q}
                      </li>
                    ))}
                    {!revQuick.length && <li className="text-muted text-sm">No quick facts found.</li>}
                  </ul>
                )}
              </div>

              <div className="flex justify-between mt-5">
                <button className="btn-outline text-sm" onClick={() => setActiveTab(t => Math.max(0, t - 1))} disabled={activeTab === 0}>← Prev</button>
                {activeTab < TABS.length - 1
                  ? <button className="btn-primary text-sm" onClick={() => setActiveTab(t => Math.min(TABS.length - 1, t + 1))}>Next →</button>
                  : <button className="btn-primary text-sm" onClick={startQuiz}>Take Quiz →</button>
                }
              </div>
            </div>
          )}

          {/* ── QUIZ ─────────────────────────────────────────────────── */}
          {view === 'quiz' && q && (
            <div>
              <button className="back-link mb-5" onClick={() => setView('chapter')}>← Back</button>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">Quiz · PYQs</p>
                  <h2 className="font-serif text-xl text-ink">{chapterData?.title}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    className="text-xs btn-outline py-1 px-3 border border-slate-200 text-slate-500 hover:text-ink transition-colors"
                    onClick={startQuiz}
                    disabled={quizLoading}
                  >
                    {quizLoading ? '↻ Loading...' : '↻ New Questions'}
                  </button>
                  {quizSetInfo.totalSets > 0 && (
                    <span className="text-muted text-xs">Set {quizSetInfo.setIndex}/{quizSetInfo.totalSets}</span>
                  )}
                  <span className="text-muted text-sm">{quizIdx + 1}/{quizQ.length}</span>
                </div>
              </div>
              <div className="progress-track mb-5">
                <div className="progress-fill" style={{ width: `${(quizIdx / quizQ.length) * 100}%` }} />
              </div>
              {q.year && <p className="text-xs text-muted mb-2">NEET {q.year}</p>}
              <div className="border border-rule rounded-xl p-5 mb-4 bg-white">
                <QuestionStem text={q.question} />
              </div>
              <div className="space-y-2 mb-4">
                {q.options.map((opt, i) => {
                  let cls = 'option-btn'
                  if (revealed) {
                    if (i === q.correctAnswer) cls += ' option-correct'
                    else if (i === picked) cls += ' option-wrong'
                  } else if (i === picked) cls += ' option-selected'
                  return (
                    <button key={i} className={cls} disabled={revealed} onClick={() => setPicked(i)}>
                      <span className="option-letter">{['A','B','C','D'][i]}</span>
                      {opt}
                    </button>
                  )
                })}
              </div>
              {!revealed
                ? <button className="btn-primary" disabled={picked === null} onClick={submitAnswer}>Submit Answer</button>
                : (
                  <div className="explanation-card mt-3">
                    <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1">Explanation</p>
                    <p className="text-sm text-ink leading-relaxed">{q.explanation}</p>
                    <button className="btn-outline mt-4 text-sm" onClick={nextQuestion}>
                      {quizIdx < quizQ.length - 1 ? 'Next Question →' : 'Finish Quiz'}
                    </button>
                  </div>
                )
              }
            </div>
          )}

          {/* ── RESULT ───────────────────────────────────────────────── */}
          {view === 'result' && (
            <div className="flex flex-col items-center justify-center min-h-[55vh] text-center">
              <p className="text-xs text-muted uppercase tracking-widest mb-4">Result</p>
              <h2 className="font-serif text-5xl text-ink mb-2">
                {cp.quizScore ?? 0} <span className="text-muted text-3xl">/ {cp.quizTotal ?? quizQ.length}</span>
              </h2>
              <p className="text-muted mt-3 mb-2">
                {(cp.quizScore ?? 0) === (cp.quizTotal ?? quizQ.length)
                  ? '🎯 Perfect, Hitashi! Outstanding.'
                  : (cp.quizScore ?? 0) >= Math.ceil((cp.quizTotal ?? quizQ.length) * 0.6)
                    ? "👍 Good work. A little more revision and you'll ace it."
                    : '📖 Revise the notes again — you can improve this.'}
              </p>
              <p className="text-xs text-muted italic mb-10">{MOTIVATIONAL[(motiIdx + 1) % MOTIVATIONAL.length]}</p>
              <div className="flex gap-3">
                <button className="btn-outline" onClick={() => setView('revision')}>Revise Notes</button>
                <button className="btn-primary" onClick={() => setView('chapters')}>Back to Chapters</button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  )
}
