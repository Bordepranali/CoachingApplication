import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Award,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Target,
  TrendingUp,
  UserRound,
  XCircle,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type Assignment = {
  title: string
  subject: string
  dueDate: string
  status: 'Submitted' | 'Pending' | 'Overdue'
  marks: string
}

type Student = {
  id: string
  name: string
  email: string
  phone: string
  course: string
  batch: string
  status: 'Active' | 'Inactive'
  progress: number
  attendance: number
  joined: string
  lastActive: string
  avatar: string
  assignments: Assignment[]
  subjects: {
    name: string
    score: number
    progress: number
  }[]
}

const students: Record<string, Student> = {
  '1': {
    id: '1',
    name: 'Pranali Borde',
    email: 'pranali@example.com',
    phone: '+91 98765 43210',
    course: 'Data Science',
    batch: '2026-A',
    status: 'Active',
    progress: 78,
    attendance: 92,
    joined: '12 June 2026',
    lastActive: 'Today, 10:42 AM',
    avatar: 'PB',
    assignments: [
      {
        title: 'Python Data Analysis',
        subject: 'Python',
        dueDate: '28 Aug 2026',
        status: 'Submitted',
        marks: '18/20',
      },
      {
        title: 'Statistical Analysis Report',
        subject: 'Statistics',
        dueDate: '2 Sep 2026',
        status: 'Pending',
        marks: '-',
      },
      {
        title: 'Machine Learning Model',
        subject: 'Machine Learning',
        dueDate: '20 Aug 2026',
        status: 'Overdue',
        marks: '-',
      },
    ],
    subjects: [
      { name: 'Python Programming', score: 88, progress: 91 },
      { name: 'Statistics', score: 82, progress: 78 },
      { name: 'Machine Learning', score: 76, progress: 72 },
      { name: 'Data Visualization', score: 89, progress: 84 },
    ],
  },
  '2': {
    id: '2',
    name: 'Monika Gaikwad',
    email: 'monika@example.com',
    phone: '+91 98765 43211',
    course: 'Data Science',
    batch: '2026-A',
    status: 'Active',
    progress: 84,
    attendance: 95,
    joined: '10 June 2026',
    lastActive: 'Today, 9:15 AM',
    avatar: 'MG',
    assignments: [
      {
        title: 'Python Data Analysis',
        subject: 'Python',
        dueDate: '28 Aug 2026',
        status: 'Submitted',
        marks: '19/20',
      },
      {
        title: 'Statistical Analysis Report',
        subject: 'Statistics',
        dueDate: '2 Sep 2026',
        status: 'Submitted',
        marks: '17/20',
      },
    ],
    subjects: [
      { name: 'Python Programming', score: 92, progress: 95 },
      { name: 'Statistics', score: 87, progress: 84 },
      { name: 'Machine Learning', score: 82, progress: 79 },
      { name: 'Data Visualization', score: 90, progress: 88 },
    ],
  },
  '3': {
    id: '3',
    name: 'Sneha Patil',
    email: 'sneha@example.com',
    phone: '+91 98765 43212',
    course: 'Machine Learning',
    batch: '2026-B',
    status: 'Active',
    progress: 69,
    attendance: 88,
    joined: '15 June 2026',
    lastActive: 'Yesterday, 6:30 PM',
    avatar: 'SP',
    assignments: [
      {
        title: 'ML Classification',
        subject: 'Machine Learning',
        dueDate: '30 Aug 2026',
        status: 'Pending',
        marks: '-',
      },
      {
        title: 'Python Data Analysis',
        subject: 'Python',
        dueDate: '25 Aug 2026',
        status: 'Submitted',
        marks: '16/20',
      },
    ],
    subjects: [
      { name: 'Python Programming', score: 79, progress: 82 },
      { name: 'Statistics', score: 74, progress: 70 },
      { name: 'Machine Learning', score: 68, progress: 64 },
      { name: 'Deep Learning', score: 72, progress: 61 },
    ],
  },
  '4': {
    id: '4',
    name: 'Riya Sharma',
    email: 'riya@example.com',
    phone: '+91 98765 43213',
    course: 'Web Development',
    batch: '2026-B',
    status: 'Active',
    progress: 73,
    attendance: 90,
    joined: '18 June 2026',
    lastActive: 'Today, 8:40 AM',
    avatar: 'RS',
    assignments: [
      {
        title: 'React Components',
        subject: 'React',
        dueDate: '29 Aug 2026',
        status: 'Submitted',
        marks: '18/20',
      },
      {
        title: 'Responsive Website',
        subject: 'Web Development',
        dueDate: '5 Sep 2026',
        status: 'Pending',
        marks: '-',
      },
    ],
    subjects: [
      { name: 'HTML & CSS', score: 91, progress: 94 },
      { name: 'JavaScript', score: 84, progress: 81 },
      { name: 'React', score: 78, progress: 73 },
      { name: 'UI Design', score: 86, progress: 76 },
    ],
  },
  '5': {
    id: '5',
    name: 'Aarav Joshi',
    email: 'aarav@example.com',
    phone: '+91 98765 43214',
    course: 'Python Programming',
    batch: '2026-C',
    status: 'Active',
    progress: 81,
    attendance: 94,
    joined: '20 June 2026',
    lastActive: 'Today, 11:20 AM',
    avatar: 'AJ',
    assignments: [
      {
        title: 'Python Basics',
        subject: 'Python',
        dueDate: '26 Aug 2026',
        status: 'Submitted',
        marks: '20/20',
      },
      {
        title: 'OOP in Python',
        subject: 'Python',
        dueDate: '4 Sep 2026',
        status: 'Pending',
        marks: '-',
      },
    ],
    subjects: [
      { name: 'Python Basics', score: 94, progress: 96 },
      { name: 'OOP', score: 89, progress: 86 },
      { name: 'File Handling', score: 85, progress: 79 },
      { name: 'Projects', score: 91, progress: 78 },
    ],
  },
  '6': {
    id: '6',
    name: 'Kunal More',
    email: 'kunal@example.com',
    phone: '+91 98765 43215',
    course: 'Data Analytics',
    batch: '2026-C',
    status: 'Active',
    progress: 66,
    attendance: 86,
    joined: '22 June 2026',
    lastActive: '2 days ago',
    avatar: 'KM',
    assignments: [
      {
        title: 'Excel Dashboard',
        subject: 'Excel',
        dueDate: '27 Aug 2026',
        status: 'Pending',
        marks: '-',
      },
      {
        title: 'Data Cleaning',
        subject: 'Data Analytics',
        dueDate: '21 Aug 2026',
        status: 'Overdue',
        marks: '-',
      },
    ],
    subjects: [
      { name: 'Excel', score: 76, progress: 81 },
      { name: 'SQL', score: 71, progress: 69 },
      { name: 'Power BI', score: 64, progress: 59 },
      { name: 'Statistics', score: 70, progress: 65 },
    ],
  },
  '7': {
    id: '7',
    name: 'Ananya Kulkarni',
    email: 'ananya@example.com',
    phone: '+91 98765 43216',
    course: 'Artificial Intelligence',
    batch: '2026-D',
    status: 'Active',
    progress: 76,
    attendance: 91,
    joined: '25 June 2026',
    lastActive: 'Today, 12:10 PM',
    avatar: 'AK',
    assignments: [
      {
        title: 'AI Fundamentals',
        subject: 'Artificial Intelligence',
        dueDate: '1 Sep 2026',
        status: 'Submitted',
        marks: '18/20',
      },
      {
        title: 'Neural Network Basics',
        subject: 'Deep Learning',
        dueDate: '6 Sep 2026',
        status: 'Pending',
        marks: '-',
      },
    ],
    subjects: [
      { name: 'Artificial Intelligence', score: 86, progress: 82 },
      { name: 'Machine Learning', score: 79, progress: 76 },
      { name: 'Deep Learning', score: 74, progress: 68 },
      { name: 'Python Programming', score: 88, progress: 85 },
    ],
  },
  '8': {
    id: '8',
    name: 'Rahul Deshmukh',
    email: 'rahul@example.com',
    phone: '+91 98765 43217',
    course: 'Modern Web Development',
    batch: '2026-D',
    status: 'Active',
    progress: 71,
    attendance: 89,
    joined: '28 June 2026',
    lastActive: 'Yesterday, 5:45 PM',
    avatar: 'RD',
    assignments: [
      {
        title: 'Responsive Web Design',
        subject: 'Web Development',
        dueDate: '3 Sep 2026',
        status: 'Submitted',
        marks: '17/20',
      },
      {
        title: 'React Application',
        subject: 'React',
        dueDate: '8 Sep 2026',
        status: 'Pending',
        marks: '-',
      },
    ],
    subjects: [
      { name: 'HTML & CSS', score: 87, progress: 90 },
      { name: 'JavaScript', score: 79, progress: 76 },
      { name: 'React', score: 75, progress: 69 },
      { name: 'UI Design', score: 82, progress: 73 },
    ],
  },
}

