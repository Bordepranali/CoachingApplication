import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import {
  BookOpen,
  Download,
  FileText,
  Filter,
  FolderOpen,
  MoreVertical,
  Plus,
  Search,
  Trash2,
  Upload,
  X,
} from 'lucide-react'
import  AppLayout from '../components/AppLayout'

type Material = {
  id: number
  title: string
  subject: string
  type: string
  size: string
  uploadedBy: string
  date: string
  downloads: number
}

const initialMaterials: Material[] = [
  {
    id: 1,
    title: 'Python Programming Notes',
    subject: 'Python Programming',
    type: 'PDF',
    size: '2.4 MB',
    uploadedBy: 'Dr. Ananya Sharma',
    date: '28 Aug 2026',
    downloads: 124,
  },
  {
    id: 2,
    title: 'Machine Learning Complete Notes',
    subject: 'Machine Learning',
    type: 'PDF',
    size: '5.8 MB',
    uploadedBy: 'Rahul Mehta',
    date: '26 Aug 2026',
    downloads: 98,
  },
  {
    id: 3,
    title: 'Data Science Important Questions',
    subject: 'Data Science',
    type: 'DOCX',
    size: '1.2 MB',
    uploadedBy: 'Priya Kapoor',
    date: '24 Aug 2026',
    downloads: 76,
  },
  {
    id: 4,
    title: 'Statistics Formula Sheet',
    subject: 'Data Science',
    type: 'PDF',
    size: '860 KB',
    uploadedBy: 'Dr. Ananya Sharma',
    date: '22 Aug 2026',
    downloads: 145,
  },
  {
    id: 5,
    title: 'Excel Data Analytics Guide',
    subject: 'Data Analytics',
    type: 'PDF',
    size: '3.1 MB',
    uploadedBy: 'Amit Verma',
    date: '20 Aug 2026',
    downloads: 64,
  },
  {
    id: 6,
    title: 'AI Fundamentals Presentation',
    subject: 'Artificial Intelligence',
    type: 'PPTX',
    size: '4.6 MB',
    uploadedBy: 'Neha Singh',
    date: '18 Aug 2026',
    downloads: 52,
  },
]

