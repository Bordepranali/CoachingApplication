import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Bell,
  Check,
  CheckCheck,
  ChevronRight,
  Clock3,
  FileText,
  GraduationCap,
  Megaphone,
  Search,
  Trash2,
  Users,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type Notification = {
  id: number
  title: string
  message: string
  type: 'Assignment' | 'Quiz' | 'Class' | 'Announcement' | 'System'
  time: string
  read: boolean
  important: boolean
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: 'Assignment deadline approaching',
    message:
      'Your Mathematics assignment is due tomorrow. Make sure to submit it before the deadline.',
    type: 'Assignment',
    time: '10 minutes ago',
    read: false,
    important: true,
  },
  {
    id: 2,
    title: 'New quiz available',
    message:
      'A new Data Structures quiz has been published. You can attempt it from the Quizzes section.',
    type: 'Quiz',
    time: '1 hour ago',
    read: false,
    important: false,
  },
  {
    id: 3,
    title: 'Class scheduled for today',
    message:
      'Your Mathematics class with Dr. Ananya Sharma starts at 10:00 AM today.',
    type: 'Class',
    time: '3 hours ago',
    read: true,
    important: true,
  },
  {
    id: 4,
    title: 'New study material uploaded',
    message:
      'New Operating Systems notes and reference material have been added to your course.',
    type: 'System',
    time: 'Yesterday',
    read: false,
    important: false,
  },
  {
    id: 5,
    title: 'Important announcement',
    message:
      'The monthly assessment schedule has been updated. Please check your calendar for details.',
    type: 'Announcement',
    time: 'Yesterday',
    read: true,
    important: true,
  },
  {
    id: 6,
    title: 'Assignment evaluated',
    message:
      'Your DBMS assignment has been evaluated. Open Assignments to view your marks and feedback.',
    type: 'Assignment',
    time: '2 days ago',
    read: true,
    important: false,
  },
  {
    id: 7,
    title: 'Attendance reminder',
    message:
      'Your current attendance is 91%. Keep attending classes regularly to maintain your attendance.',
    type: 'System',
    time: '3 days ago',
    read: true,
    important: false,
  },
  {
    id: 8,
    title: 'New class announcement',
    message:
      'Your teacher has posted an announcement regarding the upcoming practical session.',
    type: 'Announcement',
    time: '4 days ago',
    read: true,
    important: false,
  },
]

function getIcon(type: Notification['type']) {
  switch (type) {
    case 'Assignment':
      return FileText
    case 'Quiz':
      return GraduationCap
    case 'Class':
      return Clock3
    case 'Announcement':
      return Megaphone
    default:
      return Bell
  }
}

function getIconClasses(type: Notification['type']) {
  switch (type) {
    case 'Assignment':
      return 'bg-blue-100 text-blue-600'
    case 'Quiz':
      return 'bg-violet-100 text-violet-600'
    case 'Class':
      return 'bg-emerald-100 text-emerald-600'
    case 'Announcement':
      return 'bg-amber-100 text-amber-600'
    default:
      return 'bg-slate-100 text-slate-600'
  }
}

export default function Notifications() {
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications)
  const [filter, setFilter] = useState<
    'All' | 'Unread' | 'Important'
  >('All')
  const [search, setSearch] = useState('')

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length

  const importantCount = notifications.filter(
    (notification) => notification.important,
  ).length

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesFilter =
        filter === 'All' ||
        (filter === 'Unread' && !notification.read) ||
        (filter === 'Important' && notification.important)

      const query = search.toLowerCase()

      const matchesSearch =
        notification.title.toLowerCase().includes(query) ||
        notification.message.toLowerCase().includes(query) ||
        notification.type.toLowerCase().includes(query)

      return matchesFilter && matchesSearch
    })
  }, [filter, notifications, search])

  function markAsRead(id: number) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification,
      ),
    )
  }

  function markAllAsRead() {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  function removeNotification(id: number) {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id),
    )
  }

  function clearAll() {
    setNotifications([])
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="bg-linear-to-br from-slate-950 via-indigo-950 to-blue-900 px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <Bell size={25} />
                </div>

                <p className="mb-2 text-sm font-medium text-blue-200">
                  Stay updated
                </p>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Notifications
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                  Keep track of assignments, classes, quizzes, announcements
                  and important updates from CoachLearn.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={markAllAsRead}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <CheckCheck size={17} />
                  Mark all as read
                </button>

                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  <Trash2 size={17} />
                  Clear all
                </button>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Bell size={20} />
                </div>
                <span className="text-2xl font-bold text-slate-900">
                  {notifications.length}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Total notifications
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Clock3 size={20} />
                </div>
                <span className="text-2xl font-bold text-slate-900">
                  {unreadCount}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Unread notifications
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                  <Megaphone size={20} />
                </div>
                <span className="text-2xl font-bold text-slate-900">
                  {importantCount}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-500">
                Important updates
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search notifications..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto">
                {(['All', 'Unread', 'Important'] as const).map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFilter(item)}
                      className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                        filter === item
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => {
                const Icon = getIcon(notification.type)

                return (
                  <div
                    key={notification.id}
                    className={`group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5 ${
                      notification.read
                        ? 'border-slate-200'
                        : 'border-blue-200 bg-blue-50/30'
                    }`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${getIconClasses(
                          notification.type,
                        )}`}
                      >
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-semibold text-slate-900">
                                {notification.title}
                              </h3>

                              {!notification.read && (
                                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-bold text-blue-700">
                                  NEW
                                </span>
                              )}

                              {notification.important && (
                                <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-700">
                                  Important
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs font-medium text-slate-400">
                              {notification.type} · {notification.time}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            {!notification.read && (
                              <button
                                type="button"
                                onClick={() =>
                                  markAsRead(notification.id)
                                }
                                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
                              >
                                <Check size={15} />
                                Mark read
                              </button>
                            )}

                            <button
                              type="button"
                              onClick={() =>
                                removeNotification(notification.id)
                              }
                              className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                              aria-label="Delete notification"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>

                        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
                          {notification.message}
                        </p>

                        {notification.type === 'Assignment' && (
                          <Link
                            to="/assignments"
                            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                          >
                            View assignments
                            <ChevronRight size={16} />
                          </Link>
                        )}

                        {notification.type === 'Quiz' && (
                          <Link
                            to="/quizzes"
                            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                          >
                            View quizzes
                            <ChevronRight size={16} />
                          </Link>
                        )}

                        {notification.type === 'Class' && (
                          <Link
                            to="/calendar"
                            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
                          >
                            Open calendar
                            <ChevronRight size={16} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                  <Bell size={25} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  No notifications found
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  You are all caught up or no notifications match your
                  current filter.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 p-5 text-white shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Users size={19} />
                  <span className="text-sm font-semibold text-blue-100">
                    Stay connected
                  </span>
                </div>
                <h2 className="mt-2 text-xl font-bold">
                  Never miss an important learning update.
                </h2>
                <p className="mt-1 text-sm text-blue-100">
                  Check your calendar, assignments and study material regularly.
                </p>
              </div>

              <Link
                to="/calendar"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Open Calendar
                <ChevronRight size={17} />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  )
}