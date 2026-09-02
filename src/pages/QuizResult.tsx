import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleX,
  FileQuestion,
  RotateCcw,
  Trophy,
  Target,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type Result = {
  id: string
  title: string
  subject: string
  score: number
  correct: number
  wrong: number
  unanswered: number
  total: number
  timeTaken: string
  completedOn: string
  rank: string
}

const results: Record<string, Result> = {
  '1': {
    id: '1',
    title: 'Data Science Fundamentals',
    subject: 'Data Science',
    score: 88,
    correct: 22,
    wrong: 3,
    unanswered: 0,
    total: 25,
    timeTaken: '24 min',
    completedOn: 'Aug 28, 2026',
    rank: 'Excellent',
  },
  '3': {
    id: '3',
    title: 'Machine Learning Basics',
    subject: 'Machine Learning',
    score: 92,
    correct: 23,
    wrong: 2,
    unanswered: 0,
    total: 25,
    timeTaken: '29 min',
    completedOn: 'Aug 24, 2026',
    rank: 'Excellent',
  },
  '6': {
    id: '6',
    title: 'Artificial Intelligence',
    subject: 'AI',
    score: 84,
    correct: 21,
    wrong: 4,
    unanswered: 0,
    total: 25,
    timeTaken: '26 min',
    completedOn: 'Aug 18, 2026',
    rank: 'Very Good',
  },
}

export default function QuizResult() {
  const { id } = useParams()
  const result = id ? results[id] : undefined

  if (!result) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-slate-50 px-4 py-16">
          <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <FileQuestion className="mx-auto h-12 w-12 text-slate-300" />
            <h1 className="mt-4 text-xl font-bold text-slate-900">
              Result not found
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              The quiz result you are looking for is unavailable.
            </p>
            <Link
              to="/quizzes"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Quizzes
            </Link>
          </div>
        </div>
      </AppLayout>
    )
  }

  const accuracy = Math.round(
    (result.correct / result.total) * 100,
  )

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="relative overflow-hidden bg-linear-to-br from-indigo-700 via-indigo-600 to-violet-600">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-violet-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Link
              to={`/quizzes/${result.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-100 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Quiz
            </Link>

            <div className="mt-8">
              <p className="text-sm font-semibold text-indigo-100">
                {result.subject}
              </p>

              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                Quiz Result
              </h1>

              <p className="mt-2 text-sm text-indigo-100 sm:text-base">
                {result.title}
              </p>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-12px border-indigo-100">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-indigo-50">
                    <div>
                      <p className="text-3xl font-bold text-indigo-700">
                        {result.score}%
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        Score
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                  <Trophy className="h-4 w-4" />
                  {result.rank}
                </div>

                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  Great work, Pranali!
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  You completed the {result.title} quiz successfully.
                  Keep practicing to improve your performance even further.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-emerald-50 p-5 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-emerald-600" />
                  <p className="mt-3 text-2xl font-bold text-emerald-700">
                    {result.correct}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">Correct</p>
                </div>

                <div className="rounded-2xl bg-rose-50 p-5 text-center">
                  <CircleX className="mx-auto h-6 w-6 text-rose-600" />
                  <p className="mt-3 text-2xl font-bold text-rose-700">
                    {result.wrong}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">Wrong</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-5 text-center">
                  <FileQuestion className="mx-auto h-6 w-6 text-slate-600" />
                  <p className="mt-3 text-2xl font-bold text-slate-700">
                    {result.unanswered}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Unanswered
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Accuracy
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Correct answers out of total questions
                    </p>
                  </div>

                  <span className="text-lg font-bold text-indigo-600">
                    {accuracy}%
                  </span>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all"
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Performance
                    </h3>
                    <p className="text-xs text-slate-500">
                      Your quiz summary
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="text-sm text-slate-500">
                      Total Questions
                    </span>
                    <span className="font-semibold text-slate-900">
                      {result.total}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="text-sm text-slate-500">
                      Score
                    </span>
                    <span className="font-semibold text-indigo-600">
                      {result.score}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="text-sm text-slate-500">
                      Time Taken
                    </span>
                    <span className="font-semibold text-slate-900">
                      {result.timeTaken}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      Completed On
                    </span>
                    <span className="font-semibold text-slate-900">
                      {result.completedOn}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-50 to-violet-50 p-6">
                <div className="rounded-xl bg-white p-3 w-fit text-indigo-600 shadow-sm">
                  <Target className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Keep improving
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Review your study material and attempt more quizzes to
                  strengthen your concepts.
                </p>

                <Link
                  to="/study-material"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Study Material
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-bold text-slate-900">
                  What would you like to do next?
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Continue your learning journey from here.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/quizzes"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  All Quizzes
                </Link>

                <Link
                  to="/quizzes"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <RotateCcw className="h-4 w-4" />
                  Take Another Quiz
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  )
}