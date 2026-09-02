import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  PlayCircle,
  Target,
  TrendingUp,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

const upcomingClasses = [
  {
    subject: 'Machine Learning',
    topic: 'Classification Algorithms',
    time: '10:00 AM',
    date: 'Today',
    duration: '1 hr 30 min',
  },
  {
    subject: 'Statistics',
    topic: 'Probability Distributions',
    time: '2:30 PM',
    date: 'Today',
    duration: '1 hr',
  },
  {
    subject: 'Python Programming',
    topic: 'Object Oriented Programming',
    time: '11:00 AM',
    date: 'Tomorrow',
    duration: '1 hr 30 min',
  },
]

const courses = [
  {
    title: 'Complete Data Science',
    instructor: 'Dr. Ananya Sharma',
    progress: 78,
    lessons: '32/42 lessons',
    icon: 'DS',
  },
  {
    title: 'Machine Learning Masterclass',
    instructor: 'Rahul Mehta',
    progress: 64,
    lessons: '24/38 lessons',
    icon: 'ML',
  },
  {
    title: 'Python Programming',
    instructor: 'Priya Kapoor',
    progress: 91,
    lessons: '41/45 lessons',
    icon: 'PY',
  },
]

const assignments = [
  {
    title: 'Statistical Analysis Report',
    subject: 'Statistics',
    due: '2 Sep 2026',
    priority: 'High',
  },
  {
    title: 'Machine Learning Model',
    subject: 'Machine Learning',
    due: '5 Sep 2026',
    priority: 'Medium',
  },
  {
    title: 'Python Data Analysis',
    subject: 'Python',
    due: '8 Sep 2026',
    priority: 'Low',
  },
]

const notifications = [
  {
    title: 'New study material added',
    text: 'Machine Learning module 4 notes are now available.',
    time: '20 min ago',
  },
  {
    title: 'Assignment deadline approaching',
    text: 'Statistical Analysis Report is due soon.',
    time: '2 hrs ago',
  },
  {
    title: 'New class scheduled',
    text: 'Python Programming class has been scheduled for tomorrow.',
    time: 'Yesterday',
  },
]

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-6 p-4 sm:p-6 lg:p-8">
        <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-indigo-700 to-violet-700 p-6 text-white shadow-xl sm:p-8 lg:p-10">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-violet-300/10 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-indigo-100 backdrop-blur">
                <Target size={16} />
                Keep learning, keep growing
              </div>

              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                Good morning, Pranali 👋
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
                You are making great progress. Continue your courses and stay
                on track with your upcoming assignments.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/student-courses"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  Continue Learning
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/calendar"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <CalendarDays size={17} />
                  View Calendar
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-390px lg:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <TrendingUp size={20} className="text-indigo-200" />
                <p className="mt-3 text-2xl font-bold">78%</p>
                <p className="mt-1 text-xs text-indigo-100">Course Progress</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <CalendarDays size={20} className="text-indigo-200" />
                <p className="mt-3 text-2xl font-bold">92%</p>
                <p className="mt-1 text-xs text-indigo-100">Attendance</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <Award size={20} className="text-indigo-200" />
                <p className="mt-3 text-2xl font-bold">86%</p>
                <p className="mt-1 text-xs text-indigo-100">Avg. Score</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 size={20} className="text-indigo-200" />
                <p className="mt-3 text-2xl font-bold">12</p>
                <p className="mt-1 text-xs text-indigo-100">Completed</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm xl:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Upcoming Classes
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your next scheduled learning sessions
                </p>
              </div>

              <Link
                to="/calendar"
                className="hidden items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 sm:flex"
              >
                View all
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {upcomingClasses.map((item) => (
                <div
                  key={`${item.subject}-${item.time}`}
                  className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <BookOpen size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.subject}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.topic}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 pl-16 sm:pl-0">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {item.time}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.date} · {item.duration}
                      </p>
                    </div>

                    <Link
                      to="/calendar"
                      className="rounded-xl bg-slate-100 p-2.5 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Notifications
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Latest updates
                </p>
              </div>

              <Link
                to="/notifications"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                See all
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {notifications.map((item) => (
                <div key={item.title} className="p-5">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Bell size={17} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                      <p className="mt-2 text-[11px] font-medium text-slate-400">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                My Courses
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Continue where you left off
              </p>
            </div>

            <Link
              to="/student-courses"
              className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all courses
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                    {course.icon}
                  </div>

                  <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-indigo-600">
                    {course.progress}%
                  </span>
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {course.instructor}
                </p>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-slate-500">
                      {course.lessons}
                    </span>
                    <span className="font-semibold text-slate-700">
                      {course.progress}%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-indigo-600"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                <Link
                  to="/student-courses"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-indigo-600 hover:text-white"
                >
                  <PlayCircle size={17} />
                  Continue Course
                </Link>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Upcoming Assignments
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Stay on top of your deadlines
                </p>
              </div>

              <Link
                to="/assignments"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View all
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {assignments.map((assignment) => (
                <div
                  key={assignment.title}
                  className="flex items-center justify-between gap-4 p-5"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <FileText size={18} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-slate-900">
                        {assignment.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        {assignment.subject} · Due {assignment.due}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      assignment.priority === 'High'
                        ? 'bg-red-50 text-red-600'
                        : assignment.priority === 'Medium'
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-emerald-50 text-emerald-600'
                    }`}
                  >
                    {assignment.priority}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Learning Activity
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your recent learning performance
                </p>
              </div>

              <TrendingUp size={22} className="text-indigo-600" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5">
                <p className="text-sm font-medium text-indigo-700">
                  Study Time
                </p>
                <p className="mt-2 text-3xl font-bold text-indigo-900">
                  18.5h
                </p>
                <p className="mt-1 text-xs text-indigo-600">
                  This week
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm font-medium text-emerald-700">
                  Quiz Accuracy
                </p>
                <p className="mt-2 text-3xl font-bold text-emerald-900">
                  86%
                </p>
                <p className="mt-1 text-xs text-emerald-600">
                  Last 5 quizzes
                </p>
              </div>

              <div className="rounded-2xl bg-violet-50 p-5">
                <p className="text-sm font-medium text-violet-700">
                  Lessons Completed
                </p>
                <p className="mt-2 text-3xl font-bold text-violet-900">
                  97
                </p>
                <p className="mt-1 text-xs text-violet-600">
                  This month
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50 p-5">
                <p className="text-sm font-medium text-amber-700">
                  Current Streak
                </p>
                <p className="mt-2 text-3xl font-bold text-amber-900">
                  7 days
                </p>
                <p className="mt-1 text-xs text-amber-600">
                  Keep it going!
                </p>
              </div>
            </div>

            <Link
              to="/quizzes"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <Award size={17} />
              View Quiz Performance
            </Link>
          </section>
        </div>

        <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-600">
                <Clock3 size={19} />
                <span className="text-sm font-semibold">
                  Keep your momentum
                </span>
              </div>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Ready for your next learning session?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Explore study materials, practice with quizzes and continue
                your courses to improve your performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/study-material"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                <BookOpen size={17} />
                Study Material
              </Link>

              <Link
                to="/quizzes"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Take a Quiz
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}