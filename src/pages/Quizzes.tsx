import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileQuestion,
  Search,
  Sparkles,
  Trophy,
  XCircle,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type QuizStatus = 'Available' | 'Completed' | 'Upcoming'

type Quiz = {
  id: string
  title: string
  subject: string
  description: string
  questions: number
  duration: string
  attempts: number
  score?: number
  date: string
  status: QuizStatus
  level: string
}

const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'Data Science Fundamentals',
    subject: 'Data Science',
    description:
      'Test your understanding of data science concepts, workflows and applications.',
    questions: 25,
    duration: '30 min',
    attempts: 2,
    score: 88,
    date: 'Completed on Aug 28',
    status: 'Completed',
    level: 'Intermediate',
  },
  {
    id: '2',
    title: 'Python for Data Analysis',
    subject: 'Python',
    description:
      'Practice Python concepts including NumPy, Pandas and data manipulation.',
    questions: 30,
    duration: '40 min',
    attempts: 1,
    date: 'Available now',
    status: 'Available',
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'Machine Learning Basics',
    subject: 'Machine Learning',
    description:
      'Evaluate your knowledge of supervised learning, regression and classification.',
    questions: 25,
    duration: '35 min',
    attempts: 3,
    score: 92,
    date: 'Completed on Aug 24',
    status: 'Completed',
    level: 'Intermediate',
  },
  {
    id: '4',
    title: 'SQL & Database Concepts',
    subject: 'DBMS',
    description:
      'Questions covering SQL queries, normalization, keys and database concepts.',
    questions: 30,
    duration: '40 min',
    attempts: 2,
    date: 'Available now',
    status: 'Available',
    level: 'Intermediate',
  },
  {
    id: '5',
    title: 'Statistics for Data Science',
    subject: 'Statistics',
    description:
      'Check your understanding of probability, distributions and statistical analysis.',
    questions: 20,
    duration: '25 min',
    attempts: 0,
    date: 'Starts Sep 5',
    status: 'Upcoming',
    level: 'Advanced',
  },
  {
    id: '6',
    title: 'Artificial Intelligence',
    subject: 'AI',
    description:
      'Explore fundamental artificial intelligence concepts and real-world applications.',
    questions: 25,
    duration: '30 min',
    attempts: 1,
    score: 84,
    date: 'Completed on Aug 18',
    status: 'Completed',
    level: 'Advanced',
  },
  {
    id: '7',
    title: 'Cloud Computing',
    subject: 'Cloud',
    description:
      'Test your knowledge of cloud models, virtualization and major cloud services.',
    questions: 25,
    duration: '30 min',
    attempts: 0,
    date: 'Starts Sep 8',
    status: 'Upcoming',
    level: 'Intermediate',
  },
  {
    id: '8',
    title: 'Data Visualization',
    subject: 'Data Science',
    description:
      'Assess your knowledge of charts, dashboards and effective data visualization.',
    questions: 20,
    duration: '25 min',
    attempts: 0,
    date: 'Available now',
    status: 'Available',
    level: 'Beginner',
  },
]

export default function Quizzes() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('All')
  const [subject, setSubject] = useState('All')

  const subjects = ['All', ...new Set(quizzes.map((quiz) => quiz.subject))]

  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((quiz) => {
      const matchesSearch =
        quiz.title.toLowerCase().includes(search.toLowerCase()) ||
        quiz.subject.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        status === 'All' || quiz.status === status

      const matchesSubject =
        subject === 'All' || quiz.subject === subject

      return matchesSearch && matchesStatus && matchesSubject
    })
  }, [search, status, subject])

  const completed = quizzes.filter(
    (quiz) => quiz.status === 'Completed',
  ).length

  const available = quizzes.filter(
    (quiz) => quiz.status === 'Available',
  ).length

  const scores = quizzes
    .filter((quiz) => quiz.score !== undefined)
    .map((quiz) => quiz.score as number)

  const averageScore = Math.round(
    scores.reduce((sum, score) => sum + score, 0) / scores.length,
  )

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="relative overflow-hidden bg-linear-to-br from-indigo-700 via-indigo-600 to-violet-600">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-violet-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Test your knowledge
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Quizzes & Assessments
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
                Challenge yourself with quizzes designed to strengthen your
                concepts and track your learning progress.
              </p>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total Quizzes</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {quizzes.length}
                  </p>
                </div>
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <FileQuestion className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Available</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-600">
                    {available}
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Completed</p>
                  <p className="mt-1 text-2xl font-bold text-indigo-600">
                    {completed}
                  </p>
                </div>
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <Trophy className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Average Score</p>
                  <p className="mt-1 text-2xl font-bold text-violet-600">
                    {averageScore}%
                  </p>
                </div>
                <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search quizzes..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
              >
                <option>All</option>
                <option>Available</option>
                <option>Completed</option>
                <option>Upcoming</option>
              </select>

              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
              >
                {subjects.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                All Quizzes
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {filteredQuizzes.length} quizzes found
              </p>
            </div>
          </div>

          {filteredQuizzes.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <XCircle className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="mt-4 font-semibold text-slate-900">
                No quizzes found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="bg-linear-to-br from-indigo-50 to-violet-50 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-xl bg-white p-3 text-indigo-600 shadow-sm">
                        <FileQuestion className="h-6 w-6" />
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          quiz.status === 'Available'
                            ? 'bg-emerald-100 text-emerald-700'
                            : quiz.status === 'Completed'
                              ? 'bg-indigo-100 text-indigo-700'
                              : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {quiz.status}
                      </span>
                    </div>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                      {quiz.subject}
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      {quiz.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                      {quiz.description}
                    </p>
                  </div>

                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="flex items-center gap-2 text-slate-500">
                          <FileQuestion className="h-4 w-4" />
                          <span className="text-xs">Questions</span>
                        </div>
                        <p className="mt-1 font-semibold text-slate-900">
                          {quiz.questions}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Clock3 className="h-4 w-4" />
                          <span className="text-xs">Duration</span>
                        </div>
                        <p className="mt-1 font-semibold text-slate-900">
                          {quiz.duration}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-slate-500">{quiz.date}</span>

                      {quiz.score !== undefined && (
                        <span className="font-bold text-indigo-600">
                          {quiz.score}%
                        </span>
                      )}
                    </div>

                    <div className="mt-5">
                      <Link
                        to={`/quizzes/${quiz.id}`}
                        className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                      >
                        {quiz.status === 'Completed'
                          ? 'View Result'
                          : quiz.status === 'Upcoming'
                            ? 'View Details'
                            : 'Start Quiz'}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-indigo-100 bg-linear-to-r from-indigo-50 to-violet-50 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white p-3 text-indigo-600 shadow-sm">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Keep improving your score
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Review your study material before attempting the next quiz.
                  </p>
                </div>
              </div>

              <Link
                to="/study-material"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-600 hover:text-white"
              >
                Study Material
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  )
}