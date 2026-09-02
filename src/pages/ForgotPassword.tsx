import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Mail, ShieldCheck } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim()) return

    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        <section className="hidden bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold">
                C
              </div>
              <span className="text-xl font-bold">CoachLearn</span>
            </Link>

            <div className="mt-28 max-w-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <ShieldCheck size={28} />
              </div>

              <h1 className="text-4xl font-bold leading-tight">
                Secure access to your learning journey.
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-300">
                Reset your password and get back to your courses, assignments,
                quizzes and learning resources.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-400">
            © 2026 CoachLearn. All rights reserved.
          </p>
        </section>

        <section className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            <Link
              to="/login"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
            >
              <ArrowLeft size={17} />
              Back to Login
            </Link>

            <div className="mb-8 lg:hidden">
              <Link
                to="/"
                className="inline-flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                  C
                </div>
                <span className="text-lg font-bold text-slate-900">
                  CoachLearn
                </span>
              </Link>
            </div>

            {!submitted ? (
              <>
                <div className="mb-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Mail size={27} />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900">
                    Forgot your password?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Enter the email address associated with your account and
                    we'll send you a password reset link.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                  >
                    Send Reset Link
                  </button>
                </form>

                <p className="mt-8 text-center text-sm text-slate-500">
                  Remember your password?{' '}
                  <Link
                    to="/login"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Sign in
                  </Link>
                </p>
              </>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={32} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  Check your email
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  If an account exists for{' '}
                  <span className="font-semibold text-slate-700">
                    {email}
                  </span>
                  , a password reset link has been sent.
                </p>

                <Link
                  to="/login"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
                >
                  Return to Login
                </Link>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Try another email
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}