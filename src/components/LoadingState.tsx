type LoadingStateProps = {
  message?: string
  fullPage?: boolean
}

function LoadingState({
  message = 'Loading...',
  fullPage = false,
}: LoadingStateProps) {
  return (
    <div
      className={`flex items-center justify-center ${
        fullPage ? 'min-h-[60vh]' : 'py-16'
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />

        <p className="mt-4 text-sm font-medium text-slate-500">
          {message}
        </p>
      </div>
    </div>
  )
}

export default LoadingState