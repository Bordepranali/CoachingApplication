import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Sidebar() {
  const location = useLocation()
  const [role, setRole] = useState('Student')

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole')

    if (savedRole) {
      setRole(savedRole)
    }
  }, [])

  const studentLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Courses', path: '/courses' },
    { name: 'Study Material', path: '/study-material' },
    { name: 'Assignments', path: '/assignments' },
    { name: 'Quizzes', path: '/quizzes' },
    { name: 'Attendance', path: '/attendance' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'Profile', path: '/profile' },
  ]

  const teacherLinks = [
    { name: 'Dashboard', path: '/coach-dashboard' },
    { name: 'Students', path: '/students' },
    { name: 'Courses', path: '/courses' },
    { name: 'Assignments', path: '/assignments' },
    { name: 'Quizzes', path: '/quizzes' },
    { name: 'Attendance', path: '/attendance' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Profile', path: '/profile' },
  ]

  const adminLinks = [
    { name: 'Dashboard', path: '/admin-dashboard' },
    { name: 'Students', path: '/students' },
    { name: 'Teachers', path: '/teachers' },
    { name: 'Courses', path: '/courses' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Assignments', path: '/assignments' },
    { name: 'Quizzes', path: '/quizzes' },
    { name: 'Attendance', path: '/attendance' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'Profile', path: '/profile' },
  ]

  const links =
    role === 'Student'
      ? studentLinks
      : role === 'Teacher'
        ? teacherLinks
        : adminLinks

  return (
    <aside className="w-full border-b border-slate-200 bg-white lg:min-h-[calc(100vh-73px)] lg:w-64 lg:border-b-0 lg:border-r">
      <nav className="flex gap-2 overflow-x-auto p-4 lg:flex-col">
        {links.map((link) => {
          const active =
            location.pathname === link.path ||
            location.pathname.startsWith(`${link.path}/`)

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar