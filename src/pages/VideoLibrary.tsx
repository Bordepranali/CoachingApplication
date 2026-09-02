import { useMemo, useState } from 'react'
import {
  BookOpen,
  Clock3,
  Play,
  Search,
  Star,
  Users,
  Video,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AppLayout from '../components/AppLayout'

type VideoItem = {
  id: number
  title: string
  subject: string
  instructor: string
  duration: string
  lessons: number
  views: number
  rating: number
  level: string
  description: string
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: 'Introduction to Data Science',
    subject: 'Data Science',
    instructor: 'Dr. Ananya Sharma',
    duration: '18:42',
    lessons: 12,
    views: 1240,
    rating: 4.9,
    level: 'Beginner',
    description:
      'Understand the fundamentals of data science, workflows and real-world applications.',
  },
  {
    id: 2,
    title: 'Python for Data Analysis',
    subject: 'Python Programming',
    instructor: 'Priya Kapoor',
    duration: '24:15',
    lessons: 18,
    views: 1860,
    rating: 4.8,
    level: 'Intermediate',
    description:
      'Learn how Python and popular libraries can be used for practical data analysis.',
  },
  {
    id: 3,
    title: 'Linear Regression Explained',
    subject: 'Machine Learning',
    instructor: 'Rahul Mehta',
    duration: '21:36',
    lessons: 14,
    views: 2140,
    rating: 4.9,
    level: 'Intermediate',
    description:
      'Learn linear regression with intuition, mathematics and practical examples.',
  },
  {
    id: 4,
    title: 'Excel Pivot Tables',
    subject: 'Data Analytics',
    instructor: 'Amit Verma',
    duration: '16:28',
    lessons: 10,
    views: 980,
    rating: 4.7,
    level: 'Beginner',
    description:
      'Create powerful summaries and analyze datasets using Excel pivot tables.',
  },
  {
    id: 5,
    title: 'Neural Networks Fundamentals',
    subject: 'Artificial Intelligence',
    instructor: 'Neha Singh',
    duration: '29:54',
    lessons: 16,
    views: 1720,
    rating: 4.8,
    level: 'Advanced',
    description:
      'Explore neurons, activation functions, forward propagation and neural network basics.',
  },
  {
    id: 6,
    title: 'React Components & Props',
    subject: 'Web Development',
    instructor: 'Vikram Joshi',
    duration: '22:10',
    lessons: 15,
    views: 1430,
    rating: 4.8,
    level: 'Intermediate',
    description:
      'Build reusable React components and understand props through practical examples.',
  },
  {
    id: 7,
    title: 'Data Visualization with Python',
    subject: 'Data Science',
    instructor: 'Dr. Ananya Sharma',
    duration: '26:18',
    lessons: 11,
    views: 1180,
    rating: 4.9,
    level: 'Intermediate',
    description:
      'Create meaningful charts and visualizations for exploring and presenting data.',
  },
  {
    id: 8,
    title: 'Classification Algorithms',
    subject: 'Machine Learning',
    instructor: 'Rahul Mehta',
    duration: '31:42',
    lessons: 17,
    views: 2050,
    rating: 4.9,
    level: 'Advanced',
    description:
      'Understand popular classification algorithms and how to choose between them.',
  },
]

export default function VideoLibrary() {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('All')
  const [level, setLevel] = useState('All')

  const subjects = useMemo(
    () => ['All', ...Array.from(new Set(videos.map((video) => video.subject)))],
    [],
  )

  const filteredVideos = useMemo(() => {
    const query = search.toLowerCase().trim()

    return videos.filter((video) => {
      const matchesSearch =
        !query ||
        video.title.toLowerCase().includes(query) ||
        video.subject.toLowerCase().includes(query) ||
        video.instructor.toLowerCase().includes(query)

      const matchesSubject =
        subject === 'All' || video.subject === subject

      const matchesLevel =
        level === 'All' || video.level === level

      return matchesSearch && matchesSubject && matchesLevel
    })
  }, [search, subject, level])

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <section className="bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-8 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-sm font-medium text-indigo-300">
                  Learning Resources
                </p>
                <h1 className="text-3xl font-bold sm:text-4xl">
                  Video Library
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                  Watch expert-led lessons and strengthen your concepts with
                  practical video content.
                </p>
              </div>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                <BookOpen size={18} />
                Explore Courses
              </Link>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Video size={21} />
              </div>
              <p className="text-sm text-slate-500">Total Videos</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {videos.length}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BookOpen size={21} />
              </div>
              <p className="text-sm text-slate-500">Subjects</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {subjects.length - 1}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Users size={21} />
              </div>
              <p className="text-sm text-slate-500">Total Views</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                {videos
                  .reduce((total, video) => total + video.views, 0)
                  .toLocaleString()}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Star size={21} />
              </div>
              <p className="text-sm text-slate-500">Average Rating</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">
                4.8
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-[1fr_200px_180px]">
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search videos..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-400 focus:bg-white"
                />
              </div>

              <select
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-400"
              >
                {subjects.map((item) => (
                  <option key={item} value={item}>
                    {item === 'All' ? 'All Subjects' : item}
                  </option>
                ))}
              </select>

              <select
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-400"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {filteredVideos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <Video size={42} className="mx-auto text-slate-300" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                No videos found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br from-indigo-600 via-violet-600 to-purple-700">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-indigo-600 shadow-xl transition group-hover:scale-110">
                      <Play size={27} fill="currentColor" />
                    </div>

                    <span className="absolute right-3 top-3 rounded-lg bg-black/50 px-2.5 py-1 text-xs font-semibold text-white">
                      {video.duration}
                    </span>

                    <span className="absolute left-3 top-3 rounded-lg bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                      {video.level}
                    </span>
                  </div>

                  <div className="space-y-4 p-5">
                    <div>
                      <p className="text-xs font-semibold text-indigo-600">
                        {video.subject}
                      </p>
                      <h2 className="mt-1 min-h-14 text-lg font-bold text-slate-900">
                        {video.title}
                      </h2>
                    </div>

                    <p className="min-h-12 text-sm leading-6 text-slate-500">
                      {video.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">
                        {video.instructor
                          .split(' ')
                          .map((name) => name[0])
                          .slice(0, 2)
                          .join('')}
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          Instructor
                        </p>
                        <p className="text-sm font-semibold text-slate-800">
                          {video.instructor}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-y border-slate-100 py-3">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock3 size={15} />
                        <span className="text-xs">
                          {video.lessons} lessons
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Users size={15} />
                        <span className="text-xs">
                          {video.views.toLocaleString()} views
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={15} fill="currentColor" />
                        <span className="text-xs font-semibold">
                          {video.rating}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        window.alert(`Playing: ${video.title}`)
                      }
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
                    >
                      <Play size={17} fill="currentColor" />
                      Watch Video
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </AppLayout>
  )
}