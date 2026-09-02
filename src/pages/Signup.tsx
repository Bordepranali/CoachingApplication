import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  Lock,
  Mail,
  User,
} from 'lucide-react'
import { getDashboardPath, setUserRole } from '../Auth'
import type { UserRole } from '../Auth'

export default function Signup() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student' as UserRole,
  })

  function handleChange(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
    setError('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.name.trim()) {
      setError('Please enter your full name.')
      return
    }

    if (!form.email.trim()) {
      setError('Please enter your email address.')
      return
    }

    if (form.password.length < 6) {
      setError('Password must contain at least 6 characters.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    localStorage.setItem('userName', form.name)
    localStorage.setItem('userEmail', form.email)

    setUserRole(form.role)
    setSuccess(true)

    setTimeout(() => {
      navigate(getDashboardPath(form.role))
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-slate-950 lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative z-10 p-10">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-lg">
                <GraduationCap size={25} />
              </div>
              <span className="text-2xl font-bold text-white">
                CoachLearn
              </span>
            </Link>
          </div>

          <div className="relative z-10 px-10 pb-16">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <BookOpen size={30} />
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-tight text-white">
              Start your learning journey today.
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
              Join CoachLearn and manage courses, assignments, quizzes,
              attendance and your complete learning experience in one place.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Access structured courses and study material',
                'Track assignments, quizzes and performance',
                'Stay updated with classes and announcements',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-indigo-400"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 px-10 pb-8 text-sm text-slate-500">
            © 2026 CoachLearn. All rights reserved.
          </div>
        </div>

        <div className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
                  <GraduationCap size={25} />
                </div>
                <span className="text-2xl font-bold text-slate-900">
                  CoachLearn
                </span>
              </Link>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">
                Create your account
              </h2>
              <p className="mt-2 text-slate-500">
                Sign up to get started with CoachLearn.
              </p>
            </div>

            {success ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={28} />
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Account created successfully
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  Redirecting you to your dashboard...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        handleChange('name', event.target.value)
                      }
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        handleChange('email', event.target.value)
                      }
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Account Type
                  </label>

                  <select
                    value={form.role}
                    onChange={(event) =>
                      handleChange('role', event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                    <option value="super-admin">Super Admin</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={form.password}
                      onChange={(event) =>
                        handleChange('password', event.target.value)
                      }
                      placeholder="Create a password"
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type={
                        showConfirmPassword ? 'text' : 'password'
                      }
                      value={form.confirmPassword}
                      onChange={(event) =>
                        handleChange(
                          'confirmPassword',
                          event.target.value,
                        )
                      }
                      placeholder="Confirm your password"
                      className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-12 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((value) => !value)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
                >
                  Create Account
                  <ArrowRight size={19} />
                </button>
              </form>
            )}

            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Sign in
              </Link>
            </p>

            <div className="mt-5 text-center">
              <Link
                to="/"
                className="text-sm font-medium text-slate-400 hover:text-slate-600"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}