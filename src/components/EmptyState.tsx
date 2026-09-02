type EmptyStateProps = {
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  icon?: string
}

function EmptyState({
  title = 'No data found',
  description = 'There is nothing to display here yet.',
  actionLabel,
  onAction,
  icon = '📭',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState
