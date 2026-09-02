import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Layers3,
  Settings,
  ShieldCheck,
  Users,
  UserCog,
  Video,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

const stats = [
  {
    label: 'Total Students',
    value: '1,248',
    change: '+12.8%',
    icon: Users,
    iconClass: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Total Teachers',
    value: '86',
    change: '+6.2%',
    icon: UserCog,
    iconClass: 'bg-violet-50 text-violet-600',
  },
  {
    label: 'Active Courses',
    value: '42',
    change: '+8.4%',
    icon: BookOpen,
    iconClass: 'bg-emerald-50 text-emerald-600',
  },
  {
    label: 'Platform Activity',
    value: '94.6%',
    change: '+4.7%',
    icon: Activity,
    iconClass: 'bg-amber-50 text-amber-600',
  },
]

const recentActivity = [
  {
    title: 'New teacher account created',
    description: 'Dr. Sneha Patil joined the platform.',
    time: '12 min ago',
    icon: UserCog,
    iconClass: 'bg-violet-100 text-violet-600',
  },
  {
    title: 'New course published',
    description: 'Advanced Machine Learning is now live.',
    time: '45 min ago',
    icon: BookOpen,
    iconClass: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Student registrations increased',
    description: '32 new students registered today.',
    time: '2 hours ago',
    icon: Users,
    iconClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'System maintenance completed',
    description: 'Scheduled maintenance finished successfully.',
    time: '5 hours ago',
    icon: Settings,
    iconClass: 'bg-slate-100 text-slate-600',
  },
]

const platformModules = [
  {
    title: 'Student Management',
    description: 'Manage student accounts, courses and progress.',
    value: '1,248',
    icon: Users,
    link: '/students',
    iconClass: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Teacher Management',
    description: 'Manage faculty profiles and teaching assignments.',
    value: '86',
    icon: UserCog,
    link: '/teachers',
    iconClass: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Course Management',
    description: 'Create and manage courses across subjects.',
    value: '42',
    icon: BookOpen,
    link: '/courses',
    iconClass: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Subject Management',
    description: 'Organize subjects, modules and academic content.',
    value: '18',
    icon: Layers3,
    link: '/subjects',
    iconClass: 'bg-amber-50 text-amber-600',
  },
]

const systemChecks = [
  {
    label: 'Platform status',
    value: 'Operational',
  },
  {
    label: 'Database status',
    value: 'Healthy',
  },
  {
    label: 'Video service',
    value: 'Operational',
  },
  {
    label: 'Notification service',
    value: 'Operational',
  },
]

export default function SuperAdminDashboard() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="bg-linear-to-br from-slate-950 via-indigo-950 to-blue-900 px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <ShieldCheck size={26} />
                </div>

                <p className="mb-2 text-sm font-medium text-blue-200">
                  System administration
                </p>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Super Admin Dashboard
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                  Monitor the complete CoachLearn platform, manage users and
                  keep the learning ecosystem running smoothly.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/notifications"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <Activity size={17} />
                  View activity
                </Link>

                <Link
                  to="/profile"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Admin Profile
                  <ChevronRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconClass}`}
                    >
                      <Icon size={21} />
                    </div>

                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                      <ArrowUpRight size={13} />
                      {stat.change}
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>

                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Platform Overview
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Quickly access major administration modules.
                  </p>
                </div>

                <ShieldCheck
                  size={22}
                  className="text-blue-600"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {platformModules.map((module) => {
                  const Icon = module.icon

                  return (
                    <Link
                      key={module.title}
                      to={module.link}
                      className="group rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${module.iconClass}`}
                        >
                          <Icon size={19} />
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                        />
                      </div>

                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {module.title}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {module.description}
                          </p>
                        </div>

                        <span className="text-lg font-bold text-slate-900">
                          {module.value}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    System Health
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Current platform service status.
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={19} />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {systemChecks.map((check) => (
                  <div
                    key={check.label}
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-600">
                      {check.label}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {check.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
                  <Activity size={17} />
                  Overall uptime
                </div>
                <p className="mt-1 text-2xl font-bold text-blue-900">
                  99.98%
                </p>
                <p className="mt-1 text-xs text-blue-700">
                  Platform services are operating normally.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Recent Activity
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Latest platform events and updates.
                  </p>
                </div>

                <Link
                  to="/notifications"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  View all
                </Link>
              </div>

              <div className="mt-5 space-y-3">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon

                  return (
                    <div
                      key={activity.title}
                      className="flex gap-3 rounded-xl border border-slate-100 p-3 transition hover:bg-slate-50"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activity.iconClass}`}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-sm font-semibold text-slate-800">
                            {activity.title}
                          </h3>

                          <span className="text-xs text-slate-400">
                            {activity.time}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Quick Actions
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Frequently used administration tools.
                </p>
              </div>

              <div className="mt-5 grid gap-3">
                <Link
                  to="/students"
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <div className="flex items-center gap-3">
                    <Users size={19} className="text-blue-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      Manage Students
                    </span>
                  </div>
                  <ChevronRight size={17} className="text-slate-400" />
                </Link>

                <Link
                  to="/teachers"
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-violet-200 hover:bg-violet-50/40"
                >
                  <div className="flex items-center gap-3">
                    <UserCog size={19} className="text-violet-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      Manage Teachers
                    </span>
                  </div>
                  <ChevronRight size={17} className="text-slate-400" />
                </Link>

                <Link
                  to="/courses"
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={19} className="text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      Manage Courses
                    </span>
                  </div>
                  <ChevronRight size={17} className="text-slate-400" />
                </Link>

                <Link
                  to="/calendar"
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-amber-200 hover:bg-amber-50/40"
                >
                  <div className="flex items-center gap-3">
                    <CalendarDays size={19} className="text-amber-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      Academic Calendar
                    </span>
                  </div>
                  <ChevronRight size={17} className="text-slate-400" />
                </Link>
              </div>
            </section>
          </div>

          <section className="mt-6 overflow-hidden rounded-2xl bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 p-6 text-white shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                  <GraduationCap size={18} />
                  CoachLearn Administration
                </div>

                <h2 className="mt-2 text-2xl font-bold">
                  Manage the complete learning ecosystem from one place.
                </h2>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Monitor users, courses, academic content, activities and
                  platform services with centralized administration.
                </p>
              </div>

              <Link
                to="/courses"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Explore Platform
                <ChevronRight size={17} />
              </Link>
            </div>
          </section>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Video size={14} />
            CoachLearn Super Admin Console
          </div>
        </main>
      </div>
    </AppLayout>
  )
}