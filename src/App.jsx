import { useMemo, useState } from 'react'
import content from './data/neetContent.json'

const SUBJECTS = [
  { id: 'botany',   label: 'Botany' },
  { id: 'zoology',  label: 'Zoology' },
  { id: 'chemistry',label: 'Chemistry' },
  { id: 'physics',  label: 'Physics' },
]

export default function App() {
  const [view, setView]               = useState('landing')
  const [subjectId, setSubjectId]     = useState(null)
  const [unitId, setUnitId]           = useState(null)
  const [chapterId, setChapterId]     = useState(null)
  const [noteIndex, setNoteIndex]     = useState(0)
  const [quizIndex, setQuizIndex]     = useState(0)
  const [picked, setPicked]           = useState(null)
  const [revealed, setRevealed]       = useState(false)
  const [score, setScore]             = useState(0)
  const [done, setDone]               = useState({})   // chapterKey → score

  const subjectData = useMemo(
    () => content.subjects.find(s => s.id === subjectId) ?? null,
    [subjectId]
  )
  const unitData = useMemo(
    () => subjectData?.units.find(u => u.id === unitId) ?? null,
    [subjectData, unitId]
  )
  const chapterData = useMemo(
    () => unitData?.chapters.find(c => c.id === chapterId) ?? null,
    [unitData, chapterId]
  )

  const notes = chapterData?.notes ?? []
  const quiz  = chapterData?.quiz  ?? []
  const q     = quiz[quizIndex]

  // ── navigation helpers ─────────────────────────────────────
  function goSubjects()             { setView('subjects') }
  function goUnits(sid)             { setSubjectId(sid); setUnitId(null); setView('units') }
  function goChapters(uid)          { setUnitId(uid); setChapterId(null); setView('chapters') }
  function goRevision(cid) {
    setChapterId(cid); setNoteIndex(0)
    setQuizIndex(0); setPicked(null); setRevealed(false); setScore(0)
    setView('revision')
  }
  function startQuiz() {
    setQuizIndex(0); setPicked(null); setRevealed(false); setScore(0)
    setView('quiz')
  }
  function submitAnswer() {
    if (picked === null || revealed) return
    if (picked === q.correctAnswer) setScore(s => s + 1)
    setRevealed(true)
  }
  function nextQuestion() {
    if (quizIndex < quiz.length - 1) {
      setQuizIndex(i => i + 1); setPicked(null); setRevealed(false)
    } else {
      const key = `${subjectId}:${chapterId}`
      setDone(d => ({ ...d, [key]: score + (picked === q.correctAnswer ? 1 : 0) }))
      setView('result')
    }
  }

  const finalScore = score + (picked === q?.correctAnswer && revealed ? 0 : 0)
  const resultScore = done[`${subjectId}:${chapterId}`] ?? score

  // ── shared wrapper ─────────────────────────────────────────
  return (
    <div className="min-h-screen bg-paper">
      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* ── LANDING ───────────────────────────────────────── */}
        {view === 'landing' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="font-serif text-5xl text-ink mb-3">Hi Hitashi</h1>
            <p className="text-muted text-lg mb-10">Let's revise, chapter by chapter.</p>
            <button className="btn-outline" onClick={goSubjects}>Start</button>
          </div>
        )}

        {/* ── SUBJECTS ──────────────────────────────────────── */}
        {view === 'subjects' && (
          <div>
            <button className="back-link mb-8" onClick={() => setView('landing')}>← Back</button>
            <h2 className="font-serif text-3xl text-ink mb-1">Subjects</h2>
            <p className="text-muted text-sm mb-8">Choose a subject to begin.</p>
            <div className="space-y-0">
              {SUBJECTS.map((s, i) => (
                <div key={s.id} className="index-row" onClick={() => goUnits(s.id)}>
                  <span className="text-ink">{i + 1}.&nbsp;&nbsp;{s.label}</span>
                  <span className="text-muted text-sm">→</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── UNITS ─────────────────────────────────────────── */}
        {view === 'units' && subjectData && (
          <div>
            <button className="back-link mb-8" onClick={goSubjects}>← Subjects</button>
            <h2 className="font-serif text-3xl text-ink mb-1">{subjectData.name}</h2>
            <p className="text-muted text-sm mb-8">Select a unit.</p>
            <div className="space-y-0">
              {subjectData.units.map(u => (
                <div key={u.id} className="index-row" onClick={() => goChapters(u.id)}>
                  <span className="text-ink text-sm leading-snug max-w-[85%]">{u.name}</span>
                  <span className="text-muted text-sm shrink-0">→</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── CHAPTERS ──────────────────────────────────────── */}
        {view === 'chapters' && unitData && (
          <div>
            <button className="back-link mb-8" onClick={() => setView('units')}>← {subjectData?.name}</button>
            <h2 className="font-serif text-2xl text-ink mb-1">{unitData.name}</h2>
            <p className="text-muted text-sm mb-8">Choose a chapter.</p>
            <div className="space-y-0">
              {unitData.chapters.map(c => {
                const key = `${subjectId}:${c.id}`
                const chDone = done[key]
                return (
                  <div key={c.id} className="index-row" onClick={() => goRevision(c.id)}>
                    <span className="text-ink text-sm leading-snug max-w-[80%]">{c.title}</span>
                    <span className="text-muted text-xs shrink-0">
                      {chDone !== undefined ? `✓ ${chDone}/${c.quiz.length}` : '→'}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── REVISION NOTES ────────────────────────────────── */}
        {view === 'revision' && chapterData && (
          <div>
            <button className="back-link mb-8" onClick={() => setView('chapters')}>← {unitData?.name}</button>
            <p className="text-muted text-xs font-sans uppercase tracking-widest mb-1">Revision Notes</p>
            <h2 className="font-serif text-2xl text-ink mb-6">{chapterData.title}</h2>

            <div className="note-card min-h-[200px]">
              <p className="text-ink text-base leading-relaxed">{notes[noteIndex]?.concept}</p>
              <div className="fact-bar mt-5">
                <span className="font-medium text-accent">Key fact: </span>
                {notes[noteIndex]?.fact}
              </div>
              {notes[noteIndex]?.tip && (
                <p className="mt-4 text-xs text-muted italic">{notes[noteIndex].tip}</p>
              )}
            </div>

            <div className="flex items-center justify-between mt-6">
              <span className="text-muted text-xs">{noteIndex + 1} / {notes.length}</span>
              <div className="flex gap-3">
                <button
                  className="btn-outline text-sm disabled:opacity-30"
                  disabled={noteIndex === 0}
                  onClick={() => setNoteIndex(i => i - 1)}
                >← Prev</button>
                {noteIndex < notes.length - 1
                  ? <button className="btn-primary text-sm" onClick={() => setNoteIndex(i => i + 1)}>Next →</button>
                  : <button className="btn-primary text-sm" onClick={startQuiz}>Start Quiz →</button>
                }
              </div>
            </div>
          </div>
        )}

        {/* ── QUIZ ──────────────────────────────────────────── */}
        {view === 'quiz' && q && (
          <div>
            <button className="back-link mb-8" onClick={() => setView('revision')}>← Notes</button>
            <p className="text-muted text-xs font-sans uppercase tracking-widest mb-1">Quiz</p>
            <h2 className="font-serif text-2xl text-ink mb-6">{chapterData?.title}</h2>

            <p className="text-muted text-xs mb-4">Question {quizIndex + 1} of {quiz.length}</p>

            <div className="border border-rule rounded p-5 mb-5 bg-white">
              <p className="text-ink font-medium leading-snug">{q.question}</p>
            </div>

            <div className="space-y-2 mb-5">
              {q.options.map((opt, i) => {
                let cls = 'option-btn'
                if (revealed) {
                  if (i === q.correctAnswer) cls += ' option-correct'
                  else if (i === picked)     cls += ' option-wrong'
                } else if (i === picked) cls += ' option-selected'
                return (
                  <button key={i} className={cls} disabled={revealed}
                    onClick={() => setPicked(i)}>
                    <span className="text-muted mr-2">{['A','B','C','D'][i]}.</span> {opt}
                  </button>
                )
              })}
            </div>

            {!revealed ? (
              <button className="btn-primary" disabled={picked === null} onClick={submitAnswer}>
                Submit
              </button>
            ) : (
              <div className="mt-4">
                <p className="text-sm text-muted italic mb-4">{q.explanation}</p>
                <button className="btn-outline" onClick={nextQuestion}>
                  {quizIndex < quiz.length - 1 ? 'Next Question →' : 'Finish Quiz'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── RESULT ────────────────────────────────────────── */}
        {view === 'result' && (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <p className="text-muted text-xs uppercase tracking-widest mb-3">Result</p>
            <h2 className="font-serif text-4xl text-ink mb-2">{resultScore} / {quiz.length}</h2>
            <p className="text-muted mb-10">
              {resultScore === quiz.length
                ? 'Perfect score, Hitashi.'
                : resultScore >= Math.ceil(quiz.length / 2)
                  ? 'Good work. Keep going.'
                  : 'Revise once more and try again.'}
            </p>
            <div className="flex gap-3">
              <button className="btn-outline" onClick={() => goRevision(chapterId)}>Revise Again</button>
              <button className="btn-primary" onClick={() => setView('chapters')}>Back to Chapters</button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
