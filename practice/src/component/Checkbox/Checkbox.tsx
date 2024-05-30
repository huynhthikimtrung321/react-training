import './Checkbox.css';

interface CheckboxProps {
  isChecked: boolean;
  className?: string;
  variant?: 'primary' | 'select-all';
  onChange: () => void;
}

export const Checkbox = ({
  isChecked,
  className,
  variant,
  onChange,
}: CheckboxProps) => {
  const mode =
    variant === 'primary' ? 'checkbox-primary' : 'checkbox-select-all';
  return (
    <input
      type="checkbox"
      className={[mode, className].join(' ')}
      checked={isChecked}
      onChange={onChange}
    />
  );
};
