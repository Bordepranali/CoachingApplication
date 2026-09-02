import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation()

  const parts = location.pathname
    .split('/')
    .filter(Boolean)

  const labels: Record<string, string> = {
    dashboard: 'Dashboard',
    teachers: 'Teachers',
    subjects: 'Subjects',
    courses: 'Courses',
    'study-material': 'Study Material',
    assignments: 'Assignments',
    quizzes: 'Quizzes',
    attendance: 'Attendance',
    calendar: 'Calendar',
    notifications: 'Notifications',
    profile: 'Profile',
    students: 'Students',
    'coach-dashboard': 'Teacher Dashboard',
    'admin-dashboard': 'Admin Dashboard',
    settings: 'Settings',
  }

  return (
    <div className="mb-6 flex items-center gap-2 text-sm">
      <Link
        to={
          localStorage.getItem('userRole') === 'Student'
            ? '/dashboard'
            : localStorage.getItem('userRole') === 'Teacher'
              ? '/coach-dashboard'
              : '/admin-dashboard'
        }
        className="font-medium text-indigo-600 hover:text-indigo-700"
      >
        Home
      </Link>

      {parts.map((part, index) => {
        const path = `/${parts.slice(0, index + 1).join('/')}`
        const isLast = index === parts.length - 1

        return (
          <div key={path} className="flex items-center gap-2">
            <span className="text-slate-400">/</span>

            {isLast ? (
              <span className="font-medium text-slate-600">
                {labels[part] || part}
              </span>
            ) : (
              <Link
                to={path}
                className="font-medium text-slate-500 hover:text-indigo-600"
              >
                {labels[part] || part}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumb