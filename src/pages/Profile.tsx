import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Award,
  BookOpen,
  Camera,
  CheckCircle2,
  Edit3,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Save,
  ShieldCheck,
  User,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

export default function Profile() {
  const [editing, setEditing] = useState(false)

  const [profile, setProfile] = useState({
    name: 'Pranali Borde',
    email: 'pranali.borde@example.com',
    phone: '+91 98765 43210',
    location: 'Maharashtra, India',
    course: 'Artificial Intelligence & Data Science',
    batch: '2024 - 2028',
    bio: 'AI & Data Science student focused on building practical skills in machine learning, data analytics, and software development.',
  })

  function updateField(field: keyof typeof profile, value: string) {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }))
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <section className="overflow-hidden rounded-3xl bg-linear-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 text-white shadow-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Link
                to="/dashboard"
                className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
              >
                <ArrowLeft size={16} />
                Back to Dashboard
              </Link>

              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <User size={24} />
                </div>

                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Active Student
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Profile
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Manage your personal information, academic details, and
                learning profile.
              </p>
            </div>

            <button
              onClick={() => setEditing((value) => !value)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {editing ? <Save size={17} /> : <Edit3 size={17} />}
              {editing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-600 text-3xl font-bold text-white shadow-lg">
                  PB
                </div>

                <button
                  className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-white shadow-md"
                  aria-label="Change profile photo"
                >
                  <Camera size={15} />
                </button>
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {profile.name}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {profile.course}
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  Student
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Active
                </span>
              </div>
            </div>

            <div className="mt-7 space-y-4 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-50 p-2.5 text-slate-500">
                  <Mail size={17} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="truncate text-sm font-medium text-slate-700">
                    {profile.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-50 p-2.5 text-slate-500">
                  <Phone size={17} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="text-sm font-medium text-slate-700">
                    {profile.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-50 p-2.5 text-slate-500">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-medium text-slate-700">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your basic account information.
                  </p>
                </div>

                <User className="text-indigo-500" size={22} />
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    value={profile.name}
                    disabled={!editing}
                    onChange={(event) =>
                      updateField('name', event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 disabled:cursor-default disabled:opacity-90"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    value={profile.email}
                    disabled={!editing}
                    onChange={(event) =>
                      updateField('email', event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 disabled:cursor-default disabled:opacity-90"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    value={profile.phone}
                    disabled={!editing}
                    onChange={(event) =>
                      updateField('phone', event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 disabled:cursor-default disabled:opacity-90"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Location
                  </label>
                  <input
                    value={profile.location}
                    disabled={!editing}
                    onChange={(event) =>
                      updateField('location', event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 disabled:cursor-default disabled:opacity-90"
                  />
                </div>
              </div>

              {editing && (
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => setEditing(false)}
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    <Save size={17} />
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Academic Information
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your current academic details.
                  </p>
                </div>

                <GraduationCap className="text-indigo-500" size={22} />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-indigo-500" size={20} />
                    <div>
                      <p className="text-xs text-slate-400">Program</p>
                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {profile.course}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-violet-500" size={20} />
                    <div>
                      <p className="text-xs text-slate-400">Batch</p>
                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {profile.batch}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <BookOpen size={20} />
            </div>
            <p className="mt-5 text-sm text-slate-500">Courses Completed</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">6</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={20} />
            </div>
            <p className="mt-5 text-sm text-slate-500">Assignments Done</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">32</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Award size={20} />
            </div>
            <p className="mt-5 text-sm text-slate-500">Certificates</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">4</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <ShieldCheck size={20} />
            </div>
            <p className="mt-5 text-sm text-slate-500">Attendance</p>
            <p className="mt-1 text-3xl font-bold text-slate-900">90%</p>
          </div>
        </section>

        <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-bold text-slate-900">About Me</h2>

              {editing ? (
                <textarea
                  value={profile.bio}
                  onChange={(event) =>
                    updateField('bio', event.target.value)
                  }
                  rows={4}
                  className="mt-3 w-full rounded-xl border border-indigo-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none focus:border-indigo-500 lg:min-w-600px"
                />
              ) : (
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  {profile.bio}
                </p>
              )}
            </div>

            <Link
              to="/courses"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore Courses
              <BookOpen size={17} />
            </Link>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}