import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileQuestion,
  PlayCircle,
  ShieldCheck,
  Trophy,
  Users,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

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
  status: 'Available' | 'Completed' | 'Upcoming'
  level: string
  instructions: string[]
}

const quizzes: Record<string, Quiz> = {
  '1': {
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
    instructions: [
      'Read each question carefully before selecting an answer.',
      'You will have 30 minutes to complete the assessment.',
      'Each question has one correct answer.',
      'Review your answers before submitting the quiz.',
    ],
  },
  '2': {
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
    instructions: [
      'Make sure you have enough time before starting.',
      'Answer all questions to complete the quiz.',
      'You can review your selections before submitting.',
      'Your result will be available immediately after submission.',
    ],
  },
  '3': {
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
    instructions: [
      'Answer all questions based on the concepts covered in class.',
      'The quiz contains multiple-choice questions.',
      'Manage your time carefully.',
      'Your highest completed score will be displayed.',
    ],
  },
  '4': {
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
    instructions: [
      'Review SQL and database concepts before starting.',
      'Select the most appropriate answer for every question.',
      'Do not refresh the page during the quiz.',
      'Submit the quiz before the timer ends.',
    ],
  },
  '5': {
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
    instructions: [
      'The quiz will become available on the scheduled date.',
      'Review probability and statistics study material beforehand.',
      'The assessment contains multiple-choice questions.',
      'You will receive your score after submission.',
    ],
  },
  '6': {
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
    instructions: [
      'Answer every question carefully.',
      'The quiz covers fundamental AI concepts.',
      'Use the available time efficiently.',
      'Review your answers before submission.',
    ],
  },
  '7': {
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
    instructions: [
      'The quiz will open on the scheduled date.',
      'Review cloud service and deployment models.',
      'Read every question carefully.',
      'Your result will be generated after submission.',
    ],
  },
  '8': {
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
    instructions: [
      'Review data visualization concepts before starting.',
      'Choose the best answer for every question.',
      'You can review answers before final submission.',
      'The result will be shown after completion.',
    ],
  },
}

export default function QuizDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [started, setStarted] = useState(false)

  const quiz = id ? quizzes[id] : undefined

  if (!quiz) {
    return (
      <AppLayout>
        <div className="min-h-screen bg-slate-50 px-4 py-16">
          <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <FileQuestion className="mx-auto h-12 w-12 text-slate-300" />
            <h1 className="mt-4 text-xl font-bold text-slate-900">
              Quiz not found
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              The quiz you are looking for does not exist.
            </p>
            <Link
              to="/quizzes"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Quizzes
            </Link>
          </div>
        </div>
      </AppLayout>
    )
  }

  const handleAction = () => {
    if (quiz.status === 'Completed') {
      navigate(`/quizzes/${quiz.id}/result`)
      return
    }

    if (quiz.status === 'Available') {
      setStarted(true)
    }
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="relative overflow-hidden bg-linear-to-br from-indigo-700 via-indigo-600 to-violet-600">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-violet-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Link
              to="/quizzes"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-100 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Quizzes
            </Link>

            <div className="mt-8 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {quiz.subject}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {quiz.level}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {quiz.status}
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                {quiz.title}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
                {quiz.description}
              </p>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {started ? (
            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-indigo-600">
                      Quiz started
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-slate-900">
                      {quiz.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                    <Clock3 className="h-4 w-4" />
                    {quiz.duration}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">
                    Question 1 of {quiz.questions}
                  </p>

                  <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900">
                    Which step is most important when beginning a data science
                    project?
                  </h3>

                  <div className="mt-6 space-y-3">
                    {[
                      'Understanding the problem and requirements',
                      'Choosing the most complex model',
                      'Deploying the model immediately',
                      'Removing all features from the dataset',
                    ].map((option, index) => (
                      <button
                        key={option}
                        type="button"
                        className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left text-sm font-medium text-slate-700 transition hover:border-indigo-400 hover:bg-indigo-50"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/quizzes/${quiz.id}/result`)
                      }
                      className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                    >
                      Submit Quiz
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">
                  Quiz Progress
                </p>

                <div className="mt-4 flex items-end justify-between">
                  <span className="text-3xl font-bold text-slate-900">
                    1
                  </span>
                  <span className="text-sm text-slate-500">
                    / {quiz.questions}
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[4%] rounded-full bg-indigo-600" />
                </div>

                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Questions</span>
                    <span className="font-semibold text-slate-900">
                      {quiz.questions}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Duration</span>
                    <span className="font-semibold text-slate-900">
                      {quiz.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Attempts</span>
                    <span className="font-semibold text-slate-900">
                      {quiz.attempts}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="rounded-xl bg-indigo-50 p-3 w-fit text-indigo-600">
                    <FileQuestion className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm text-slate-500">Questions</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {quiz.questions}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="rounded-xl bg-amber-50 p-3 w-fit text-amber-600">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm text-slate-500">Duration</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {quiz.duration}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="rounded-xl bg-emerald-50 p-3 w-fit text-emerald-600">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm text-slate-500">Your Score</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {quiz.score !== undefined ? `${quiz.score}%` : '—'}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="rounded-xl bg-violet-50 p-3 w-fit text-violet-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm text-slate-500">Attempts</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {quiz.attempts}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Quiz Instructions
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Please read these instructions before starting.
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    {quiz.instructions.map((instruction, index) => (
                      <div
                        key={instruction}
                        className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                          {index + 1}
                        </span>
                        <p className="pt-1 text-sm leading-6 text-slate-600">
                          {instruction}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-6 text-emerald-800">
                      Your progress is saved securely during the assessment.
                    </p>
                  </div>
                </div>

                <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 p-6 text-white">
                    <PlayCircle className="h-9 w-9" />

                    <h3 className="mt-5 text-xl font-bold">
                      {quiz.status === 'Completed'
                        ? 'Quiz completed'
                        : quiz.status === 'Upcoming'
                          ? 'Quiz coming soon'
                          : 'Ready to begin?'}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-indigo-100">
                      {quiz.status === 'Completed'
                        ? 'Review your result and see how you performed.'
                        : quiz.status === 'Upcoming'
                          ? quiz.date
                          : 'Start the assessment when you are ready.'}
                    </p>

                    <button
                      type="button"
                      onClick={handleAction}
                      disabled={quiz.status === 'Upcoming'}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {quiz.status === 'Completed'
                        ? 'View Result'
                        : quiz.status === 'Upcoming'
                          ? 'Not Available Yet'
                          : 'Start Quiz'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-5 space-y-3 text-sm">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-500">Level</span>
                      <span className="font-semibold text-slate-900">
                        {quiz.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-500">Questions</span>
                      <span className="font-semibold text-slate-900">
                        {quiz.questions}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-semibold text-slate-900">
                        {quiz.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {quiz.status === 'Completed' && quiz.score !== undefined && (
                <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-white p-3 text-indigo-600 shadow-sm">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">
                          Your latest score
                        </p>
                        <p className="text-2xl font-bold text-slate-900">
                          {quiz.score}%
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/quizzes/${quiz.id}/result`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                    >
                      View Detailed Result
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </AppLayout>
  )
}