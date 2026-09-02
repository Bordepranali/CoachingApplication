import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import {
  BookOpen,
  GraduationCap,
  Layers,
  MoreVertical,
  Plus,
  Search,
  Users,
  X,
  Pencil,
  Trash2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import  AppLayout from '../components/AppLayout'

type Subject = {
  id: number
  name: string
  code: string
  description: string
  teacher: string
  courses: number
  students: number
  status: 'Active' | 'Inactive'
}

const initialSubjects: Subject[] = [
  {
    id: 1,
    name: 'Data Science',
    code: 'DS101',
    description: 'Learn data analysis, statistics, visualization and data-driven problem solving.',
    teacher: 'Dr. Ananya Sharma',
    courses: 4,
    students: 186,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Machine Learning',
    code: 'ML201',
    description: 'Build predictive models and understand modern machine learning techniques.',
    teacher: 'Rahul Mehta',
    courses: 3,
    students: 142,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Python Programming',
    code: 'PY101',
    description: 'Master Python programming from fundamentals to practical applications.',
    teacher: 'Priya Kapoor',
    courses: 3,
    students: 214,
    status: 'Active',
  },
  {
    id: 4,
    name: 'Data Analytics',
    code: 'DA201',
    description: 'Analyze business data using Excel, dashboards and analytical techniques.',
    teacher: 'Amit Verma',
    courses: 2,
    students: 98,
    status: 'Active',
  },
  {
    id: 5,
    name: 'Artificial Intelligence',
    code: 'AI301',
    description: 'Explore AI concepts, intelligent systems, neural networks and applications.',
    teacher: 'Neha Singh',
    courses: 3,
    students: 124,
    status: 'Active',
  },
  {
    id: 6,
    name: 'Web Development',
    code: 'WD201',
    description: 'Develop modern responsive websites using frontend and backend technologies.',
    teacher: 'Vikram Joshi',
    courses: 2,
    students: 87,
    status: 'Inactive',
  },
]

export default function Subjects() {
  const [subjects, setSubjects] = useState(initialSubjects)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [openMenu, setOpenMenu] = useState<number | null>(null)

  const [form, setForm] = useState({
    name: '',
    code: '',
    description: '',
    teacher: '',
    status: 'Active' as Subject['status'],
  })

  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      const matchesSearch =
        subject.name.toLowerCase().includes(search.toLowerCase()) ||
        subject.code.toLowerCase().includes(search.toLowerCase()) ||
        subject.teacher.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        statusFilter === 'All Status' || subject.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [subjects, search, statusFilter])

  const activeSubjects = subjects.filter(
    (subject) => subject.status === 'Active',
  ).length

  const totalStudents = subjects.reduce(
    (sum, subject) => sum + subject.students,
    0,
  )

  const totalCourses = subjects.reduce(
    (sum, subject) => sum + subject.courses,
    0,
  )

  function openAddModal() {
    setEditingId(null)
    setForm({
      name: '',
      code: '',
      description: '',
      teacher: '',
      status: 'Active',
    })
    setShowModal(true)
  }

  function openEditModal(subject: Subject) {
    setEditingId(subject.id)
    setForm({
      name: subject.name,
      code: subject.code,
      description: subject.description,
      teacher: subject.teacher,
      status: subject.status,
    })
    setShowModal(true)
    setOpenMenu(null)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.name || !form.code || !form.description || !form.teacher) {
      return
    }

    if (editingId !== null) {
      setSubjects((current) =>
        current.map((subject) =>
          subject.id === editingId
            ? {
                ...subject,
                name: form.name,
                code: form.code,
                description: form.description,
                teacher: form.teacher,
                status: form.status,
              }
            : subject,
        ),
      )
    } else {
      setSubjects((current) => [
        ...current,
        {
          id: Date.now(),
          name: form.name,
          code: form.code,
          description: form.description,
          teacher: form.teacher,
          courses: 0,
          students: 0,
          status: form.status,
        },
      ])
    }

    setShowModal(false)
    setEditingId(null)
  }

  function deleteSubject(id: number) {
    setSubjects((current) =>
      current.filter((subject) => subject.id !== id),
    )
    setOpenMenu(null)
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <BookOpen className="h-4 w-4" />
                  Academic Management
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Subjects
                </h1>
                <p className="mt-1 text-slate-500">
                  Manage subjects, instructors, courses and student enrollment.
                </p>
              </div>

              <button
                onClick={openAddModal}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Subject
              </button>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Layers className="h-5 w-5" />
                </div>
                <span className="text-xs text-slate-400">Subjects</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {subjects.length}
              </p>
              <p className="text-sm text-slate-500">Total subjects</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-xs text-slate-400">Status</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {activeSubjects}
              </p>
              <p className="text-sm text-slate-500">Active subjects</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="text-xs text-slate-400">Courses</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {totalCourses}
              </p>
              <p className="text-sm text-slate-500">Linked courses</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-xs text-slate-400">Enrollment</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {totalStudents}
              </p>
              <p className="text-sm text-slate-500">Student enrollments</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search subject, code or teacher..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 sm:w-44"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredSubjects.map((subject) => (
              <div
                key={subject.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BookOpen className="h-6 w-6" />
                  </div>

                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenMenu(
                          openMenu === subject.id ? null : subject.id,
                        )
                      }
                      className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>

                    {openMenu === subject.id && (
                      <div className="absolute right-0 z-20 mt-1 w-36 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                        <button
                          onClick={() => openEditModal(subject)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                        >
                          <Pencil className="h-4 w-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => deleteSubject(subject.id)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <h2 className="text-xl font-bold text-slate-900">
                    {subject.name}
                  </h2>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      subject.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {subject.status}
                  </span>
                </div>

                <p className="mt-1 text-sm font-semibold text-blue-600">
                  {subject.code}
                </p>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                  {subject.description}
                </p>

                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Instructor
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {subject.teacher}
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 p-3">
                    <p className="text-xs text-slate-400">Courses</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      {subject.courses}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-3">
                    <p className="text-xs text-slate-400">Students</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      {subject.students}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/subjects/${subject.id}`}
                  className="mt-5 block w-full rounded-xl bg-blue-50 px-4 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                  View Subject
                </Link>
              </div>
            ))}
          </div>

          {filteredSubjects.length === 0 && (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Layers className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No subjects found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or status filter.
              </p>
            </div>
          )}
        </main>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
            <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {editingId !== null ? 'Edit Subject' : 'Add Subject'}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {editingId !== null
                      ? 'Update subject information.'
                      : 'Create a new academic subject.'}
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 p-6">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Subject Name
                  </label>
                  <input
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    placeholder="e.g. Data Science"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Subject Code
                  </label>
                  <input
                    value={form.code}
                    onChange={(event) =>
                      setForm({ ...form, code: event.target.value })
                    }
                    placeholder="e.g. DS101"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Description
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        description: event.target.value,
                      })
                    }
                    placeholder="Enter subject description"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Instructor
                  </label>
                  <input
                    value={form.teacher}
                    onChange={(event) =>
                      setForm({ ...form, teacher: event.target.value })
                    }
                    placeholder="Enter instructor name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        status: event.target.value as Subject['status'],
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  >
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    {editingId !== null ? 'Save Changes' : 'Add Subject'}
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