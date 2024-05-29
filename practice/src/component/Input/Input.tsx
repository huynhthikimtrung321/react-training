import './Input.css'

interface InputProps {
  value: string;
  placeholder?: string;
  type: string;
  onChange: () => void;
  onKeyDown: () => void;
}

export const Input = ({
  value,
  placeholder,
  type,
  onChange,
  onKeyDown,
...props

}: InputProps) => {
  return (
    <input
      className="input-new-todo"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...props}
    />
  )
}
