import { ChangeEvent } from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  isChecked: boolean;
  className?: string;
  variant?: 'primary' | 'select-all';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
