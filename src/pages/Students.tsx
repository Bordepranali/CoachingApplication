import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Mail,
  Plus,
  Search,
  Users,
  X,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type Student = {
  id: number
  name: string
  email: string
  phone: string
  course: string
  status: 'Active' | 'Inactive'
  progress: number
}

const initialStudents: Student[] = [
  {
    id: 1,
    name: 'Pranali Borde',
    email: 'pranali.borde@gmail.com',
    phone: '9876543210',
    course: 'Data Science',
    status: 'Active',
    progress: 78,
  },
  {
    id: 2,
    name: 'Monika Gaikwad',
    email: 'monika.gaikwad@gmail.com',
    phone: '9876543211',
    course: 'Machine Learning',
    status: 'Active',
    progress: 84,
  },
  {
    id: 3,
    name: 'Sneha Patil',
    email: 'sneha.patil@gmail.com',
    phone: '9876543212',
    course: 'Python Programming',
    status: 'Active',
    progress: 65,
  },
  {
    id: 4,
    name: 'Riya Sharma',
    email: 'riya.sharma@gmail.com',
    phone: '9876543213',
    course: 'Data Analytics',
    status: 'Active',
    progress: 91,
  },
  {
    id: 5,
    name: 'Aarav Joshi',
    email: 'aarav.joshi@gmail.com',
    phone: '9876543214',
    course: 'Web Development',
    status: 'Inactive',
    progress: 42,
  },
  {
    id: 6,
    name: 'Kunal More',
    email: 'kunal.more@gmail.com',
    phone: '9876543215',
    course: 'Artificial Intelligence',
    status: 'Active',
    progress: 73,
  },
  {
    id: 7,
    name: 'Ananya Kulkarni',
    email: 'ananya.kulkarni@gmail.com',
    phone: '9876543216',
    course: 'Data Science',
    status: 'Active',
    progress: 88,
  },
  {
    id: 8,
    name: 'Rahul Deshmukh',
    email: 'rahul.deshmukh@gmail.com',
    phone: '9876543217',
    course: 'Machine Learning',
    status: 'Inactive',
    progress: 37,
  },
]

const courses = [
  'Data Science',
  'Machine Learning',
  'Python Programming',
  'Data Analytics',
  'Web Development',
  'Artificial Intelligence',
]

function Students() {
  const [students, setStudents] = useState(initialStudents)
  const [search, setSearch] = useState('')
  const [courseFilter, setCourseFilter] = useState('All Courses')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [showModal, setShowModal] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: courses[0],
    status: 'Active' as Student['status'],
  })

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase())

      const matchesCourse =
        courseFilter === 'All Courses' ||
        student.course === courseFilter

      const matchesStatus =
        statusFilter === 'All Status' ||
        student.status === statusFilter

      return matchesSearch && matchesCourse && matchesStatus
    })
  }, [students, search, courseFilter, statusFilter])

  const activeStudents = students.filter(
    (student) => student.status === 'Active',
  ).length

  const averageProgress =
    students.length > 0
      ? Math.round(
          students.reduce((total, student) => total + student.progress, 0) /
            students.length,
        )
      : 0

  function handleAddStudent(event: React.FormEvent) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      return
    }

    const newStudent: Student = {
      id: Date.now(),
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      course: form.course,
      status: form.status,
      progress: 0,
    }

    setStudents((current) => [newStudent, ...current])
    setForm({
      name: '',
      email: '',
      phone: '',
      course: courses[0],
      status: 'Active',
    })
    setShowModal(false)
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Link
                to="/teacher-dashboard"
                className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50"
              >
                <ArrowLeft size={19} />
              </Link>
              <div>
                <p className="text-sm font-medium text-indigo-600">
                  Management
                </p>
                <h1 className="text-2xl font-bold text-slate-900">
                  Students
                </h1>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Add Student</span>
            </button>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Users size={22} />
              </div>
              <p className="text-sm text-slate-500">Total Students</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {students.length}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={22} />
              </div>
              <p className="text-sm text-slate-500">Active Students</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {activeStudents}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <BookOpen size={22} />
              </div>
              <p className="text-sm text-slate-500">Average Progress</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {averageProgress}%
              </p>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_200px_180px]">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search students..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white"
                />
              </div>

              <select
                value={courseFilter}
                onChange={(event) => setCourseFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
              >
                <option>All Courses</option>
                {courses.map((course) => (
                  <option key={course}>{course}</option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-800px">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Student
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Progress
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                            {student.name
                              .split(' ')
                              .map((part) => part[0])
                              .join('')
                              .slice(0, 2)}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {student.name}
                            </p>
                            <p className="text-sm text-slate-500">
                              {student.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-700">
                        {student.course}
                      </td>

                      <td className="px-6 py-4">
                        <div className="w-32">
                          <div className="mb-1 flex justify-between text-xs">
                            <span className="text-slate-500">Progress</span>
                            <span className="font-semibold text-slate-700">
                              {student.progress}%
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-indigo-600"
                              style={{ width: `${student.progress}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            student.status === 'Active'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <Link
                          to={`/student/${student.id}`}
                          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3 md:hidden">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                      {student.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')
                        .slice(0, 2)}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {student.name}
                      </p>
                      <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <Mail size={13} />
                        {student.email}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      student.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {student.status}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-slate-500">{student.course}</span>
                    <span className="font-semibold text-slate-700">
                      {student.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-indigo-600"
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                </div>

                <Link
                  to={`/student/${student.id}`}
                  className="mt-4 block rounded-xl bg-slate-50 py-2.5 text-center text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          {filteredStudents.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center shadow-sm">
              <Users className="mx-auto text-slate-300" size={42} />
              <h3 className="mt-4 font-semibold text-slate-900">
                No students found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </main>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Add New Student
                  </h2>
                  <p className="text-sm text-slate-500">
                    Enter the student information below.
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleAddStudent} className="space-y-4 p-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    placeholder="Enter full name"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    placeholder="student@example.com"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(event) =>
                      setForm({ ...form, phone: event.target.value })
                    }
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Course
                    </label>
                    <select
                      value={form.course}
                      onChange={(event) =>
                        setForm({ ...form, course: event.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                    >
                      {courses.map((course) => (
                        <option key={course}>{course}</option>
                      ))}
                    </select>
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
                          status: event.target.value as Student['status'],
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
                  >
                    Add Student
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

export default Students