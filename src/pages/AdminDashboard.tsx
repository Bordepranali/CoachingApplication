import {
  Activity,
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AppLayout from '../components/AppLayout'

const stats = [
  {
    title: 'Total Students',
    value: '1,248',
    change: '+12.5%',
    icon: Users,
    link: '/students',
  },
  {
    title: 'Teachers',
    value: '42',
    change: '+4.8%',
    icon: GraduationCap,
    link: '/teachers',
  },
  {
    title: 'Courses',
    value: '36',
    change: '+8.2%',
    icon: BookOpen,
    link: '/courses',
  },
  {
    title: 'Assignments',
    value: '128',
    change: '+15.4%',
    icon: ClipboardList,
    link: '/assignments',
  },
]

const activities = [
  {
    title: 'New student registration',
    description: 'Aarav Patil registered for JEE preparation',
    time: '10 minutes ago',
  },
  {
    title: 'Assignment submitted',
    description: '12 students submitted Mathematics Assignment',
    time: '35 minutes ago',
  },
  {
    title: 'New course created',
    description: 'Physics Advanced Batch was added',
    time: '1 hour ago',
  },
  {
    title: 'Teacher profile updated',
    description: 'Rahul Mehta updated his teaching profile',
    time: '2 hours ago',
  },
]

const quickActions = [
  {
    title: 'Manage Students',
    description: 'View and manage student accounts',
    icon: Users,
    link: '/students',
  },
  {
    title: 'Manage Teachers',
    description: 'View teachers and their courses',
    icon: GraduationCap,
    link: '/teachers',
  },
  {
    title: 'Manage Courses',
    description: 'Create and organize courses',
    icon: BookOpen,
    link: '/courses',
  },
  {
    title: 'Subjects',
    description: 'Manage academic subjects',
    icon: LayoutDashboard,
    link: '/subjects',
  },
  {
    title: 'Assignments',
    description: 'Monitor student assignments',
    icon: ClipboardList,
    link: '/assignments',
  },
  {
    title: 'Calendar',
    description: 'Manage classes and schedules',
    icon: CalendarDays,
    link: '/calendar',
  },
]

function AdminDashboard() {
  return (
    <AppLayout title="Admin Dashboard">
      <div className="space-y-6">
        <section className="rounded-3xl bg-linear-to-r from-indigo-600 to-violet-600 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-indigo-100">
                <ShieldCheck size={20} />
                <span className="text-sm font-semibold">
                  Administration Panel
                </span>
              </div>

              <h1 className="text-2xl font-bold sm:text-3xl">
                Welcome back, Admin 👋
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
                Manage students, teachers, courses, academic activities and
                overall institute operations from one place.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-indigo-100">Platform Status</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
                <span className="font-semibold">All systems operational</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <Link
                key={stat.title}
                to={stat.link}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                    <Icon size={22} />
                  </div>

                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                    {stat.change}
                  </span>
                </div>

                <p className="mt-5 text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </Link>
            )
          })}
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Platform Overview
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Current institute performance
                </p>
              </div>

              <Activity className="text-indigo-600" size={22} />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">
                    Student Engagement
                  </span>
                  <span className="font-bold text-indigo-600">86%</span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[86%] rounded-full bg-indigo-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">
                    Average Attendance
                  </span>
                  <span className="font-bold text-emerald-600">91%</span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[91%] rounded-full bg-emerald-500" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">
                    Assignment Completion
                  </span>
                  <span className="font-bold text-violet-600">78%</span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[78%] rounded-full bg-violet-600" />
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">
                    Quiz Participation
                  </span>
                  <span className="font-bold text-orange-600">83%</span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[83%] rounded-full bg-orange-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Activity
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Latest platform updates
                </p>
              </div>

              <Bell className="text-indigo-600" size={22} />
            </div>

            <div className="mt-5 space-y-5">
              {activities.map((activity, index) => (
                <div key={activity.title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                    {index !== activities.length - 1 && (
                      <span className="mt-2 h-full w-px bg-slate-200" />
                    )}
                  </div>

                  <div className="pb-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {activity.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {activity.description}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900">Quick Actions</h2>
            <p className="mt-1 text-sm text-slate-500">
              Frequently used administration tools
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action) => {
              const Icon = action.icon

              return (
                <Link
                  key={action.title}
                  to={action.link}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                >
                  <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {action.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {action.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <section className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold">Administration Center</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                Keep your institute organized by managing users, academic
                content, schedules and communication.
              </p>
            </div>

            <Link
              to="/profile"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <Settings size={18} />
              Admin Profile
            </Link>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}

export default AdminDashboard