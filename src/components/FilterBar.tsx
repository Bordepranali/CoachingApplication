type FilterOption = {
  label: string
  value: string
}

type FilterBarProps = {
  label?: string
  options: FilterOption[]
  value?: string
  onChange?: (value: string) => void
}

function FilterBar({
  label = 'Filter',
  options,
  value = '',
  onChange,
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-3">
      <label className="whitespace-nowrap text-sm font-semibold text-slate-600">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      >
        <option value="">All</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterBar