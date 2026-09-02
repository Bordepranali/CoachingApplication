import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  PlayCircle,
  Search,
  Star,
  Users,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type Course = {
  id: number
  title: string
  subject: string
  instructor: string
  description: string
  progress: number
  lessons: number
  completedLessons: number
  students: number
  duration: string
  level: string
  rating: number
  status: 'In Progress' | 'Completed' | 'Not Started'
}

const initialCourses: Course[] = [
  {
    id: 1,
    title: 'Complete Data Science',
    subject: 'Data Science',
    instructor: 'Dr. Ananya Sharma',
    description:
      'Learn data analysis, statistics, visualization and practical data science workflows.',
    progress: 72,
    lessons: 32,
    completedLessons: 23,
    students: 184,
    duration: '12 Weeks',
    level: 'Intermediate',
    rating: 4.9,
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Machine Learning Masterclass',
    subject: 'Machine Learning',
    instructor: 'Rahul Mehta',
    description:
      'Build strong foundations in machine learning algorithms and predictive modeling.',
    progress: 48,
    lessons: 28,
    completedLessons: 13,
    students: 156,
    duration: '10 Weeks',
    level: 'Advanced',
    rating: 4.8,
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Python Programming',
    subject: 'Python Programming',
    instructor: 'Priya Kapoor',
    description:
      'Master Python programming from fundamentals to object-oriented programming.',
    progress: 100,
    lessons: 24,
    completedLessons: 24,
    students: 210,
    duration: '8 Weeks',
    level: 'Beginner',
    rating: 4.9,
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Data Analytics with Excel',
    subject: 'Data Analytics',
    instructor: 'Amit Verma',
    description:
      'Learn Excel-based data cleaning, analysis, dashboards and reporting.',
    progress: 25,
    lessons: 20,
    completedLessons: 5,
    students: 132,
    duration: '6 Weeks',
    level: 'Beginner',
    rating: 4.7,
    status: 'In Progress',
  },
  {
    id: 5,
    title: 'Artificial Intelligence Fundamentals',
    subject: 'Artificial Intelligence',
    instructor: 'Neha Singh',
    description:
      'Explore AI concepts, intelligent systems, neural networks and real-world applications.',
    progress: 0,
    lessons: 26,
    completedLessons: 0,
    students: 118,
    duration: '9 Weeks',
    level: 'Intermediate',
    rating: 4.8,
    status: 'Not Started',
  },
  {
    id: 6,
    title: 'Modern Web Development',
    subject: 'Web Development',
    instructor: 'Vikram Joshi',
    description:
      'Build modern responsive websites using HTML, CSS, JavaScript and React.',
    progress: 0,
    lessons: 30,
    completedLessons: 0,
    students: 145,
    duration: '10 Weeks',
    level: 'Intermediate',
    rating: 4.8,
    status: 'Not Started',
  },
]

export default function StudentCourses() {
  const [courses] = useState(initialCourses)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [subjectFilter, setSubjectFilter] = useState('All')

  const subjects = useMemo(
    () => ['All', ...Array.from(new Set(courses.map((course) => course.subject)))],
    [courses],
  )

  const filteredCourses = useMemo(() => {
    const query = search.toLowerCase().trim()

    return courses.filter((course) => {
      const matchesSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.subject.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query)

      const matchesStatus =
        statusFilter === 'All' || course.status === statusFilter

      const matchesSubject =
        subjectFilter === 'All' || course.subject === subjectFilter

      return matchesSearch && matchesStatus && matchesSubject
    })
  }, [courses, search, statusFilter, subjectFilter])

  const completed = courses.filter(
    (course) => course.status === 'Completed',
  ).length

  const inProgress = courses.filter(
    (course) => course.status === 'In Progress',
  ).length

  const averageProgress = Math.round(
    courses.reduce((total, course) => total + course.progress, 0) /
      courses.length,
  )

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-8 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-sm font-medium text-indigo-300">
                  My Learning
                </p>
                <h1 className="text-3xl font-bold sm:text-4xl">
                  My Courses
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                  Track your enrolled courses, continue learning and monitor
                  your progress.
                </p>
              </div>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                <BookOpen size={18} />
                Browse Courses
              </Link>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <BookOpen size={21} />
              </div>
              <p className="text-sm text-slate-500">Enrolled Courses</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {courses.length}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <PlayCircle size={21} />
              </div>
              <p className="text-sm text-slate-500">In Progress</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {inProgress}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <CheckCircle2 size={21} />
              </div>
              <p className="text-sm text-slate-500">Completed</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {completed}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Star size={21} />
              </div>
              <p className="text-sm text-slate-500">Average Progress</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {averageProgress}%
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-[1fr_180px_200px]">
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search your courses..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-400"
              >
                <option value="All">All Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Not Started">Not Started</option>
              </select>

              <select
                value={subjectFilter}
                onChange={(event) => setSubjectFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-400"
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject === 'All' ? 'All Subjects' : subject}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <BookOpen
                size={42}
                className="mx-auto text-slate-300"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                No courses found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative bg-linear-to-br from-indigo-600 to-violet-700 p-5 text-white">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                        <BookOpen size={23} />
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          course.status === 'Completed'
                            ? 'bg-emerald-400/20 text-emerald-100'
                            : course.status === 'In Progress'
                              ? 'bg-white/15 text-white'
                              : 'bg-amber-400/20 text-amber-100'
                        }`}
                      >
                        {course.status}
                      </span>
                    </div>

                    <p className="mt-5 text-xs font-medium text-indigo-100">
                      {course.subject}
                    </p>

                    <h2 className="mt-1 min-h-14 text-xl font-bold">
                      {course.title}
                    </h2>
                  </div>

                  <div className="space-y-5 p-5">
                    <p className="min-h-12 text-sm leading-6 text-slate-500">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
                        {course.instructor
                          .split(' ')
                          .map((name) => name[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">
                          Instructor
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                          {course.instructor}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 border-y border-slate-100 py-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Clock3 size={14} />
                          <span className="text-xs">Duration</span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-slate-700">
                          {course.duration}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Users size={14} />
                          <span className="text-xs">Students</span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-slate-700">
                          {course.students}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Star size={14} />
                          <span className="text-xs">Rating</span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-slate-700">
                          {course.rating}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Course Progress
                        </span>
                        <span className="text-sm font-bold text-indigo-600">
                          {course.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-indigo-600 transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>

                      <p className="mt-2 text-xs text-slate-400">
                        {course.completedLessons} of {course.lessons}{' '}
                        lessons completed
                      </p>
                    </div>

                    <Link
                      to={`/courses/${course.id}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
                    >
                      {course.status === 'Completed'
                        ? 'Review Course'
                        : course.status === 'Not Started'
                          ? 'Start Course'
                          : 'Continue Learning'}
                      <PlayCircle size={17} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </AppLayout>
  )
}