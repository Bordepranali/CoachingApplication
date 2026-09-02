import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
  PlayCircle,
  Users,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type Module = [string, string, boolean]

type Course = {
  title: string
  subject: string
  instructor: string
  instructorId: string
  level: string
  students: number
  duration: string
  progress: number
  description: string
  modules: Module[]
}

const courses: Record<string, Course> = {
  '1': {
    title: 'Data Science Fundamentals',
    subject: 'Data Science',
    instructor: 'Dr. Ananya Sharma',
    instructorId: '1',
    level: 'Beginner',
    students: 184,
    duration: '8 Weeks',
    progress: 72,
    description:
      'Build a strong foundation in data science, statistics, data analysis, and practical Python programming.',
    modules: [
      ['Introduction to Data Science', '6 Lessons', true],
      ['Python for Data Science', '8 Lessons', true],
      ['Data Analysis with Pandas', '7 Lessons', true],
      ['Data Visualization', '6 Lessons', false],
      ['Statistics Fundamentals', '8 Lessons', false],
      ['Machine Learning Basics', '9 Lessons', false],
    ],
  },
  '2': {
    title: 'Machine Learning',
    subject: 'Artificial Intelligence',
    instructor: 'Rahul Mehta',
    instructorId: '2',
    level: 'Intermediate',
    students: 156,
    duration: '10 Weeks',
    progress: 58,
    description:
      'Learn supervised and unsupervised learning algorithms and build practical machine learning models.',
    modules: [
      ['Introduction to Machine Learning', '6 Lessons', true],
      ['Linear Regression', '7 Lessons', true],
      ['Classification Algorithms', '8 Lessons', false],
      ['Decision Trees', '6 Lessons', false],
      ['Clustering', '7 Lessons', false],
      ['Model Evaluation', '6 Lessons', false],
    ],
  },
  '3': {
    title: 'Python Programming',
    subject: 'Programming',
    instructor: 'Priya Kapoor',
    instructorId: '3',
    level: 'Beginner',
    students: 224,
    duration: '6 Weeks',
    progress: 84,
    description:
      'Master Python programming from fundamentals to object-oriented programming and practical problem solving.',
    modules: [
      ['Python Basics', '8 Lessons', true],
      ['Control Flow', '6 Lessons', true],
      ['Functions', '7 Lessons', true],
      ['Lists and Dictionaries', '8 Lessons', true],
      ['Object-Oriented Programming', '8 Lessons', false],
      ['Mini Project', '5 Lessons', false],
    ],
  },
  '4': {
    title: 'Database Management Systems',
    subject: 'Computer Science',
    instructor: 'Amit Verma',
    instructorId: '4',
    level: 'Intermediate',
    students: 138,
    duration: '7 Weeks',
    progress: 46,
    description:
      'Understand relational databases, SQL, normalization, transactions, and database design.',
    modules: [
      ['Database Fundamentals', '5 Lessons', true],
      ['ER Model', '7 Lessons', true],
      ['SQL Queries', '9 Lessons', false],
      ['PL/SQL', '7 Lessons', false],
      ['Normalization', '6 Lessons', false],
      ['Transactions', '5 Lessons', false],
    ],
  },
  '5': {
    title: 'Web Development',
    subject: 'Web Development',
    instructor: 'Neha Singh',
    instructorId: '5',
    level: 'Beginner',
    students: 196,
    duration: '8 Weeks',
    progress: 65,
    description:
      'Learn modern web development using HTML, CSS, JavaScript, responsive design, and React.',
    modules: [
      ['HTML Fundamentals', '6 Lessons', true],
      ['CSS and Responsive Design', '8 Lessons', true],
      ['JavaScript Essentials', '9 Lessons', true],
      ['DOM Manipulation', '7 Lessons', false],
      ['React Fundamentals', '10 Lessons', false],
      ['Final Project', '5 Lessons', false],
    ],
  },
  '6': {
    title: 'Artificial Intelligence',
    subject: 'Artificial Intelligence',
    instructor: 'Vikram Joshi',
    instructorId: '6',
    level: 'Advanced',
    students: 92,
    duration: '12 Weeks',
    progress: 34,
    description:
      'Explore artificial intelligence concepts, neural networks, deep learning, NLP, and computer vision.',
    modules: [
      ['AI Fundamentals', '6 Lessons', true],
      ['Neural Networks', '8 Lessons', false],
      ['Deep Learning', '9 Lessons', false],
      ['Natural Language Processing', '8 Lessons', false],
      ['Computer Vision', '8 Lessons', false],
      ['AI Project', '6 Lessons', false],
    ],
  },
}

export default function CourseDetails() {
  const { id } = useParams()
  const course = id ? courses[id] : undefined

  if (!course) {
    return (
      <AppLayout>
        <div className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <BookOpen className="h-8 w-8 text-slate-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Course not found
            </h1>
            <p className="mt-2 text-slate-500">
              The course you are looking for does not exist.
            </p>
            <Link
              to="/courses"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>
          </div>
        </div>
      </AppLayout>
    )
  }

  const completedModules = course.modules.filter(
    (module) => module[2],
  ).length

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="bg-slate-950 px-6 py-10 text-white">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/courses"
              className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    {course.subject}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    {course.level}
                  </span>
                </div>

                <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                  {course.title}
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  {course.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-300">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {course.students} students
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    {course.modules.length} modules
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm text-slate-300">Your Progress</p>
                <div className="mt-3 flex items-end justify-between">
                  <span className="text-4xl font-bold">
                    {course.progress}%
                  </span>
                  <span className="text-sm text-slate-300">
                    {completedModules}/{course.modules.length} completed
                  </span>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>

                <Link
                  to="/study-material"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
                >
                  <PlayCircle className="h-4 w-4" />
                  Continue Learning
                </Link>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <section>
              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-900">
                  Course Modules
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Follow the modules in order to complete the course.
                </p>
              </div>

              <div className="space-y-3">
                {course.modules.map(([name, lessons, completed], index) => (
                  <div
                    key={name}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                        completed
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {completed ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        index + 1
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-slate-900">
                        {name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {lessons}
                      </p>
                    </div>

                    {completed ? (
                      <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 sm:block">
                        Completed
                      </span>
                    ) : (
                      <Link
                        to="/study-material"
                        className="hidden rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white sm:block"
                      >
                        Open
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <aside className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Instructor
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
                    {course.instructor
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .slice(0, 2)}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      {course.instructor}
                    </p>
                    <Link
                      to={`/teachers/${course.instructorId}`}
                      className="mt-1 inline-block text-xs font-semibold text-indigo-600"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Quick Links
                </p>

                <div className="mt-4 space-y-2">
                  <Link
                    to="/study-material"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    Study Material
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>

                  <Link
                    to="/assignments"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    Assignments
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>

                  <Link
                    to="/quizzes"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    Quizzes
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </AppLayout>
  )
}
