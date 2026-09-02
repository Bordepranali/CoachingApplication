import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {
  const navigate = useNavigate()
  const [name, setName] = useState('Pranali Borde')
  const [role, setRole] = useState('Student')

  useEffect(() => {
    const savedName = localStorage.getItem('userName')
    const savedRole = localStorage.getItem('userRole')

    if (savedName) {
      setName(savedName)
    }

    if (savedRole) {
      setRole(savedRole)
    }
  }, [])

  const initials = name
    .split(' ')
    .map((item) => item[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  function handleLogout() {
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userRole')
    navigate('/login')
  }

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to={role === 'Student' ? '/dashboard' : '/coach-dashboard'}
          className="text-2xl font-bold text-indigo-600"
        >
          CoachLearn
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/notifications"
            className="rounded-xl p-2 text-xl hover:bg-slate-100"
          >
            🔔
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
              {initials}
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {name}
              </p>

              <p className="text-xs text-slate-500">
                {role}
              </p>
            </div>
          </Link>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header