import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Plus,
  Search,
  X,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type AssignmentStatus =
  | 'Pending'
  | 'Submitted'
  | 'Overdue'

type AssignmentPriority =
  | 'High'
  | 'Medium'
  | 'Low'

type Assignment = {
  id: number
  title: string
  subject: string
  description: string
  dueDate: string
  marks: number
  priority: AssignmentPriority
  status: AssignmentStatus
}

const initialAssignments: Assignment[] = [
  {
    id: 1,
    title: 'Python Data Analysis',
    subject: 'Data Science',
    description: 'Analyze a dataset using Python, Pandas and Matplotlib.',
    dueDate: '2026-09-05',
    marks: 20,
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Regression Model',
    subject: 'Machine Learning',
    description: 'Implement linear and polynomial regression on a suitable dataset.',
    dueDate: '2026-09-07',
    marks: 25,
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'SQL Queries Practice',
    subject: 'DBMS',
    description: 'Write SQL queries using joins, grouping and subqueries.',
    dueDate: '2026-08-28',
    marks: 20,
    priority: 'Medium',
    status: 'Submitted',
  },
  {
    id: 4,
    title: 'Cloud Service Models',
    subject: 'Cloud Computing',
    description: 'Prepare a comparison of IaaS, PaaS and SaaS.',
    dueDate: '2026-08-25',
    marks: 15,
    priority: 'Low',
    status: 'Overdue',
  },
  {
    id: 5,
    title: 'Probability Problems',
    subject: 'Statistics',
    description: 'Solve the assigned probability and distribution problems.',
    dueDate: '2026-09-10',
    marks: 20,
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: 6,
    title: 'Embedded Systems Report',
    subject: 'Embedded Systems',
    description: 'Prepare a short report on real-time operating systems.',
    dueDate: '2026-09-12',
    marks: 25,
    priority: 'Medium',
    status: 'Pending',
  },
  {
    id: 7,
    title: 'Java OOP Task',
    subject: 'Java Programming',
    description: 'Create a Java application demonstrating OOP concepts.',
    dueDate: '2026-08-30',
    marks: 20,
    priority: 'High',
    status: 'Submitted',
  },
  {
    id: 8,
    title: 'Data Visualization',
    subject: 'Data Analytics',
    description: 'Create meaningful charts and insights from the given dataset.',
    dueDate: '2026-09-15',
    marks: 20,
    priority: 'Low',
    status: 'Pending',
  },
]

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function getStatusClass(status: AssignmentStatus) {
  if (status === 'Submitted') {
    return 'bg-emerald-50 text-emerald-700 border-emerald-200'
  }

  if (status === 'Overdue') {
    return 'bg-red-50 text-red-700 border-red-200'
  }

  return 'bg-amber-50 text-amber-700 border-amber-200'
}

function getPriorityClass(priority: AssignmentPriority) {
  if (priority === 'High') {
    return 'bg-red-50 text-red-600'
  }

  if (priority === 'Medium') {
    return 'bg-amber-50 text-amber-600'
  }

  return 'bg-slate-100 text-slate-600'
}

