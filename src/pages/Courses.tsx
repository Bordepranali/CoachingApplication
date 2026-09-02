import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Plus,
  Search,
  Users,
  X,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type Course = {
  id: number
  title: string
  subject: string
  instructor: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  students: number
  duration: string
  progress: number
  status: 'Active' | 'Draft'
  description: string
}

const subjects = [
  'Data Science',
  'Machine Learning',
  'Python',
  'Data Analytics',
  'Artificial Intelligence',
  'Web Development',
]

const initialCourses: Course[] = [
  {
    id: 1,
    title: 'Complete Data Science',
    subject: 'Data Science',
    instructor: 'Dr. Ananya Sharma',
    level: 'Intermediate',
    students: 86,
    duration: '12 Weeks',
    progress: 78,
    status: 'Active',
    description:
      'Learn statistics, Python, data analysis, visualization and machine learning fundamentals.',
  },
  {
    id: 2,
    title: 'Machine Learning Masterclass',
    subject: 'Machine Learning',
    instructor: 'Rahul Mehta',
    level: 'Advanced',
    students: 64,
    duration: '14 Weeks',
    progress: 64,
    status: 'Active',
    description:
      'Build strong machine learning foundations with supervised and unsupervised learning.',
  },
  {
    id: 3,
    title: 'Python Programming',
    subject: 'Python',
    instructor: 'Priya Kapoor',
    level: 'Beginner',
    students: 112,
    duration: '8 Weeks',
    progress: 91,
    status: 'Active',
    description:
      'Master Python programming from basics to object-oriented programming and projects.',
  },
  {
    id: 4,
    title: 'Data Analytics with Excel',
    subject: 'Data Analytics',
    instructor: 'Amit Verma',
    level: 'Beginner',
    students: 74,
    duration: '6 Weeks',
    progress: 72,
    status: 'Active',
    description:
      'Learn data cleaning, analysis, dashboards and business reporting using Excel.',
  },
  {
    id: 5,
    title: 'Artificial Intelligence Fundamentals',
    subject: 'Artificial Intelligence',
    instructor: 'Neha Singh',
    level: 'Intermediate',
    students: 58,
    duration: '10 Weeks',
    progress: 55,
    status: 'Active',
    description:
      'Explore artificial intelligence concepts, algorithms and real-world applications.',
  },
  {
    id: 6,
    title: 'Modern Web Development',
    subject: 'Web Development',
    instructor: 'Vikram Joshi',
    level: 'Intermediate',
    students: 92,
    duration: '10 Weeks',
    progress: 83,
    status: 'Active',
    description:
      'Build modern responsive websites and applications using current web technologies.',
  },
]

