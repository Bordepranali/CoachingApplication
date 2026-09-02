type StatCardProps = {
  title: string
  value: string | number
  description?: string
  icon?: string
  trend?: string
  trendType?: 'positive' | 'negative' | 'neutral'
}

function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  trendType = 'neutral',
}: StatCardProps) {
  const trendClass =
    trendType === 'positive'
      ? 'text-emerald-600'
      : trendType === 'negative'
        ? 'text-red-600'
        : 'text-slate-500'

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-3 text-3xl font-bold text-slate-900">
            {value}
          </p>
        </div>

        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
            {icon}
          </div>
        )}
      </div>

      {description && (
        <p className="mt-2 text-xs text-slate-400">
          {description}
        </p>
      )}

      {trend && (
        <p className={`mt-3 text-sm font-semibold ${trendClass}`}>
          {trend}
        </p>
      )}
    </div>
  )
}

export default StatCard