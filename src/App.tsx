import { Link } from 'react-router-dom'
import {
  BookOpen,
  GraduationCap,
  Users,
  BarChart3,
  Video,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

function App() {
  const features = [
    {
      icon: BookOpen,
      title: 'Courses & Study Material',
      text: 'Access structured courses, notes, PDFs and learning resources.',
    },
    {
      icon: Video,
      title: 'Video Learning',
      text: 'Learn through recorded lectures and continue watching anytime.',
    },
    {
      icon: ClipboardCheck,
      title: 'Assignments & Quizzes',
      text: 'Complete assignments and test your knowledge with quizzes.',
    },
    {
      icon: BarChart3,
      title: 'Track Performance',
      text: 'Monitor attendance, progress, marks and academic performance.',
    },
  ]

  const stats = [
    { value: '50+', label: 'Courses' },
    { value: '1000+', label: 'Students' },
    { value: '50+', label: 'Teachers' },
    { value: '24/7', label: 'Learning Access' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <GraduationCap size={23} />
            </div>
            <span className="text-xl font-bold text-slate-900">
              Coach<span className="text-indigo-600">Learn</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
              Features
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600">
              About
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:px-5"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 sm:px-5"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                <CheckCircle2 size={17} />
                Complete Coaching Management Platform
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Learn Better.
                <span className="block text-indigo-600">Achieve More.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                CoachLearn brings students, teachers and administrators together
                in one simple platform for smarter coaching and better learning.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Create Account
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 gap-5 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-2xl sm:p-7">
                <div className="rounded-2xl bg-indigo-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-indigo-100">Welcome back</p>
                      <h2 className="mt-1 text-2xl font-bold">Student Dashboard</h2>
                    </div>
                    <GraduationCap size={38} />
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">78%</p>
                      <p className="mt-1 text-xs text-indigo-100">Course Progress</p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">92%</p>
                      <p className="mt-1 text-xs text-indigo-100">Attendance</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <BookOpen className="text-indigo-600" size={24} />
                    <p className="mt-4 font-bold text-slate-900">Courses</p>
                    <p className="mt-1 text-sm text-slate-500">Learn at your pace</p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <BarChart3 className="text-indigo-600" size={24} />
                    <p className="mt-4 font-bold text-slate-900">Progress</p>
                    <p className="mt-1 text-sm text-slate-500">Track your growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                Everything you need
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                One platform for complete learning
              </h2>
              <p className="mt-4 text-slate-600">
                Manage learning, teaching and coaching activities from one place.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <Users size={22} />
                </div>
                <span className="font-semibold text-indigo-600">Built for every role</span>
              </div>

              <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
                Simple for students. Powerful for teachers and administrators.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                CoachLearn provides dedicated experiences for students, teachers,
                administrators and super administrators while keeping the entire
                coaching ecosystem connected.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  'Student learning and performance tracking',
                  'Teacher course and student management',
                  'Administrative monitoring and management',
                  'Centralized academic resources and communication',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="shrink-0 text-indigo-600" size={19} />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-7 text-white sm:p-10">
              <p className="text-sm font-semibold text-indigo-300">Ready to begin?</p>

              <h3 className="mt-3 text-3xl font-bold">
                Start your learning journey today.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Sign in to your account or create a new account and explore the
                CoachLearn platform.
              </p>

              <Link
                to="/login"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Login to CoachLearn
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 CoachLearn. All rights reserved.</p>
          <p>Learning made simple.</p>
        </div>
      </footer>
    </div>
  )
}

export default App