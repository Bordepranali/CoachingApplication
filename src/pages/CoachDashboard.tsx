import { Link, useNavigate } from 'react-router-dom'
import {
  Users,
  BookOpen,
  ClipboardList,
  HelpCircle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ArrowRight,
  LogOut,
  GraduationCap,
  Bell,
} from 'lucide-react'
import { logout } from '../Auth'

function CoachDashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const stats = [
    {
      title: 'Total Students',
      value: '248',
      icon: Users,
      path: '/students',
      description: '+12 this month',
    },
    {
      title: 'Active Courses',
      value: '8',
      icon: BookOpen,
      path: '/courses',
      description: '3 ongoing batches',
    },
    {
      title: 'Assignments',
      value: '24',
      icon: ClipboardList,
      path: '/assignments',
      description: '7 pending review',
    },
    {
      title: 'Quizzes',
      value: '16',
      icon: HelpCircle,
      path: '/quizzes',
      description: '4 scheduled',
    },
  ]

  const classes = [
    {
      subject: 'Data Science',
      batch: 'Batch A',
      time: '10:00 AM',
      students: 42,
    },
    {
      subject: 'Python Programming',
      batch: 'Batch B',
      time: '12:30 PM',
      students: 38,
    },
    {
      subject: 'Machine Learning',
      batch: 'Batch A',
      time: '03:00 PM',
      students: 35,
    },
  ]

  const submissions = [
    {
      student: 'Pranali Borde',
      assignment: 'Python Data Analysis',
      time: '10 minutes ago',
      status: 'Submitted',
    },
    {
      student: 'Monika Gaikwad',
      assignment: 'Machine Learning Basics',
      time: '35 minutes ago',
      status: 'Submitted',
    },
    {
      student: 'Rahul Patil',
      assignment: 'Statistics Assignment',
      time: '1 hour ago',
      status: 'Submitted',
    },
    {
      student: 'Sneha Jadhav',
      assignment: 'Python Data Analysis',
      time: '2 hours ago',
      status: 'Submitted',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/teacher-dashboard" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <GraduationCap size={23} />
            </div>

            <span className="text-xl font-bold text-slate-900">
              Coach<span className="text-indigo-600">Learn</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/notifications"
              className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-indigo-600"
            >
              <Bell size={20} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </Link>

            <Link
              to="/profile"
              className="hidden items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-100 sm:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                AS
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Dr. Ananya Sharma
                </p>
                <p className="text-xs text-slate-500">Teacher</p>
              </div>
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <LogOut size={17} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          <Link
            to="/teacher-dashboard"
            className="whitespace-nowrap rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700"
          >
            Dashboard
          </Link>

          <Link
            to="/students"
            className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Students
          </Link>

          <Link
            to="/courses"
            className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Courses
          </Link>

          <Link
            to="/assignments"
            className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Assignments
          </Link>

          <Link
            to="/quizzes"
            className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Quizzes
          </Link>

          <Link
            to="/attendance"
            className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Attendance
          </Link>

          <Link
            to="/calendar"
            className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Calendar
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="rounded-3xl bg-linear-to-r from-indigo-600 to-blue-600 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-indigo-100">
                Teacher Dashboard
              </p>

              <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                Good morning, Dr. Ananya 👋
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
                Manage your students, courses, assignments and quizzes from
                one place.
              </p>
            </div>

            <Link
              to="/calendar"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50"
            >
              <CalendarDays size={18} />
              View Schedule
            </Link>
          </div>
        </div>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <Link
                key={stat.title}
                to={stat.path}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={22} />
                  </div>

                  <ArrowRight size={18} className="text-slate-400" />
                </div>

                <p className="mt-5 text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-medium text-emerald-600">
                  {stat.description}
                </p>
              </Link>
            )
          })}
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Today's Classes
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your upcoming classes for today
                </p>
              </div>

              <Link
                to="/calendar"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View all
              </Link>
            </div>

            <div className="mt-5 space-y-3">
              {classes.map((item) => (
                <div
                  key={`${item.subject}-${item.time}`}
                  className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                      <BookOpen size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.subject}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.batch} · {item.students} students
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Clock3 size={17} className="text-indigo-600" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Attendance Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Overall student attendance
            </p>

            <div className="mt-7 flex items-center justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border-14px border-indigo-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-900">91%</p>
                  <p className="text-xs text-slate-500">Average</p>
                </div>
              </div>
            </div>

            <Link
              to="/attendance"
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Manage Attendance
              <ArrowRight size={17} />
            </Link>
          </section>
        </div>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Submissions
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Assignments recently submitted by students
              </p>
            </div>

            <Link
              to="/assignments"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-650px text-left">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-3 py-3 font-semibold">Student</th>
                  <th className="px-3 py-3 font-semibold">Assignment</th>
                  <th className="px-3 py-3 font-semibold">Submitted</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                </tr>
              </thead>

              <tbody>
                {submissions.map((submission) => (
                  <tr
                    key={`${submission.student}-${submission.assignment}`}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                          {submission.student
                            .split(' ')
                            .map((name) => name[0])
                            .join('')}
                        </div>

                        <span className="text-sm font-semibold text-slate-800">
                          {submission.student}
                        </span>
                      </div>
                    </td>

                    <td className="px-3 py-4 text-sm text-slate-600">
                      {submission.assignment}
                    </td>

                    <td className="px-3 py-4 text-sm text-slate-500">
                      {submission.time}
                    </td>

                    <td className="px-3 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        <CheckCircle2 size={14} />
                        {submission.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/students"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Users className="text-indigo-600" size={24} />
              <h3 className="mt-4 font-bold text-slate-900">Manage Students</h3>
              <p className="mt-1 text-sm text-slate-500">
                View and manage student records.
              </p>
            </Link>

            <Link
              to="/courses"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <BookOpen className="text-indigo-600" size={24} />
              <h3 className="mt-4 font-bold text-slate-900">Manage Courses</h3>
              <p className="mt-1 text-sm text-slate-500">
                Manage your teaching courses.
              </p>
            </Link>

            <Link
              to="/assignments"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <ClipboardList className="text-indigo-600" size={24} />
              <h3 className="mt-4 font-bold text-slate-900">
                Review Assignments
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Check pending student submissions.
              </p>
            </Link>

            <Link
              to="/quizzes"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <HelpCircle className="text-indigo-600" size={24} />
              <h3 className="mt-4 font-bold text-slate-900">Manage Quizzes</h3>
              <p className="mt-1 text-sm text-slate-500">
                Create and manage assessments.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CoachDashboard