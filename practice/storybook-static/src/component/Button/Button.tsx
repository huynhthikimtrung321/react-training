import './Button.css';

interface ButtonProps {
  label?: string;
  variant?: 'ghost' | 'outline';
  borderColor?: string;
  size?: 'small' | 'medium';
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant = 'ghost',
  size = 'medium',
  borderColor,
  label,
  icon,
  ...props
}: ButtonProps) => {
  const mode = variant === 'ghost' ? 'button--ghost' : 'button--outline';
  return (
    <button
      type="button"
      className={['button-border-default', `button--${size}`, mode].join(' ')}
      style={{ borderColor }}
      {...props}
    >
      {icon ? icon : label}
    </button>
  );
};
