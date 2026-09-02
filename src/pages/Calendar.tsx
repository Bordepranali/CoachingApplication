import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Plus,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

type EventType = 'Class' | 'Assignment' | 'Quiz' | 'Exam'

type CalendarEvent = {
  id: number
  date: string
  time: string
  title: string
  subject: string
  type: EventType
  location: string
  instructor: string
}

const events: CalendarEvent[] = [
  {
    id: 1,
    date: '2026-09-01',
    time: '10:00 AM',
    title: 'Data Science Class',
    subject: 'Data Science',
    type: 'Class',
    location: 'Room 204',
    instructor: 'Dr. Ananya Sharma',
  },
  {
    id: 2,
    date: '2026-09-02',
    time: '11:30 AM',
    title: 'DBMS Class',
    subject: 'DBMS',
    type: 'Class',
    location: 'Room 105',
    instructor: 'Rahul Mehta',
  },
  {
    id: 3,
    date: '2026-09-03',
    time: '09:30 AM',
    title: 'Machine Learning Class',
    subject: 'Machine Learning',
    type: 'Class',
    location: 'Lab 2',
    instructor: 'Priya Kapoor',
  },
  {
    id: 4,
    date: '2026-09-04',
    time: '12:00 PM',
    title: 'Cloud Computing Class',
    subject: 'Cloud Computing',
    type: 'Class',
    location: 'Room 302',
    instructor: 'Amit Verma',
  },
  {
    id: 5,
    date: '2026-09-05',
    time: '05:00 PM',
    title: 'Data Science Assignment',
    subject: 'Data Science',
    type: 'Assignment',
    location: 'Online',
    instructor: 'Dr. Ananya Sharma',
  },
  {
    id: 6,
    date: '2026-09-08',
    time: '10:00 AM',
    title: 'DBMS Quiz',
    subject: 'DBMS',
    type: 'Quiz',
    location: 'Online',
    instructor: 'Rahul Mehta',
  },
  {
    id: 7,
    date: '2026-09-10',
    time: '09:30 AM',
    title: 'Machine Learning Quiz',
    subject: 'Machine Learning',
    type: 'Quiz',
    location: 'Online',
    instructor: 'Priya Kapoor',
  },
  {
    id: 8,
    date: '2026-09-15',
    time: '10:00 AM',
    title: 'Mid Semester Examination',
    subject: 'All Subjects',
    type: 'Exam',
    location: 'Main Examination Hall',
    instructor: 'Academic Department',
  },
]

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getTypeClasses(type: EventType) {
  if (type === 'Class') {
    return 'bg-indigo-50 text-indigo-700 border-indigo-200'
  }

  if (type === 'Assignment') {
    return 'bg-amber-50 text-amber-700 border-amber-200'
  }

  if (type === 'Quiz') {
    return 'bg-emerald-50 text-emerald-700 border-emerald-200'
  }

  return 'bg-red-50 text-red-700 border-red-200'
}

