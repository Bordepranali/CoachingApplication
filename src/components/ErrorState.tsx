type ErrorStateProps = {
  title?: string
  message?: string
  onRetry?: () => void
}

function ErrorState({
  title = 'Something went wrong',
  message = 'We could not load this information. Please try again.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-2xl">
        ⚠️
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorState