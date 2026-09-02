import type { ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getDashboardPath, getUserRole, logout } from '../Auth'

type AppLayoutProps = {
  children: ReactNode
  title?: string
}

type MenuItem = {
  label: string
  path: string
}

function AppLayout({ children, title }: AppLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const role = getUserRole()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const studentMenu: MenuItem[] = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Teachers', path: '/teachers' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'Courses', path: '/courses' },
    { label: 'Study Material', path: '/study-material' },
    { label: 'Assignments', path: '/assignments' },
    { label: 'Quizzes', path: '/quizzes' },
    { label: 'Attendance', path: '/attendance' },
    { label: 'Calendar', path: '/calendar' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Profile', path: '/profile' },
  ]

  const teacherMenu: MenuItem[] = [
    { label: 'Dashboard', path: '/teacher-dashboard' },
    { label: 'Students', path: '/students' },
    { label: 'Courses', path: '/courses' },
    { label: 'Assignments', path: '/assignments' },
    { label: 'Quizzes', path: '/quizzes' },
    { label: 'Attendance', path: '/attendance' },
    { label: 'Calendar', path: '/calendar' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Profile', path: '/profile' },
  ]

  const adminMenu: MenuItem[] = [
    { label: 'Dashboard', path: '/admin-dashboard' },
    { label: 'Students', path: '/students' },
    { label: 'Teachers', path: '/teachers' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'Courses', path: '/courses' },
    { label: 'Assignments', path: '/assignments' },
    { label: 'Quizzes', path: '/quizzes' },
    { label: 'Attendance', path: '/attendance' },
    { label: 'Calendar', path: '/calendar' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Profile', path: '/profile' },
  ]

  const superAdminMenu: MenuItem[] = [
    { label: 'Dashboard', path: '/super-admin-dashboard' },
    { label: 'Students', path: '/students' },
    { label: 'Teachers', path: '/teachers' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'Courses', path: '/courses' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Profile', path: '/profile' },
  ]

  const menu =
    role === 'student'
      ? studentMenu
      : role === 'teacher'
        ? teacherMenu
        : role === 'admin'
          ? adminMenu
          : role === 'super-admin'
            ? superAdminMenu
            : []

  const roleName =
    role === 'student'
      ? 'Student'
      : role === 'teacher'
        ? 'Teacher'
        : role === 'admin'
          ? 'Admin'
          : role === 'super-admin'
            ? 'Super Admin'
            : 'Guest'

  const userName =
    role === 'student'
      ? 'Pranali Borde'
      : role === 'teacher'
        ? 'Dr. Ananya Sharma'
        : role === 'admin'
          ? 'Admin User'
          : role === 'super-admin'
            ? 'Super Admin'
            : 'Guest User'

  const initials =
    role === 'student'
      ? 'PB'
      : role === 'teacher'
        ? 'AS'
        : role === 'admin'
          ? 'AD'
          : role === 'super-admin'
            ? 'SA'
            : 'GU'

  const dashboardPath = role ? getDashboardPath(role) : '/login'

  const isActive = (path: string) =>
    location.pathname === path ||
    location.pathname.startsWith(`${path}/`)

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6">
          <Link
            to={dashboardPath}
            className="text-xl font-bold text-indigo-600 sm:text-2xl"
          >
            CoachLearn
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none transition focus:border-indigo-500 focus:bg-white lg:w-64"
              />
            </div>

            <Link
              to="/notifications"
              className="rounded-xl p-2 text-lg text-slate-500 hover:bg-slate-100"
              aria-label="Notifications"
            >
              🔔
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                {initials}
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold text-slate-900">
                  {userName}
                </p>
                <p className="text-xs text-slate-500">{roleName}</p>
              </div>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="border-b border-slate-200 bg-white lg:hidden">
        <nav className="flex gap-2 overflow-x-auto px-4 py-3">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold ${
                isActive(item.path)
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto flex max-w-[1600px]">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4">
            <div className="mb-5 rounded-2xl bg-indigo-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                Logged in as
              </p>
              <p className="mt-1 font-bold text-indigo-900">
                {roleName}
              </p>
            </div>

            <nav className="space-y-1">
              {menu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive(item.path)
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-slate-100 pt-5">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="border-b border-slate-200 bg-white">
            <div className="px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <Link
                  to={dashboardPath}
                  className="text-slate-500 hover:text-indigo-600"
                >
                  Home
                </Link>

                <span className="text-slate-300">/</span>

                <span className="font-semibold text-slate-800">
                  {title || 'Dashboard'}
                </span>
              </div>
            </div>
          </div>

          <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AppLayout