function getTypeDot(type: EventType) {
  if (type === 'Class') {
    return 'bg-indigo-500'
  }

  if (type === 'Assignment') {
    return 'bg-amber-500'
  }

  if (type === 'Quiz') {
    return 'bg-emerald-500'
  }

  return 'bg-red-500'
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 8, 1),
  )
  const [selectedDate, setSelectedDate] = useState('2026-09-01')
  const [typeFilter, setTypeFilter] = useState('All Events')

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const calendarDays = Array.from(
    { length: Math.ceil((firstDay + daysInMonth) / 7) * 7 },
    (_, index) => {
      const dayNumber = index - firstDay + 1
      return dayNumber >= 1 && dayNumber <= daysInMonth
        ? dayNumber
        : null
    },
  )

  const visibleEvents = useMemo(() => {
    return events.filter(
      (event) =>
        typeFilter === 'All Events' || event.type === typeFilter,
    )
  }, [typeFilter])

  const selectedEvents = visibleEvents.filter(
    (event) => event.date === selectedDate,
  )

  const monthEvents = visibleEvents.filter((event) => {
    const eventDate = new Date(`${event.date}T00:00:00`)
    return (
      eventDate.getFullYear() === year &&
      eventDate.getMonth() === month
    )
  })

  function formatDate(day: number) {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(
      day,
    ).padStart(2, '0')}`
  }

  function changeMonth(direction: number) {
    setCurrentDate(new Date(year, month + direction, 1))
  }

  function goToToday() {
    const today = new Date(2026, 8, 1)
    setCurrentDate(today)
    setSelectedDate('2026-09-01')
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <section className="overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 text-white shadow-xl sm:p-8">
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
                  <CalendarDays size={24} />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  Academic Schedule
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Calendar
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Keep track of your classes, assignments, quizzes, and
                important academic events.
              </p>
            </div>

            <button
              onClick={goToToday}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <CalendarDays size={17} />
              Today
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Classes', '4', 'bg-indigo-50 text-indigo-600'],
            ['Assignments', '1', 'bg-amber-50 text-amber-600'],
            ['Quizzes', '2', 'bg-emerald-50 text-emerald-600'],
            ['Exams', '1', 'bg-red-50 text-red-600'],
          ].map(([label, value, classes]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${classes}`}
              >
                <CalendarDays size={20} />
              </div>
              <p className="mt-5 text-sm font-medium text-slate-500">
                {label}
              </p>
              <p className="mt-1 text-3xl font-bold text-slate-900">
                {value}
              </p>
            </div>
          ))}
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => changeMonth(-1)}
                className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
                aria-label="Previous month"
              >
                <ChevronLeft size={19} />
              </button>

              <div className="min-w-180px text-center">
                <h2 className="text-xl font-bold text-slate-900">
                  {monthNames[month]} {year}
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  {monthEvents.length} scheduled events
                </p>
              </div>

              <button
                onClick={() => changeMonth(1)}
                className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
                aria-label="Next month"
              >
                <ChevronRight size={19} />
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <select
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500"
              >
                <option>All Events</option>
                <option>Class</option>
                <option>Assignment</option>
                <option>Quiz</option>
                <option>Exam</option>
              </select>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                <Plus size={17} />
                Add Event
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50">
            {weekDays.map((day) => (
              <div
                key={day}
                className="border-r border-slate-100 px-2 py-3 text-center text-xs font-bold text-slate-500 last:border-r-0 sm:text-sm"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => {
              const dateKey = day ? formatDate(day) : ''
              const dayEvents = visibleEvents.filter(
                (event) => event.date === dateKey,
              )
              const isSelected = selectedDate === dateKey
              const isToday = dateKey === '2026-09-01'

              return (
                <button
                  key={`${dateKey}-${index}`}
                  disabled={!day}
                  onClick={() => day && setSelectedDate(dateKey)}
                  className={`min-h-95px border-r border-b border-slate-100 p-2 text-left transition sm:min-h-125px sm:p-3 ${
                    day ? 'hover:bg-slate-50' : 'bg-slate-50/50'
                  } ${isSelected ? 'bg-indigo-50/60' : ''}`}
                >
                  {day && (
                    <>
                      <div className="flex items-center justify-between">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold sm:text-sm ${
                            isToday
                              ? 'bg-indigo-600 text-white'
                              : isSelected
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-slate-600'
                          }`}
                        >
                          {day}
                        </span>

                        {dayEvents.length > 0 && (
                          <span className="text-[10px] font-semibold text-slate-400">
                            {dayEvents.length}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 space-y-1.5">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`hidden rounded-lg border px-2 py-1.5 text-[10px] font-semibold sm:block ${getTypeClasses(
                              event.type,
                            )}`}
                          >
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`h-1.5 w-1.5 shrink-0 rounded-full ${getTypeDot(
                                  event.type,
                                )}`}
                              />
                              <span className="truncate">
                                {event.title}
                              </span>
                            </div>
                          </div>
                        ))}

                        {dayEvents.length > 0 && (
                          <div className="flex gap-1 sm:hidden">
                            {dayEvents.map((event) => (
                              <span
                                key={event.id}
                                className={`h-1.5 w-1.5 rounded-full ${getTypeDot(
                                  event.type,
                                )}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </button>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Upcoming Events
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your scheduled academic activities.
                </p>
              </div>

              <CalendarDays className="text-indigo-500" size={22} />
            </div>

            <div className="mt-6 space-y-3">
              {monthEvents.slice(0, 6).map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center"
                >
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-white shadow-sm">
                    <span className="text-[10px] font-bold uppercase text-slate-400">
                      {monthNames[
                        new Date(`${event.date}T00:00:00`).getMonth()
                      ].slice(0, 3)}
                    </span>
                    <span className="text-lg font-bold text-slate-900">
                      {new Date(`${event.date}T00:00:00`).getDate()}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-slate-900">
                        {event.title}
                      </h3>
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${getTypeClasses(
                          event.type,
                        )}`}
                      >
                        {event.type}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {event.subject}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 size={13} />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Selected Day
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {selectedDate}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {selectedEvents.length > 0 ? (
                selectedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${getTypeClasses(
                          event.type,
                        )}`}
                      >
                        {event.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {event.time}
                      </span>
                    </div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      {event.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {event.subject}
                    </p>

                    <div className="mt-4 space-y-2 text-xs text-slate-500">
                      <p className="flex items-center gap-2">
                        <MapPin size={14} />
                        {event.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock3 size={14} />
                        {event.instructor}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl bg-slate-50 p-8 text-center">
                  <CalendarDays
                    className="mx-auto text-slate-300"
                    size={34}
                  />
                  <p className="mt-3 font-semibold text-slate-700">
                    No events scheduled
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Enjoy your free day!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  )
}