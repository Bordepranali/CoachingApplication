import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Mail,
  Search,
  Users,
} from 'lucide-react'
import AppLayout from '../components/AppLayout'

const teachers = [
  {
    id: 1,
    name: 'Dr. Ananya Sharma',
    email: 'ananya.sharma@coachlearn.com',
    subject: 'Mathematics',
    experience: '10 Years',
    students: 248,
    status: 'Active',
    initials: 'AS',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    email: 'rahul.mehta@coachlearn.com',
    subject: 'Physics',
    experience: '8 Years',
    students: 192,
    status: 'Active',
    initials: 'RM',
  },
  {
    id: 3,
    name: 'Priya Kapoor',
    email: 'priya.kapoor@coachlearn.com',
    subject: 'Chemistry',
    experience: '7 Years',
    students: 176,
    status: 'Active',
    initials: 'PK',
  },
  {
    id: 4,
    name: 'Amit Verma',
    email: 'amit.verma@coachlearn.com',
    subject: 'Biology',
    experience: '6 Years',
    students: 154,
    status: 'Active',
    initials: 'AV',
  },
  {
    id: 5,
    name: 'Neha Singh',
    email: 'neha.singh@coachlearn.com',
    subject: 'English',
    experience: '5 Years',
    students: 138,
    status: 'Active',
    initials: 'NS',
  },
  {
    id: 6,
    name: 'Vikram Joshi',
    email: 'vikram.joshi@coachlearn.com',
    subject: 'Computer Science',
    experience: '9 Years',
    students: 121,
    status: 'Inactive',
    initials: 'VJ',
  },
]

function Teachers() {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('All Subjects')

  const subjects = [
    'All Subjects',
    ...Array.from(new Set(teachers.map((teacher) => teacher.subject))),
  ]

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesSearch =
        teacher.name.toLowerCase().includes(search.toLowerCase()) ||
        teacher.email.toLowerCase().includes(search.toLowerCase())

      const matchesSubject =
        subject === 'All Subjects' || teacher.subject === subject

      return matchesSearch && matchesSubject
    })
  }, [search, subject])

  const activeTeachers = teachers.filter(
    (teacher) => teacher.status === 'Active',
  ).length

  const totalStudents = teachers.reduce(
    (total, teacher) => total + teacher.students,
    0,
  )

  return (
    <AppLayout title="Teachers">
      <div className="space-y-6">
        <section className="rounded-3xl bg-linear-to-r from-indigo-600 to-violet-600 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-100">
                Faculty Management
              </p>

              <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
                Teachers
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
                View faculty members, subjects, experience and assigned
                students.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-sm text-indigo-100">Active Faculty</p>
              <p className="mt-1 text-2xl font-bold">{activeTeachers}</p>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Users size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Total Teachers</p>
                <p className="text-2xl font-bold text-slate-900">
                  {teachers.length}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <BookOpen size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Subjects</p>
                <p className="text-2xl font-bold text-slate-900">
                  {subjects.length - 1}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                <Users size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">Assigned Students</p>
                <p className="text-2xl font-bold text-slate-900">
                  {totalStudents}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search teachers by name or email..."
                className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <select
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 md:w-56"
            >
              {subjects.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </section>

        {filteredTeachers.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <Users className="mx-auto text-slate-300" size={42} />

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              No teachers found
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or subject filter.
            </p>
          </div>
        ) : (
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-lg font-bold text-indigo-700">
                      {teacher.initials}
                    </div>

                    <div>
                      <h2 className="font-bold text-slate-900">
                        {teacher.name}
                      </h2>

                      <span
                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          teacher.status === 'Active'
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {teacher.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail size={17} className="text-slate-400" />
                    <span className="truncate">{teacher.email}</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <div>
                      <p className="text-xs text-slate-500">Subject</p>
                      <p className="mt-1 font-semibold text-slate-800">
                        {teacher.subject}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-slate-500">Experience</p>
                      <p className="mt-1 font-semibold text-slate-800">
                        {teacher.experience}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3">
                    <span className="text-sm text-slate-500">
                      Assigned Students
                    </span>

                    <span className="font-bold text-indigo-600">
                      {teacher.students}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/teachers/${teacher.id}`}
                  className="mt-5 block rounded-xl bg-indigo-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  View Teacher
                </Link>
              </div>
            ))}
          </section>
        )}
      </div>
    </AppLayout>
  )
}

export default Teachers