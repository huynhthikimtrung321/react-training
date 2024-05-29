import './Checkbox.css';

interface CheckboxProps {
  isChecked: boolean,
  onChange: () => void,
  variant?: 'primary' | 'secondary';
}

export const Checkbox = ({
  isChecked,
  onChange,
  variant,
  ...props

}: CheckboxProps) => {
  const mode = variant === 'primary' ? 'checkbox-primary' : 'checkbox-secondary';
  return (
    <input type="checkbox"
    className={[mode].join(' ')}
    checked={isChecked}
    onChange={onChange}
    {...props}
    />
  )
}
