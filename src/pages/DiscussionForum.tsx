import { useMemo, useState } from 'react'
import AppLayout from '../components/AppLayout'

type Discussion = {
  id: number
  title: string
  description: string
  subject: string
  author: string
  replies: number
  views: number
  time: string
  solved: boolean
}

const discussions: Discussion[] = [
  {
    id: 1,
    title: 'How do I solve this rotational motion problem?',
    description:
      'I am confused about which formula to use for this mechanics question.',
    subject: 'Physics',
    author: 'Aarav Singh',
    replies: 8,
    views: 124,
    time: '2 hours ago',
    solved: false,
  },
  {
    id: 2,
    title: 'Doubt in differentiation chain rule',
    description:
      'Can someone explain the chain rule with a simple example?',
    subject: 'Mathematics',
    author: 'Neha Patil',
    replies: 5,
    views: 87,
    time: '5 hours ago',
    solved: true,
  },
  {
    id: 3,
    title: 'Organic chemistry reaction mechanism',
    description:
      'Need help understanding the reaction mechanism from today’s class.',
    subject: 'Chemistry',
    author: 'Rohan Sharma',
    replies: 11,
    views: 156,
    time: 'Yesterday',
    solved: false,
  },
  {
    id: 4,
    title: 'Best way to prepare for monthly physics test?',
    description:
      'Looking for suggestions on important topics and revision strategy.',
    subject: 'Physics',
    author: 'Priya Joshi',
    replies: 6,
    views: 102,
    time: 'Yesterday',
    solved: true,
  },
  {
    id: 5,
    title: 'Integration question from assignment',
    description:
      'I need help with question number 7 from the latest assignment.',
    subject: 'Mathematics',
    author: 'Kabir Mehta',
    replies: 3,
    views: 64,
    time: '2 days ago',
    solved: false,
  },
]

const subjects = ['All', 'Physics', 'Mathematics', 'Chemistry']

function DiscussionForum() {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('All')
  const [showDoubtForm, setShowDoubtForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const filteredDiscussions = useMemo(() => {
    const query = search.toLowerCase().trim()

    return discussions.filter((discussion) => {
      const matchesSearch =
        !query ||
        discussion.title.toLowerCase().includes(query) ||
        discussion.description.toLowerCase().includes(query) ||
        discussion.author.toLowerCase().includes(query)

      const matchesSubject =
        subject === 'All' || discussion.subject === subject

      return matchesSearch && matchesSubject
    })
  }, [search, subject])

  const handleSubmitDoubt = () => {
    setSubmitted(true)
    setShowDoubtForm(false)
  }

  return (
    <AppLayout title="Discussion Forum">
      <div className="space-y-8">
        {/* Header */}
        <section>
          <p className="text-sm font-semibold text-indigo-600">
            Student Community
          </p>

          <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Discussion Forum
              </h1>

              <p className="mt-2 max-w-2xl text-slate-500">
                Ask questions, discuss concepts and learn together with
                teachers and fellow students.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowDoubtForm(true)
                setSubmitted(false)
              }}
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              + Raise a Doubt
            </button>
          </div>
        </section>

        {/* Success message */}
        {submitted && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
            Your doubt has been submitted successfully. A teacher or
            student can reply soon.
          </div>
        )}

        {/* Search + filters */}
        <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <label
                htmlFor="discussion-search"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Search discussions
              </label>

              <input
                id="discussion-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search questions, topics or students..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
            {subjects.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSubject(item)}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold ${
                  subject === item
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Total Discussions</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">
              128
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Questions Solved</p>
            <p className="mt-2 text-2xl font-bold text-emerald-600">
              94
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">My Questions</p>
            <p className="mt-2 text-2xl font-bold text-indigo-600">
              7
            </p>
          </div>
        </section>

        {/* Discussions */}
        <section>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Recent Discussions
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Browse questions and join the conversation.
              </p>
            </div>

            <span className="text-sm font-medium text-slate-500">
              {filteredDiscussions.length} results
            </span>
          </div>

          {filteredDiscussions.length === 0 ? (
            <div className="mt-5 rounded-2xl bg-white px-6 py-14 text-center shadow-sm ring-1 ring-slate-200">
              <div className="text-5xl">💬</div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No discussions found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another search or subject.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setSubject('All')
                }}
                className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              {filteredDiscussions.map((discussion) => (
                <article
                  key={discussion.id}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md sm:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                          {discussion.subject}
                        </span>

                        {discussion.solved ? (
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                            ✓ Solved
                          </span>
                        ) : (
                          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                            Open
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-slate-900">
                        {discussion.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {discussion.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
                        <span>By {discussion.author}</span>
                        <span>{discussion.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 border-t border-slate-100 pt-4 text-center lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
                      <div>
                        <p className="text-lg font-bold text-slate-900">
                          {discussion.replies}
                        </p>
                        <p className="text-xs text-slate-400">Replies</p>
                      </div>

                      <div>
                        <p className="text-lg font-bold text-slate-900">
                          {discussion.views}
                        </p>
                        <p className="text-xs text-slate-400">Views</p>
                      </div>

                      <button
                        type="button"
                        className="rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-200"
                      >
                        Open
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Community CTA */}
        <section className="rounded-3xl bg-indigo-600 p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-200">
                Need help?
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Cannot find the answer?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-100">
                Raise your own doubt and get help from teachers or
                fellow students.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowDoubtForm(true)
                setSubmitted(false)
              }}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
            >
              Raise a Doubt
            </button>
          </div>
        </section>
      </div>

      {/* Raise Doubt Modal */}
      {showDoubtForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
          <div
            role="dialog"
            aria-modal="true"
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  Student Support
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Raise a Doubt
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowDoubtForm(false)}
                className="rounded-xl px-3 py-2 text-2xl text-slate-500 hover:bg-slate-100"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form
              className="space-y-5 p-5 sm:p-6"
              onSubmit={(event) => {
                event.preventDefault()
                handleSubmitDoubt()
              }}
            >
              <div>
                <label
                  htmlFor="doubt-subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject
                </label>

                <select
                  id="doubt-subject"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select subject
                  </option>
                  <option value="Physics">Physics</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Chemistry">Chemistry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="doubt-title"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Question title
                </label>

                <input
                  id="doubt-title"
                  type="text"
                  required
                  placeholder="e.g. Doubt in Newton's second law"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="doubt-description"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Describe your doubt
                </label>

                <textarea
                  id="doubt-description"
                  rows={5}
                  required
                  placeholder="Explain your question in detail..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="doubt-file"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Attach image or document
                </label>

                <input
                  id="doubt-file"
                  type="file"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm"
                />

                <p className="mt-1 text-xs text-slate-400">
                  File upload is a frontend placeholder for now.
                </p>
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowDoubtForm(false)}
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  Submit Doubt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AppLayout>
  )
}

export default DiscussionForum