export default function Assignments() {
  const [assignments, setAssignments] =
    useState<Assignment[]>(initialAssignments)
  const [search, setSearch] = useState('')
  const [subjectFilter, setSubjectFilter] = useState('All Subjects')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [showModal, setShowModal] = useState(false)

  const [form, setForm] = useState({
    title: '',
    subject: '',
    description: '',
    dueDate: '',
    marks: '20',
    priority: 'Medium' as AssignmentPriority,
  })

  const subjects = useMemo(
    () => ['All Subjects', ...new Set(assignments.map((item) => item.subject))],
    [assignments],
  )

  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) => {
      const matchesSearch =
        assignment.title.toLowerCase().includes(search.toLowerCase()) ||
        assignment.subject.toLowerCase().includes(search.toLowerCase())

      const matchesSubject =
        subjectFilter === 'All Subjects' ||
        assignment.subject === subjectFilter

      const matchesStatus =
        statusFilter === 'All Status' ||
        assignment.status === statusFilter

      return matchesSearch && matchesSubject && matchesStatus
    })
  }, [assignments, search, subjectFilter, statusFilter])

  const total = assignments.length
  const pending = assignments.filter(
    (item) => item.status === 'Pending',
  ).length
  const submitted = assignments.filter(
    (item) => item.status === 'Submitted',
  ).length
  const overdue = assignments.filter(
    (item) => item.status === 'Overdue',
  ).length

  function handleAddAssignment(event: FormEvent) {
    event.preventDefault()

    if (
      !form.title.trim() ||
      !form.subject.trim() ||
      !form.description.trim() ||
      !form.dueDate
    ) {
      return
    }

    const newAssignment: Assignment = {
      id: Date.now(),
      title: form.title.trim(),
      subject: form.subject.trim(),
      description: form.description.trim(),
      dueDate: form.dueDate,
      marks: Number(form.marks) || 20,
      priority: form.priority,
      status: 'Pending',
    }

    setAssignments((current) => [newAssignment, ...current])
    setForm({
      title: '',
      subject: '',
      description: '',
      dueDate: '',
      marks: '20',
      priority: 'Medium',
    })
    setShowModal(false)
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          <section className="overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 p-6 text-white shadow-lg sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-blue-100">
                  <FileText size={18} />
                  Learning & Assessments
                </div>

                <h1 className="text-3xl font-bold sm:text-4xl">
                  Assignments
                </h1>

                <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
                  Manage assignments, track submissions and stay on top of
                  upcoming deadlines.
                </p>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                <Plus size={19} />
                Add Assignment
              </button>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <FileText size={21} />
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  TOTAL
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">{total}</p>
              <p className="mt-1 text-sm text-slate-500">
                Total assignments
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                  <Clock3 size={21} />
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  PENDING
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">
                {pending}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Awaiting submission
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <CheckCircle2 size={21} />
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  SUBMITTED
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">
                {submitted}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Completed assignments
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-red-50 p-3 text-red-600">
                  <AlertCircle size={21} />
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  OVERDUE
                </span>
              </div>
              <p className="mt-4 text-3xl font-bold text-slate-900">
                {overdue}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Need attention
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-[1fr_220px_180px]">
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search assignments..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white"
                />
              </div>

              <select
                value={subjectFilter}
                onChange={(event) => setSubjectFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              >
                {subjects.map((subject) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              >
                <option>All Status</option>
                <option>Pending</option>
                <option>Submitted</option>
                <option>Overdue</option>
              </select>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            {filteredAssignments.map((assignment) => (
              <article
                key={assignment.id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 gap-4">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <BookOpen size={22} />
                    </div>

                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-bold text-slate-900">
                        {assignment.title}
                      </h2>

                      <p className="mt-1 text-sm font-medium text-blue-600">
                        {assignment.subject}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${getPriorityClass(
                      assignment.priority,
                    )}`}
                  >
                    {assignment.priority}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {assignment.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <CalendarDays size={15} />
                      Due Date
                    </div>
                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {formatDate(assignment.dueDate)}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-xs font-medium text-slate-400">
                      Maximum Marks
                    </div>
                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {assignment.marks} marks
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <span
                    className={`inline-flex w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusClass(
                      assignment.status,
                    )}`}
                  >
                    {assignment.status}
                  </span>

                  <Link
                    to="/assignments"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {assignment.status === 'Submitted'
                      ? 'View Submission'
                      : 'Open Assignment'}
                  </Link>
                </div>
              </article>
            ))}
          </section>

          {filteredAssignments.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
              <FileText className="mx-auto text-slate-300" size={42} />
              <h3 className="mt-4 text-lg font-bold text-slate-800">
                No assignments found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </main>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
            <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Add Assignment
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Create a new assignment for students.
                  </p>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleAddAssignment} className="space-y-5 p-5 sm:p-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Assignment Title
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
                      placeholder="Enter assignment title"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Subject
                    </label>
                    <input
                      required
                      value={form.subject}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          subject: event.target.value,
                        })
                      }
                      placeholder="e.g. Data Science"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Due Date
                    </label>
                    <input
                      required
                      type="date"
                      value={form.dueDate}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          dueDate: event.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Maximum Marks
                    </label>
                    <input
                      required
                      min="1"
                      type="number"
                      value={form.marks}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          marks: event.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Priority
                    </label>
                    <select
                      value={form.priority}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          priority: event.target.value as AssignmentPriority,
                        })
                      }
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                    >
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Description
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.description}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          description: event.target.value,
                        })
                      }
                      placeholder="Describe the assignment..."
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Create Assignment
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