export default function StudyMaterial() {
  const [materials, setMaterials] = useState(initialMaterials)
  const [search, setSearch] = useState('')
  const [subjectFilter, setSubjectFilter] = useState('All Subjects')
  const [typeFilter, setTypeFilter] = useState('All Types')
  const [showAddModal, setShowAddModal] = useState(false)
  const [openMenu, setOpenMenu] = useState<number | null>(null)

  const [form, setForm] = useState({
    title: '',
    subject: '',
    type: 'PDF',
    size: '',
  })

  const subjects = [
    'All Subjects',
    ...Array.from(new Set(materials.map((item) => item.subject))),
  ]

  const types = [
    'All Types',
    ...Array.from(new Set(materials.map((item) => item.type))),
  ]

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const matchesSearch =
        material.title.toLowerCase().includes(search.toLowerCase()) ||
        material.subject.toLowerCase().includes(search.toLowerCase())

      const matchesSubject =
        subjectFilter === 'All Subjects' ||
        material.subject === subjectFilter

      const matchesType =
        typeFilter === 'All Types' || material.type === typeFilter

      return matchesSearch && matchesSubject && matchesType
    })
  }, [materials, search, subjectFilter, typeFilter])

  const totalDownloads = materials.reduce(
    (sum, material) => sum + material.downloads,
    0,
  )

  function handleAddMaterial(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.title || !form.subject || !form.size) {
      return
    }

    const newMaterial: Material = {
      id: Date.now(),
      title: form.title,
      subject: form.subject,
      type: form.type,
      size: form.size,
      uploadedBy: 'Pranali',
      date: 'Today',
      downloads: 0,
    }

    setMaterials((current) => [newMaterial, ...current])
    setForm({
      title: '',
      subject: '',
      type: 'PDF',
      size: '',
    })
    setShowAddModal(false)
  }

  function deleteMaterial(id: number) {
    setMaterials((current) =>
      current.filter((material) => material.id !== id),
    )
    setOpenMenu(null)
  }

  function downloadMaterial(id: number) {
    setMaterials((current) =>
      current.map((material) =>
        material.id === id
          ? { ...material, downloads: material.downloads + 1 }
          : material,
      ),
    )
    setOpenMenu(null)
  }

  return (
    <AppLayout>
      <div className="min-h-screen bg-slate-50">
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <BookOpen className="h-4 w-4" />
                  Learning Resources
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                  Study Material
                </h1>
                <p className="mt-1 text-slate-500">
                  Access notes, presentations, guides and other learning resources.
                </p>
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Material
              </button>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <FolderOpen className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Resources
                </span>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {materials.length}
              </p>
              <p className="text-sm text-slate-500">Total materials</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Formats
                </span>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {new Set(materials.map((item) => item.type)).size}
              </p>
              <p className="text-sm text-slate-500">File types</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <Download className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Activity
                </span>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {totalDownloads}
              </p>
              <p className="text-sm text-slate-500">Total downloads</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Subjects
                </span>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">
                {new Set(materials.map((item) => item.subject)).size}
              </p>
              <p className="text-sm text-slate-500">Covered subjects</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search study material..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative">
                  <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <select
                    value={subjectFilter}
                    onChange={(event) => setSubjectFilter(event.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-9 text-sm outline-none focus:border-blue-500 sm:w-48"
                  >
                    {subjects.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <select
                  value={typeFilter}
                  onChange={(event) => setTypeFilter(event.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 sm:w-40"
                >
                  {types.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredMaterials.map((material) => (
              <div
                key={material.id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                        {material.type}
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenMenu(
                          openMenu === material.id ? null : material.id,
                        )
                      }
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                      <MoreVertical className="h-5 w-5" />
                    </button>

                    {openMenu === material.id && (
                      <div className="absolute right-0 z-10 mt-1 w-36 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                        <button
                          onClick={() => downloadMaterial(material.id)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                        <button
                          onClick={() => deleteMaterial(material.id)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="mt-5 line-clamp-2 text-lg font-bold text-slate-900">
                  {material.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {material.subject}
                </p>

                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-500">
                  <div className="flex justify-between">
                    <span>Uploaded by</span>
                    <span className="font-medium text-slate-700">
                      {material.uploadedBy}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date</span>
                    <span className="font-medium text-slate-700">
                      {material.date}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size</span>
                    <span className="font-medium text-slate-700">
                      {material.size}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => downloadMaterial(material.id)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                  <Download className="h-4 w-4" />
                  Download Material
                </button>
              </div>
            ))}
          </div>

          {filteredMaterials.length === 0 && (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <FolderOpen className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No material found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </main>

        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Add Study Material
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Add a resource to the learning library.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddModal(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleAddMaterial} className="space-y-4 p-6">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Material Title
                  </label>
                  <input
                    value={form.title}
                    onChange={(event) =>
                      setForm({ ...form, title: event.target.value })
                    }
                    placeholder="Enter material title"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Subject
                  </label>
                  <input
                    value={form.subject}
                    onChange={(event) =>
                      setForm({ ...form, subject: event.target.value })
                    }
                    placeholder="Enter subject"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      File Type
                    </label>
                    <select
                      value={form.type}
                      onChange={(event) =>
                        setForm({ ...form, type: event.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    >
                      <option>PDF</option>
                      <option>DOCX</option>
                      <option>PPTX</option>
                      <option>XLSX</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      File Size
                    </label>
                    <input
                      value={form.size}
                      onChange={(event) =>
                        setForm({ ...form, size: event.target.value })
                      }
                      placeholder="e.g. 2.5 MB"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-dashed border-blue-200 bg-blue-50 p-5 text-center">
                  <Upload className="mx-auto h-7 w-7 text-blue-600" />
                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    File upload placeholder
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Backend file storage can be connected later.
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Add Material
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  )
}