function statusStyle(status: Assignment['status']) {
  if (status === 'Submitted') {
    return 'bg-emerald-50 text-emerald-700'
  }

  if (status === 'Overdue') {
    return 'bg-red-50 text-red-700'
  }

  return 'bg-amber-50 text-amber-700'
}

export default function StudentDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState<
    'overview' | 'assignments' | 'subjects'
  >('overview')

  const student = id ? students[id] : undefined

  const averageScore = useMemo(() => {
    if (!student) return 0

    return Math.round(
      student.subjects.reduce((sum, subject) => sum + subject.score, 0) /
        student.subjects.length,
    )
  }, [student])

  const submittedAssignments =
    student?.assignments.filter(
      (assignment) => assignment.status === 'Submitted',
    ).length ?? 0

  if (!student) {
    return (
      <AppLayout>
        <div className="flex min-h-[70vh] items-center justify-center p-6">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <UserRound size={30} />
            </div>
            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              Student not found
            </h1>
            <p className="mt-2 text-slate-500">
              The student profile you are looking for does not exist.
            </p>
            <Link
              to="/students"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
            >
              <ArrowLeft size={18} />
              Back to Students
            </Link>
          </div>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout>
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/students"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600"
          >
            <ArrowLeft size={18} />
            Back to Students
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/notifications"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <MessageCircle size={17} />
              Message
            </Link>

            <Link
              to="/calendar"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <CalendarDays size={17} />
              Schedule
            </Link>
          </div>
        </div>

        <section className="overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-indigo-700 to-violet-700 p-6 text-white shadow-xl sm:p-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl font-bold backdrop-blur">
                {student.avatar}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    {student.name}
                  </h1>
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                    {student.status}
                  </span>
                </div>

                <p className="mt-2 text-indigo-100">
                  {student.course} · Batch {student.batch}
                </p>

                <p className="mt-1 text-sm text-indigo-200">
                  Last active {student.lastActive}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-2xl font-bold">{student.progress}%</p>
                <p className="mt-1 text-xs text-indigo-100">Progress</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-2xl font-bold">{student.attendance}%</p>
                <p className="mt-1 text-xs text-indigo-100">Attendance</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-2xl font-bold">{averageScore}%</p>
                <p className="mt-1 text-xs text-indigo-100">Avg. Score</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: 'Course Progress',
              value: `${student.progress}%`,
              icon: TrendingUp,
              text: 'Overall learning progress',
            },
            {
              label: 'Attendance',
              value: `${student.attendance}%`,
              icon: CalendarDays,
              text: 'Class attendance',
            },
            {
              label: 'Average Score',
              value: `${averageScore}%`,
              icon: Award,
              text: 'Across all subjects',
            },
            {
              label: 'Assignments',
              value: `${submittedAssignments}/${student.assignments.length}`,
              icon: CheckCircle2,
              text: 'Submitted assignments',
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={21} />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">
                    {item.value}
                  </span>
                </div>

                <p className="mt-4 font-semibold text-slate-900">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <div className="flex min-w-max border-b border-slate-200">
            {[
              ['overview', 'Overview'],
              ['assignments', 'Assignments'],
              ['subjects', 'Subject Performance'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() =>
                  setActiveTab(
                    value as 'overview' | 'assignments' | 'subjects',
                  )
                }
                className={`border-b-2 px-5 py-4 text-sm font-semibold transition ${
                  activeTab === value
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="grid gap-6 lg:grid-cols-3">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Learning Progress
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Current progress across the enrolled course
                  </p>
                </div>

                <Target className="text-indigo-500" size={23} />
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-600">
                    Overall completion
                  </span>
                  <span className="font-bold text-slate-900">
                    {student.progress}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {student.subjects.map((subject) => (
                  <div
                    key={subject.name}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-800">
                        {subject.name}
                      </span>
                      <span className="font-bold text-indigo-600">
                        {subject.score}%
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-indigo-500"
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>

                    <p className="mt-2 text-xs text-slate-500">
                      {subject.progress}% completed
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                Contact Information
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-400">
                      Email
                    </p>
                    <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                      {student.email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {student.phone}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Clock3 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Joined
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {student.joined}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Course
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {student.course}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'assignments' && (
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900">
                Assignment History
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Track submitted, pending and overdue assignments.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {student.assignments.map((assignment) => (
                <div
                  key={assignment.title}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <BookOpen size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {assignment.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {assignment.subject} · Due {assignment.dueDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-slate-700">
                      {assignment.marks}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyle(
                        assignment.status,
                      )}`}
                    >
                      {assignment.status === 'Submitted' ? (
                        <CheckCircle2 size={14} />
                      ) : assignment.status === 'Overdue' ? (
                        <XCircle size={14} />
                      ) : (
                        <Clock3 size={14} />
                      )}
                      {assignment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'subjects' && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Subject Performance
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Scores and completion progress for each subject.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {student.subjects.map((subject) => (
                <div key={subject.name}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {subject.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {subject.progress}% course completion
                      </p>
                    </div>

                    <span className="text-lg font-bold text-indigo-600">
                      {subject.score}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-indigo-600"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            to="/assignments"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Assignments</p>
              <p className="text-sm text-slate-500">
                View all assignments
              </p>
            </div>
          </Link>

          <Link
            to="/attendance"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CalendarDays size={20} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Attendance</p>
              <p className="text-sm text-slate-500">
                View attendance records
              </p>
            </div>
          </Link>

          <Link
            to="/quizzes"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <BarChart3 size={20} />
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                Quiz Performance
              </p>
              <p className="text-sm text-slate-500">
                View quiz results
              </p>
            </div>
          </Link>
        </div>
      </div>
    </AppLayout>
  )
}