function Courses() {
  const [courses, setCourses] = useState(initialCourses)
  const [search, setSearch] = useState('')
  const [subjectFilter, setSubjectFilter] = useState('All Subjects')
  const [levelFilter, setLevelFilter] = useState('All Levels')
  const [showModal, setShowModal] = useState(false)

  const [form, setForm] = useState({
    title: '',
    subject: subjects[0],
    instructor: 'Dr. Ananya Sharma',
    level: 'Beginner' as Course['level'],
    duration: '8 Weeks',
    description: '',
    status: 'Active' as Course['status'],
  })

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase())

      const matchesSubject =
        subjectFilter === 'All Subjects' ||
        course.subject === subjectFilter

      const matchesLevel =
        levelFilter === 'All Levels' || course.level === levelFilter

      return matchesSearch && matchesSubject && matchesLevel
    })
  }, [courses, search, subjectFilter, levelFilter])

  const activeCourses = courses.filter(
    (course) => course.status === 'Active',
  ).length

  const totalStudents = courses.reduce(
    (total, course) => total + course.students,
    0,
  )

  function handleAddCourse(event: React.FormEvent) {
    event.preventDefault()

    if (!form.title.trim() || !form.description.trim()) {
      return
    }

    const newCourse: Course = {
      id: Date.now(),
      title: form.title.trim(),
      subject: form.subject,
      instructor: form.instructor,
      level: form.level,
      students: 0,
      duration: form.duration,
      progress: 0,
      status: form.status,
      description: form.description.trim(),
    }

    setCourses((current) => [newCourse, ...current])

    setForm({
      title: '',
      subject: subjects[0],
      instructor: 'Dr. Ananya Sharma',
      level: 'Beginner',
      duration: '8 Weeks',
      description: '',
      status: 'Active',
    })

    setShowModal(false)
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="bg-linear-to-br from-indigo-600 via-indigo-700 to-violet-700 text-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="mb-2 text-sm font-medium text-indigo-200">
                  CoachLearn Academy
                </p>
                <h1 className="text-3xl font-bold sm:text-4xl">
                  Courses
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-indigo-100 sm:text-base">
                  Explore and manage courses, instructors, learning progress
                  and enrolled students.
                </p>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
              >
                <Plus size={18} />
                Add Course
              </button>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <BookOpen size={22} />
              </div>
              <p className="text-sm text-slate-500">Total Courses</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {courses.length}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={22} />
              </div>
              <p className="text-sm text-slate-500">Active Courses</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {activeCourses}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Users size={22} />
              </div>
              <p className="text-sm text-slate-500">Enrolled Students</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {totalStudents}
              </p>
            </div>
          </div>

          <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_200px_180px]">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search courses or instructors..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white"
                />
              </div>

              <select
                value={subjectFilter}
                onChange={(event) => setSubjectFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
              >
                <option>All Subjects</option>
                {subjects.map((subject) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>

              <select
                value={levelFilter}
                onChange={(event) => setLevelFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
              >
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-2 bg-linear-to-r from-indigo-500 to-violet-500" />

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        {course.subject}
                      </span>

                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {course.status}
                      </span>
                    </div>

                    <h2 className="mt-4 text-lg font-bold text-slate-900">
                      {course.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                      {course.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                        {course.instructor
                          .split(' ')
                          .map((part) => part[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                      <span>{course.instructor}</span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Users size={14} />
                          Students
                        </div>
                        <p className="mt-1 font-bold text-slate-900">
                          {course.students}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock3 size={14} />
                          Duration
                        </div>
                        <p className="mt-1 font-bold text-slate-900">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-slate-500">Course Progress</span>
                        <span className="font-semibold text-slate-700">
                          {course.progress}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-indigo-600 transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <Link
                      to={`/courses/${course.id}`}
                      className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
                    >
                      View Course
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center shadow-sm">
              <BookOpen
                size={42}
                className="mx-auto text-slate-300"
              />
              <h3 className="mt-4 font-semibold text-slate-900">
                No courses found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </main>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
            <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Add New Course
                  </h2>
                  <p className="text-sm text-slate-500">
                    Create a course for your students.
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleAddCourse} className="space-y-4 p-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Course Title
                  </label>
                  <input
                    required
                    value={form.title}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        title: event.target.value,
                      })
                    }
                    placeholder="Enter course title"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Description
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={form.description}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        description: event.target.value,
                      })
                    }
                    placeholder="Describe the course..."
                    className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          subject: event.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                    >
                      {subjects.map((subject) => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Level
                    </label>
                    <select
                      value={form.level}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          level: event.target.value as Course['level'],
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                    >
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Instructor
                    </label>
                    <select
                      value={form.instructor}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          instructor: event.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                    >
                      <option>Dr. Ananya Sharma</option>
                      <option>Rahul Mehta</option>
                      <option>Priya Kapoor</option>
                      <option>Amit Verma</option>
                      <option>Neha Singh</option>
                      <option>Vikram Joshi</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Duration
                    </label>
                    <select
                      value={form.duration}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          duration: event.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                    >
                      <option>4 Weeks</option>
                      <option>6 Weeks</option>
                      <option>8 Weeks</option>
                      <option>10 Weeks</option>
                      <option>12 Weeks</option>
                      <option>14 Weeks</option>
                      <option>16 Weeks</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        status: event.target.value as Course['status'],
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                  >
                    <option>Active</option>
                    <option>Draft</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Add Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export default Courses