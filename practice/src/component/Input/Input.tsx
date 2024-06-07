import { ChangeEvent, KeyboardEvent } from 'react';
import './Input.css';

interface InputProps {
  value: string;
  type: string;
  placeholder?: string;
  autofocus?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

export const Input = ({
  value,
  placeholder,
  type,
  autofocus = false,
  onChange,
  onKeyDown,
  onBlur,
}: InputProps) => {
  return (
    <input
      className="input-new-todo"
      type={type}
      placeholder={placeholder}
      value={value}
      autoFocus={autofocus}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};
