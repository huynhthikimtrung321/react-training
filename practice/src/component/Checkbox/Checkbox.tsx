import './Checkbox.css';

export interface CheckboxProps {
  isChecked: boolean;
  className?: string;
  variant?: 'primary' | 'select-all';
  onChange: () => void;
  onClick: () => void;
}

export const Checkbox = ({
  isChecked,
  className,
  variant,
  onChange,
  onClick,
}: CheckboxProps) => {
  const mode =
    variant === 'primary' ? 'checkbox-primary' : 'checkbox-select-all';
  return (
    <input
      type="checkbox"
      className={[mode, className].join(' ')}
      checked={isChecked}
      onChange={onChange}
      onClick={onClick}
    />
  );
};
