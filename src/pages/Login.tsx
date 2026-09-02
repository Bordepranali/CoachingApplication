import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getDashboardPath, setUserRole, type UserRole } from '../Auth'

function Login() {
  const navigate = useNavigate()

  const [role, setRole] = useState<UserRole>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      return
    }

    setUserRole(role)
    navigate(getDashboardPath(role), { replace: true })
  }

  const roleName =
    role === 'student'
      ? 'Student'
      : role === 'teacher'
        ? 'Teacher'
        : role === 'admin'
          ? 'Admin'
          : 'Super Admin'

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
          <div className="hidden bg-indigo-600 p-12 text-white lg:flex lg:flex-col lg:justify-center">
            <h1 className="text-4xl font-bold">
              Welcome back to CoachLearn
            </h1>

            <p className="mt-5 text-lg leading-8 text-indigo-100">
              Continue your learning journey with courses, notes, videos,
              assignments and quizzes.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-xl bg-white/10 p-4">
                Access your personalized dashboard
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                Track progress, attendance and performance
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                Stay connected with your coaching institute
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              <Link
                to="/"
                className="text-2xl font-bold text-indigo-600"
              >
                CoachLearn
              </Link>

              <h2 className="mt-8 text-3xl font-bold text-slate-900 sm:mt-10">
                Sign in
              </h2>

              <p className="mt-2 text-slate-500">
                Select your role and enter your account details.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Login as
                  </label>

                  <select
                    id="role"
                    value={role}
                    onChange={(event) =>
                      setRole(event.target.value as UserRole)
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                    <option value="super-admin">Super Admin</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.99]"
                >
                  Sign In as {roleName}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login