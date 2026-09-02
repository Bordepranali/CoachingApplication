import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  Filter,
  TrendingUp,
  XCircle,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type AttendanceRecord = {
  date: string
  day: string
  subject: string
  topic: string
  status: 'Present' | 'Absent' | 'Late'
  time: string
}

const attendanceRecords: AttendanceRecord[] = [
  {
    date: '28 Aug 2026',
    day: 'Friday',
    subject: 'Data Science',
    topic: 'Exploratory Data Analysis',
    status: 'Present',
    time: '10:00 AM',
  },
  {
    date: '27 Aug 2026',
    day: 'Thursday',
    subject: 'DBMS',
    topic: 'SQL Queries',
    status: 'Present',
    time: '11:30 AM',
  },
  {
    date: '26 Aug 2026',
    day: 'Wednesday',
    subject: 'Machine Learning',
    topic: 'Linear Regression',
    status: 'Late',
    time: '9:30 AM',
  },
  {
    date: '25 Aug 2026',
    day: 'Tuesday',
    subject: 'Cloud Computing',
    topic: 'AWS Fundamentals',
    status: 'Present',
    time: '12:00 PM',
  },
  {
    date: '24 Aug 2026',
    day: 'Monday',
    subject: 'Data Science',
    topic: 'Probability and Statistics',
    status: 'Absent',
    time: '10:00 AM',
  },
  {
    date: '22 Aug 2026',
    day: 'Saturday',
    subject: 'DBMS',
    topic: 'PL/SQL Procedures',
    status: 'Present',
    time: '11:30 AM',
  },
  {
    date: '21 Aug 2026',
    day: 'Friday',
    subject: 'Machine Learning',
    topic: 'Model Evaluation',
    status: 'Present',
    time: '9:30 AM',
  },
  {
    date: '20 Aug 2026',
    day: 'Thursday',
    subject: 'Cloud Computing',
    topic: 'Virtualization',
    status: 'Present',
    time: '12:00 PM',
  },
]

const subjectAttendance = [
  {
    subject: 'Data Science',
    attended: 18,
    total: 20,
    percentage: 90,
  },
  {
    subject: 'DBMS',
    attended: 17,
    total: 19,
    percentage: 89,
  },
  {
    subject: 'Machine Learning',
    attended: 16,
    total: 18,
    percentage: 89,
  },
  {
    subject: 'Cloud Computing',
    attended: 15,
    total: 17,
    percentage: 88,
  },
  {
    subject: 'Project Management',
    attended: 14,
    total: 15,
    percentage: 93,
  },
]

function getStatusClasses(status: AttendanceRecord['status']) {
  if (status === 'Present') {
    return 'bg-emerald-50 text-emerald-700 border-emerald-200'
  }

  if (status === 'Late') {
    return 'bg-amber-50 text-amber-700 border-amber-200'
  }

  return 'bg-red-50 text-red-700 border-red-200'
}

function getProgressClasses(percentage: number) {
  if (percentage >= 90) {
    return 'bg-emerald-500'
  }

  if (percentage >= 75) {
    return 'bg-amber-500'
  }

  return 'bg-red-500'
}

export default function Attendance() {
  const [subjectFilter, setSubjectFilter] = useState('All Subjects')
  const [statusFilter, setStatusFilter] = useState('All Status')

  const filteredRecords = useMemo(() => {
    return attendanceRecords.filter((record) => {
      const subjectMatch =
        subjectFilter === 'All Subjects' ||
        record.subject === subjectFilter

      const statusMatch =
        statusFilter === 'All Status' ||
        record.status === statusFilter

      return subjectMatch && statusMatch
    })
  }, [subjectFilter, statusFilter])

  const presentCount = attendanceRecords.filter(
    (record) => record.status === 'Present',
  ).length

  const absentCount = attendanceRecords.filter(
    (record) => record.status === 'Absent',
  ).length

  const lateCount = attendanceRecords.filter(
    (record) => record.status === 'Late',
  ).length

  return (
    <AppLayout>
      <div className="space-y-6">
        <section className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 text-white shadow-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Link
                to="/dashboard"
                className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
              >
                <ArrowLeft size={16} />
                Back to Dashboard
              </Link>

              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <CalendarDays size={24} />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  Academic Year 2026
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Attendance
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Track your class attendance, subject-wise performance, and
                attendance history in one place.
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              <Download size={17} />
              Export Report
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <TrendingUp size={21} />
              </div>
              <span className="text-xs font-semibold text-emerald-600">
                Excellent
              </span>
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">
              Overall Attendance
            </p>
            <p className="mt-1 text-3xl font-bold text-slate-900">90%</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[90%] rounded-full bg-indigo-600" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={21} />
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">
              Present Classes
            </p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {presentCount}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Recorded in recent classes
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <XCircle size={21} />
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">
              Absent Classes
            </p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {absentCount}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Keep attendance above 75%
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Clock3 size={21} />
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">
              Late Classes
            </p>
            <p className="mt-1 text-3xl font-bold text-slate-900">
              {lateCount}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Arrive on time for every class
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Subject-wise Attendance
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your attendance performance across enrolled subjects.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Filter size={16} />
              Current Semester
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {subjectAttendance.map((item) => (
              <div
                key={item.subject}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-800">
                    {item.subject}
                  </p>
                  <span className="text-sm font-bold text-slate-900">
                    {item.percentage}%
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${getProgressClasses(
                      item.percentage,
                    )}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {item.attended} of {item.total} classes attended
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Attendance History
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  View your recent attendance records.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <select
                  value={subjectFilter}
                  onChange={(event) => setSubjectFilter(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500"
                >
                  <option>All Subjects</option>
                  {subjectAttendance.map((item) => (
                    <option key={item.subject}>{item.subject}</option>
                  ))}
                </select>

                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500"
                >
                  <option>All Status</option>
                  <option>Present</option>
                  <option>Absent</option>
                  <option>Late</option>
                </select>
              </div>
            </div>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-760px">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Topic</th>
                  <th className="px-6 py-4">Time</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredRecords.map((record) => (
                  <tr
                    key={`${record.date}-${record.subject}`}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-800">
                        {record.date}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {record.day}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-slate-700">
                      {record.subject}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {record.topic}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {record.time}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(
                          record.status,
                        )}`}
                      >
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 p-4 md:hidden">
            {filteredRecords.map((record) => (
              <div
                key={`${record.date}-${record.subject}`}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {record.subject}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {record.topic}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getStatusClasses(
                      record.status,
                    )}`}
                  >
                    {record.status}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{record.date}</span>
                  <span>{record.time}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredRecords.length === 0 && (
            <div className="p-10 text-center">
              <p className="font-semibold text-slate-700">
                No attendance records found
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your filters.
              </p>
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-bold text-slate-900">
                Need to improve your attendance?
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Attend upcoming classes regularly and keep your attendance
                above the required threshold.
              </p>
            </div>

            <Link
              to="/calendar"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              View Calendar
              <CalendarDays size={17} />
            </Link>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}