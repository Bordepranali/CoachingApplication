import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Mail,
  Phone,
  Users,
  GraduationCap,
  Clock,
} from 'lucide-react'
import  AppLayout from '../components/AppLayout'

type Teacher = {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  experience: string
  students: number
  courses: number
  rating: number
  status: 'Active' | 'Inactive'
  bio: string
  education: string
}

const teachers: Record<string, Teacher> = {
  '1': {
    id: 1,
    name: 'Dr. Ananya Sharma',
    email: 'ananya.sharma@coachlearn.com',
    phone: '+91 98765 43210',
    subject: 'Data Science',
    experience: '8 Years',
    students: 186,
    courses: 4,
    rating: 4.9,
    status: 'Active',
    bio: 'Experienced educator specializing in data science, statistics, Python and practical analytics.',
    education: 'Ph.D. in Computer Science',
  },
  '2': {
    id: 2,
    name: 'Rahul Mehta',
    email: 'rahul.mehta@coachlearn.com',
    phone: '+91 98234 56781',
    subject: 'Machine Learning',
    experience: '6 Years',
    students: 142,
    courses: 3,
    rating: 4.8,
    status: 'Active',
    bio: 'Machine learning instructor focused on practical model building and real-world applications.',
    education: 'M.Tech. in Artificial Intelligence',
  },
  '3': {
    id: 3,
    name: 'Priya Kapoor',
    email: 'priya.kapoor@coachlearn.com',
    phone: '+91 97654 32108',
    subject: 'Python Programming',
    experience: '5 Years',
    students: 214,
    courses: 3,
    rating: 4.9,
    status: 'Active',
    bio: 'Python educator helping students build strong programming fundamentals through hands-on learning.',
    education: 'M.Sc. in Computer Science',
  },
  '4': {
    id: 4,
    name: 'Amit Verma',
    email: 'amit.verma@coachlearn.com',
    phone: '+91 98123 45670',
    subject: 'Data Analytics',
    experience: '7 Years',
    students: 98,
    courses: 2,
    rating: 4.7,
    status: 'Active',
    bio: 'Data analytics professional and trainer specializing in Excel, dashboards and business intelligence.',
    education: 'MBA in Business Analytics',
  },
  '5': {
    id: 5,
    name: 'Neha Singh',
    email: 'neha.singh@coachlearn.com',
    phone: '+91 98987 65432',
    subject: 'Artificial Intelligence',
    experience: '6 Years',
    students: 124,
    courses: 3,
    rating: 4.8,
    status: 'Active',
    bio: 'AI instructor with a focus on neural networks, intelligent systems and emerging AI technologies.',
    education: 'M.Tech. in Artificial Intelligence',
  },
  '6': {
    id: 6,
    name: 'Vikram Joshi',
    email: 'vikram.joshi@coachlearn.com',
    phone: '+91 97531 86420',
    subject: 'Web Development',
    experience: '4 Years',
    students: 87,
    courses: 2,
    rating: 4.6,
    status: 'Inactive',
    bio: 'Web development mentor specializing in modern frontend technologies and responsive applications.',
    education: 'B.E. in Computer Engineering',
  },
}

const classes = [
  {
    title: 'Advanced Data Science',
    date: '02 Sep 2026',
    time: '10:00 AM - 11:30 AM',
    students: 42,
  },
  {
    title: 'Statistics & Probability',
    date: '03 Sep 2026',
    time: '12:00 PM - 01:30 PM',
    students: 36,
  },
  {
    title: 'Python for Data Analysis',
    date: '05 Sep 2026',
    time: '02:00 PM - 03:30 PM',
    students: 48,
  },
]

export default function TeacherDetails() {
  const { id } = useParams()
  const teacher = id ? teachers[id] : undefined

  if (!teacher) {
    return (
      <AppLayout>
        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <GraduationCap className="h-8 w-8 text-slate-400" />
            </div>
            <h1 className="mt-5 text-2xl font-bold text-slate-900">
              Teacher not found
            </h1>
            <p className="mt-2 text-slate-500">
              The teacher profile you are looking for does not exist.
            </p>
            <Link
              to="/teachers"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Teachers
            </Link>
          </div>
        </div>
      </AppLayout>
    )
  }

  const initials = teacher.name
    .split(' ')
    .map((name) => name[0])
    .slice(0, 2)
    .join('')

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            to="/teachers"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Teachers
          </Link>

          <section className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-lg">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl font-bold ring-1 ring-white/20">
                    {initials}
                  </div>

                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                        {teacher.subject}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          teacher.status === 'Active'
                            ? 'bg-emerald-400/20 text-emerald-100'
                            : 'bg-white/10 text-white/70'
                        }`}
                      >
                        {teacher.status}
                      </span>
                    </div>

                    <h1 className="text-3xl font-bold sm:text-4xl">
                      {teacher.name}
                    </h1>

                    <p className="mt-2 text-sm text-blue-100">
                      {teacher.education}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-xs font-medium uppercase tracking-wide text-blue-100">
                    Instructor Rating
                  </p>
                  <p className="mt-1 text-3xl font-bold">
                    {teacher.rating}
                    <span className="ml-1 text-base font-medium text-blue-100">
                      / 5
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users className="h-5 w-5" />
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {teacher.students}
              </p>
              <p className="text-sm text-slate-500">Students</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <BookOpen className="h-5 w-5" />
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {teacher.courses}
              </p>
              <p className="text-sm text-slate-500">Courses</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Clock className="h-5 w-5" />
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {teacher.experience}
              </p>
              <p className="text-sm text-slate-500">Experience</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <GraduationCap className="h-5 w-5" />
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {teacher.rating}
              </p>
              <p className="text-sm text-slate-500">Rating</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      About Instructor
                    </h2>
                    <p className="text-sm text-slate-500">
                      Professional overview
                    </p>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {teacher.bio}
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Upcoming Classes
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Scheduled sessions by this instructor
                    </p>
                  </div>
                  <CalendarDays className="h-5 w-5 text-blue-600" />
                </div>

                <div className="mt-5 space-y-3">
                  {classes.map((item) => (
                    <div
                      key={item.title}
                      className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                          <span>{item.date}</span>
                          <span>{item.time}</span>
                          <span>{item.students} students</span>
                        </div>
                      </div>

                      <Link
                        to="/calendar"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 ring-1 ring-slate-200 hover:bg-blue-50"
                      >
                        View Calendar
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900">
                  Contact Information
                </h2>

                <div className="mt-5 space-y-4">
                  <a
                    href={`mailto:${teacher.email}`}
                    className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                  >
                    <Mail className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-slate-400">Email</p>
                      <p className="mt-1 break-all text-sm font-medium text-slate-700">
                        {teacher.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${teacher.phone}`}
                    className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                  >
                    <Phone className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="text-xs text-slate-400">Phone</p>
                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {teacher.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900">
                  Quick Actions
                </h2>

                <div className="mt-4 space-y-2">
                  <Link
                    to="/courses"
                    className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    View Courses
                  </Link>

                  <Link
                    to="/students"
                    className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <Users className="h-5 w-5 text-violet-600" />
                    View Students
                  </Link>

                  <Link
                    to="/calendar"
                    className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <CalendarDays className="h-5 w-5 text-emerald-600" />
                    Open Calendar
                  </Link>
                </div>
              </section>

              <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <h2 className="font-bold text-emerald-900">
                    Teaching Status
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-emerald-800">
                  {teacher.status === 'Active'
                    ? 'This instructor is currently active and available for scheduled classes.'
                    : 'This instructor is currently inactive.'}
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  )
}