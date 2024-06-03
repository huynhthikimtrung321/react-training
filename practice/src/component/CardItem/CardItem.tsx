import { Item } from '../../type';
import { Checkbox } from '..';
import './CardItem.css';

interface CardItemProps {
  item: Item;
  onChange: () => void;
}

export const CardItem = ({ item, onChange }: CardItemProps) => {
  const { content, isCompleted } = item;
  const completedLabelClass = isCompleted ? 'completed-label' : '';

  return (
    <li className="cart-item">
      <Checkbox variant="primary" isChecked={isCompleted} onChange={onChange} />
      <p className={`cart-label ${completedLabelClass}`}>{content}</p>
    </li>
  );
};
