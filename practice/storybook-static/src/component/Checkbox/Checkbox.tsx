import './Checkbox.css';

interface CheckboxProps {
  isChecked: boolean,
  onChange: () => void,
}

export const Checkbox = ({
  isChecked,
  onChange,
  ...props

}: CheckboxProps) => {
  return (
    <input type="checkbox"
    className="item-checkbox"
    checked={isChecked}
    onChange={onChange}
    {...props}
    />
  )
}
