import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sparkles,
  Sun,
  TimerReset,
} from 'lucide-react'
import content from './data/neetContent.json'

const supportiveMessages = [
  "Take a deep breath, you're doing great 🌿",
  'Stay hydrated 💧',
  'One step at a time',
]

function App() {
  const [view, setView] = useState('landing')
  const [subjectId, setSubjectId] = useState(null)
  const [chapterId, setChapterId] = useState(null)
  const [noteIndex, setNoteIndex] = useState(0)
  const [quizIndex, setQuizIndex] = useState(0)
  const [pickedOption, setPickedOption] = useState(null)
  const [revealedAnswer, setRevealedAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [timerEnabled, setTimerEnabled] = useState(false)
  const [timeLeft, setTimeLeft] = useState(45)
  const [darkMode, setDarkMode] = useState(false)
  const [focusMode, setFocusMode] = useState(false)
  const [supportiveText, setSupportiveText] = useState('')
  const [completedByChapter, setCompletedByChapter] = useState({})

  const MotionArticle = motion.article
  const MotionDiv = motion.div

  const subject = useMemo(
    () => content.subjects.find((item) => item.id === subjectId) ?? null,
    [subjectId],
  )

  const chapter = useMemo(
    () => subject?.chapters.find((item) => item.id === chapterId) ?? null,
    [subject, chapterId],
  )

  const noteCards = useMemo(
    () => chapter?.notes.filter((item) => item.verified) ?? [],
    [chapter],
  )

  const quizQuestions = useMemo(
    () => chapter?.quiz.filter((item) => item.verified) ?? [],
    [chapter],
  )

  const currentQuestion = quizQuestions[quizIndex]
  const isAnswerShown = revealedAnswer || (timerEnabled && timeLeft === 0)

  useEffect(() => {
    if (view === 'landing') {
      return undefined
    }

    const interval = setInterval(() => {
      if (Math.random() < 0.35) {
        setSupportiveText(
          supportiveMessages[
            Math.floor(Math.random() * supportiveMessages.length)
          ],
        )

        setTimeout(() => setSupportiveText(''), 3800)
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [view])

  useEffect(() => {
    if (view !== 'quiz' || !timerEnabled || revealedAnswer || timeLeft <= 0) {
      return undefined
    }

    const tick = setTimeout(() => setTimeLeft((old) => old - 1), 1000)
    return () => clearTimeout(tick)
  }, [view, timerEnabled, timeLeft, revealedAnswer])

  const moveToSubjects = () => {
    setView('subjects')
  }

  const pickSubject = (id) => {
    setSubjectId(id)
    setChapterId(null)
    setView('chapters')
  }

  const pickChapter = (id) => {
    setChapterId(id)
    setNoteIndex(0)
    setQuizIndex(0)
    setScore(0)
    setPickedOption(null)
    setRevealedAnswer(false)
    setTimeLeft(45)
    setView('notes')
  }

  const handleSwipe = (event, info) => {
    if (info.offset.x < -60 && noteIndex < noteCards.length - 1) {
      setNoteIndex((old) => old + 1)
    }
    if (info.offset.x > 60 && noteIndex > 0) {
      setNoteIndex((old) => old - 1)
    }
  }

  const submitAnswer = () => {
    if (pickedOption === null || isAnswerShown) {
      return
    }

    if (pickedOption === currentQuestion.correctAnswer) {
      setScore((old) => old + 1)
    }

    setRevealedAnswer(true)
  }

  const nextQuestion = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((old) => old + 1)
      setPickedOption(null)
      setRevealedAnswer(false)
      setTimeLeft(45)
      return
    }

    const chapterKey = `${subjectId}:${chapterId}`
    setCompletedByChapter((old) => ({
      ...old,
      [chapterKey]: quizQuestions.length,
    }))
    setView('result')
  }

  const restartChapter = () => {
    setQuizIndex(0)
    setPickedOption(null)
    setRevealedAnswer(false)
    setScore(0)
    setNoteIndex(0)
    setTimeLeft(45)
    setView('notes')
  }

  const backToChapters = () => {
    setView('chapters')
    setChapterId(null)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-violet-100 to-sky-100 text-slate-700 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 dark:text-slate-100">
        <div className="mx-auto w-full max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
          {!focusMode && (
            <header className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/50 bg-white/70 p-4 shadow-calm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
              <div>
                <p className="font-heading text-lg text-slate-800 dark:text-slate-100">
                  Hi Hitashi 🌸
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Let&apos;s revise a little today. No pressure, just progress.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDarkMode((old) => !old)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 dark:bg-slate-800/70 dark:text-slate-100"
                >
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                  {darkMode ? 'Light' : 'Dark'}
                </button>
                <button
                  type="button"
                  onClick={() => setFocusMode((old) => !old)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 dark:bg-slate-800/70 dark:text-slate-100"
                >
                  <Sparkles size={16} />
                  Focus Mode
                </button>
              </div>
            </header>
          )}

          <main className="rounded-3xl border border-white/50 bg-white/70 p-5 shadow-calm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/65 sm:p-8">
            {view === 'landing' && (
              <section className="animate-floatIn py-10 text-center">
                <h1 className="font-heading text-4xl text-slate-800 dark:text-white sm:text-5xl">
                  Hi Hitashi 🌸
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-slate-200 sm:text-lg">
                  Let&apos;s revise a little today. No pressure, just progress.
                </p>
                <button
                  type="button"
                  onClick={moveToSubjects}
                  className="mt-8 rounded-2xl bg-gradient-to-r from-rose-300 via-fuchsia-300 to-sky-300 px-6 py-3 font-bold text-slate-800 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Start Revision
                </button>
              </section>
            )}

            {view === 'subjects' && (
              <section className="animate-floatIn">
                <h2 className="font-heading text-2xl text-slate-800 dark:text-white">
                  Pick a subject
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  Choose what you want to revise right now.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {content.subjects.map((item) => (
                    <motion.button
                      whileHover={{ y: -5, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      key={item.id}
                      onClick={() => pickSubject(item.id)}
                      className="rounded-3xl border border-white/70 bg-white/85 p-5 text-left shadow-md transition dark:border-white/10 dark:bg-slate-800/70"
                    >
                      <p className="text-3xl">{item.emoji}</p>
                      <h3 className="mt-2 font-heading text-xl text-slate-800 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-300">
                        Gentle revision with short notes + quiz
                      </p>
                    </motion.button>
                  ))}
                </div>
              </section>
            )}

            {view === 'chapters' && subject && (
              <section className="animate-floatIn">
                <button
                  type="button"
                  onClick={() => setView('subjects')}
                  className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  <ArrowLeft size={15} /> Back
                </button>
                <h2 className="font-heading text-2xl text-slate-800 dark:text-white">
                  {subject.emoji} {subject.name}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  Select a chapter to begin.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {subject.chapters.map((item) => {
                    const chapterKey = `${subject.id}:${item.id}`
                    const completed = completedByChapter[chapterKey] ?? 0

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => pickChapter(item.id)}
                        className="rounded-3xl border border-white/70 bg-white/85 p-5 text-left shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-800/70"
                      >
                        <h3 className="font-heading text-lg text-slate-800 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
                          {completed}/10 questions completed
                        </p>
                        <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-rose-300 to-sky-300"
                            style={{ width: `${Math.min((completed / 10) * 100, 100)}%` }}
                          />
                        </div>
                      </button>
                    )
                  })}
                </div>
              </section>
            )}

            {view === 'notes' && chapter && (
              <section className="animate-floatIn">
                <button
                  type="button"
                  onClick={backToChapters}
                  className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  <ArrowLeft size={15} /> Back
                </button>

                <h2 className="font-heading text-xl text-slate-800 dark:text-white sm:text-2xl">
                  {chapter.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                  Card {noteIndex + 1} of {noteCards.length}
                </p>

                <div className="mt-6">
                  <AnimatePresence mode="wait">
                    <MotionArticle
                      key={noteIndex}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={handleSwipe}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="min-h-56 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-md dark:border-white/10 dark:bg-slate-800/80"
                    >
                      <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-100">
                        {noteCards[noteIndex]?.concept}
                      </p>
                      <p className="mt-4 rounded-2xl bg-amber-100/90 px-4 py-3 text-sm font-semibold text-amber-900 dark:bg-amber-200/20 dark:text-amber-100">
                        Important: {noteCards[noteIndex]?.fact}
                      </p>
                      {noteCards[noteIndex]?.tip && (
                        <p className="mt-4 text-sm text-slate-500 dark:text-slate-300">
                          Quick tip: {noteCards[noteIndex]?.tip}
                        </p>
                      )}
                    </MotionArticle>
                  </AnimatePresence>
                </div>

                <div className="mt-6 flex flex-wrap justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setNoteIndex((old) => Math.max(old - 1, 0))}
                    disabled={noteIndex === 0}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-800 dark:text-slate-100"
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>

                  {noteIndex < noteCards.length - 1 ? (
                    <button
                      type="button"
                      onClick={() =>
                        setNoteIndex((old) => Math.min(old + 1, noteCards.length - 1))
                      }
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-300 to-sky-300 px-4 py-2 text-sm font-bold text-slate-800"
                    >
                      Next <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setQuizIndex(0)
                        setPickedOption(null)
                        setRevealedAnswer(false)
                        setScore(0)
                        setTimeLeft(45)
                        setView('quiz')
                      }}
                      className="rounded-2xl bg-gradient-to-r from-rose-300 to-sky-300 px-5 py-2 text-sm font-bold text-slate-800"
                    >
                      Start Quiz
                    </button>
                  )}
                </div>
              </section>
            )}

            {view === 'quiz' && currentQuestion && (
              <section className="animate-floatIn">
                <button
                  type="button"
                  onClick={() => setView('notes')}
                  className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  <ArrowLeft size={15} /> Back to notes
                </button>

                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-heading text-xl text-slate-800 dark:text-white sm:text-2xl">
                    Quiz: {chapter.title}
                  </h2>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setTimerEnabled((old) => !old)
                        setTimeLeft(45)
                      }}
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    >
                      <TimerReset size={16} />
                      {timerEnabled ? 'Timer On' : 'Timer Off'}
                    </button>

                    {timerEnabled && (
                      <span className="rounded-2xl bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-800 dark:bg-sky-300/20 dark:text-sky-100">
                        {timeLeft}s
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Question {quizIndex + 1} of {quizQuestions.length}
                </p>

                <div className="mt-5 rounded-3xl border border-white/70 bg-white/90 p-6 dark:border-white/10 dark:bg-slate-800/80">
                  <p className="font-semibold text-slate-800 dark:text-white">
                    {currentQuestion.question}
                  </p>

                  <div className="mt-4 grid gap-3">
                    {currentQuestion.options.map((option, idx) => {
                      const isCorrect = idx === currentQuestion.correctAnswer
                      const isPicked = idx === pickedOption

                      let style =
                        'rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm transition dark:border-slate-600'

                      if (isAnswerShown && isCorrect) {
                        style +=
                          ' border-emerald-400 bg-emerald-100 text-emerald-900 dark:bg-emerald-300/20 dark:text-emerald-100'
                      } else if (isAnswerShown && isPicked && !isCorrect) {
                        style +=
                          ' border-rose-400 bg-rose-100 text-rose-900 dark:bg-rose-300/20 dark:text-rose-100'
                      } else if (isPicked) {
                        style +=
                          ' border-sky-400 bg-sky-100 text-sky-900 dark:bg-sky-300/20 dark:text-sky-100'
                      } else {
                        style +=
                          ' bg-white text-slate-700 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-100'
                      }

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => !isAnswerShown && setPickedOption(idx)}
                          className={style}
                        >
                          {option}
                        </button>
                      )
                    })}
                  </div>

                  {!isAnswerShown ? (
                    <button
                      type="button"
                      onClick={submitAnswer}
                      disabled={pickedOption === null}
                      className="mt-5 rounded-2xl bg-gradient-to-r from-rose-300 to-sky-300 px-5 py-2 text-sm font-bold text-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <div className="mt-5 rounded-2xl bg-slate-100 p-4 dark:bg-slate-700/50">
                      <p className="font-semibold text-slate-800 dark:text-white">
                        {pickedOption === currentQuestion.correctAnswer
                          ? 'Correct ✅'
                          : 'Incorrect ❌'}
                      </p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-200">
                        {currentQuestion.explanation}
                      </p>

                      <button
                        type="button"
                        onClick={nextQuestion}
                        className="mt-3 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-100"
                      >
                        {quizIndex === quizQuestions.length - 1
                          ? 'Finish Quiz'
                          : 'Next Question'}
                      </button>
                    </div>
                  )}
                </div>
              </section>
            )}

            {view === 'result' && (
              <section className="animate-floatIn py-6 text-center">
                <h2 className="font-heading text-3xl text-slate-800 dark:text-white">
                  Quiz Complete
                </h2>
                <p className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-200">
                  Score: {score}/{quizQuestions.length}
                </p>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                  {score >= 7
                    ? "You're doing really well, Hitashi 💛"
                    : "Keep going, you're improving every step"}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={restartChapter}
                    className="rounded-2xl bg-gradient-to-r from-rose-300 to-sky-300 px-5 py-2 font-bold text-slate-800"
                  >
                    Revise Again
                  </button>
                  <button
                    type="button"
                    onClick={backToChapters}
                    className="rounded-2xl bg-white px-5 py-2 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  >
                    Pick Another Chapter
                  </button>
                </div>
              </section>
            )}
          </main>

          <AnimatePresence>
            {!focusMode && supportiveText && (
              <MotionDiv
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="fixed bottom-4 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-2xl bg-white/95 px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg dark:bg-slate-900/95 dark:text-slate-100"
              >
                {supportiveText}
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default App
