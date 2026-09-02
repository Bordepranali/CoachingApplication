import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  PlayCircle,
  UserRound,
  Users,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type Subject = {
  id: number
  name: string
  code: string
  description: string
  teacher: string
  students: number
  courses: number
  hours: number
  status: 'Active' | 'Upcoming'
  progress: number
}

const subjects: Subject[] = [
  {
    id: 1,
    name: 'Mathematics',
    code: 'MATH-101',
    description:
      'Build strong foundations in algebra, calculus and problem solving.',
    teacher: 'Dr. Ananya Sharma',
    students: 96,
    courses: 4,
    hours: 72,
    status: 'Active',
    progress: 78,
  },
  {
    id: 2,
    name: 'Physics',
    code: 'PHY-101',
    description:
      'Understand mechanics, electricity, optics and modern physics.',
    teacher: 'Rahul Mehta',
    students: 82,
    courses: 3,
    hours: 64,
    status: 'Active',
    progress: 68,
  },
  {
    id: 3,
    name: 'Chemistry',
    code: 'CHEM-101',
    description:
      'Learn organic, inorganic and physical chemistry with practical examples.',
    teacher: 'Priya Kapoor',
    students: 78,
    courses: 3,
    hours: 68,
    status: 'Active',
    progress: 72,
  },
  {
    id: 4,
    name: 'Biology',
    code: 'BIO-101',
    description:
      'Explore cell biology, genetics, human physiology and ecology.',
    teacher: 'Neha Singh',
    students: 71,
    courses: 3,
    hours: 60,
    status: 'Active',
    progress: 64,
  },
  {
    id: 5,
    name: 'Computer Science',
    code: 'CS-101',
    description:
      'Develop programming, data structures and computational thinking skills.',
    teacher: 'Amit Verma',
    students: 88,
    courses: 4,
    hours: 76,
    status: 'Active',
    progress: 81,
  },
  {
    id: 6,
    name: 'English',
    code: 'ENG-101',
    description:
      'Improve communication, grammar, writing and comprehension skills.',
    teacher: 'Vikram Joshi',
    students: 103,
    courses: 2,
    hours: 48,
    status: 'Upcoming',
    progress: 0,
  },
]

const modules = [
  {
    title: 'Introduction and Fundamentals',
    lessons: 8,
    duration: '6h 20m',
    progress: 100,
  },
  {
    title: 'Core Concepts',
    lessons: 12,
    duration: '9h 40m',
    progress: 82,
  },
  {
    title: 'Advanced Topics',
    lessons: 10,
    duration: '8h 15m',
    progress: 58,
  },
  {
    title: 'Problem Solving and Practice',
    lessons: 9,
    duration: '7h 30m',
    progress: 35,
  },
]

function SubjectDetails() {
  const { id } = useParams()

  const subject = useMemo(
    () => subjects.find((item) => item.id === Number(id)),
    [id],
  )

  if (!subject) {
    return (
      <AppLayout title="Subject Not Found">
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <BookOpen size={30} />
            </div>
            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              Subject Not Found
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              The subject you are looking for does not exist or is no longer
              available.
            </p>
            <Link
              to="/subjects"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <ArrowLeft size={17} />
              Back to Subjects
            </Link>
          </div>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout title={subject.name}>
      <div className="space-y-6">
        <Link
          to="/subjects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
        >
          <ArrowLeft size={17} />
          Back to Subjects
        </Link>

        <section className="overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 via-indigo-700 to-violet-700 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-5">
              <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 sm:flex">
                <GraduationCap size={31} />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                    {subject.code}
                  </span>
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                    {subject.status}
                  </span>
                </div>

                <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                  {subject.name}
                </h1>

                <p className="mt-3 max-w-2xl leading-7 text-indigo-100">
                  {subject.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-indigo-100">
                  <span className="flex items-center gap-2">
                    <UserRound size={17} />
                    {subject.teacher}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={17} />
                    {subject.students} students
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              <PlayCircle size={18} />
              Explore Courses
            </Link>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <BookOpen size={21} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Courses</p>
                <p className="text-xl font-bold text-slate-900">
                  {subject.courses}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <Users size={21} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Students</p>
                <p className="text-xl font-bold text-slate-900">
                  {subject.students}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                <Clock3 size={21} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Total Duration</p>
                <p className="text-xl font-bold text-slate-900">
                  {subject.hours}h
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                <CheckCircle2 size={21} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Completion</p>
                <p className="text-xl font-bold text-slate-900">
                  {subject.progress}%
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="space-y-5 lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Course Progress
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Track your progress through this subject.
                  </p>
                </div>
                <span className="text-2xl font-bold text-indigo-600">
                  {subject.progress}%
                </span>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-600 transition-all"
                  style={{ width: `${subject.progress}%` }}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Learning Modules
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Follow the modules in sequence to complete the subject.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {modules.map((module, index) => (
                  <div
                    key={module.title}
                    className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50/30"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-600">
                        {index + 1}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                          <h3 className="font-semibold text-slate-900">
                            {module.title}
                          </h3>
                          <span className="text-xs font-semibold text-slate-500">
                            {module.progress}%
                          </span>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-indigo-600"
                            style={{ width: `${module.progress}%` }}
                          />
                        </div>

                        <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">
                          <span>{module.lessons} lessons</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>

                      <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                        <PlayCircle size={16} />
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Subject Teacher
              </h2>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700">
                  {subject.teacher
                    .split(' ')
                    .map((name) => name[0])
                    .slice(0, 2)
                    .join('')}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {subject.teacher}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Subject Instructor
                  </p>
                </div>
              </div>

              <Link
                to={`/teachers/${subject.id}`}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-indigo-600 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                View Teacher Profile
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Upcoming Schedule
              </h2>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600">
                      <CalendarDays size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Next Live Class
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Tomorrow • 10:00 AM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Assignment Due
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Friday • 11:59 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/calendar"
                className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View Full Calendar
              </Link>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-sm">
              <p className="text-sm font-semibold text-indigo-300">
                Need study material?
              </p>
              <h2 className="mt-2 text-lg font-bold">
                Access notes and resources
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Find notes, PDFs, videos and other resources for this subject.
              </p>
              <Link
                to="/study-material"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                <BookOpen size={17} />
                Study Material
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </AppLayout>
  )
}

export default SubjectDetails