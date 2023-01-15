interface IInputLoginProps {
  type?: string
  label: string
  value: string

  onChange: (newValue: string) => void
  onPressEnter?: () => void
}

export const InputLogin = ({
  type,
  label,
  value,
  onChange,
  onPressEnter,
}: IInputLoginProps) => {
  return (
    <label>
      <span>{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) =>
          e.key === 'Enter' ? onPressEnter && onPressEnter() : undefined
        }
      />
    </label>
  )
}
