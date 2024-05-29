import { Checkbox } from "../Checkbox/Checkbox"
import './CartItem.css'

interface CartItemProps {
  value: string,
  isCompleted: boolean,
  onClear: () => void
}

export const CartItem = ({
  value,
  isCompleted,
  onClear,
  ...props
}: CartItemProps) => {
  const completedLabelClass = isCompleted ? 'completed-label': '';

  return (
    <li className="cart-item" {...props}>
      <Checkbox isChecked={isCompleted} onChange={function (): void {} } />
      <p className={`cart-label ${completedLabelClass}`}>{value}</p>
    </li>
  );
}
