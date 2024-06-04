import { Item } from '../../type';
import { Checkbox, Input } from '..';

import './CardHeader.css';
import { useState, ChangeEvent } from 'react';

interface CardHeaderProps {
  items: Item[];
  setItems: (item: Item[]) => void;
}

export const CardHeader = ({ items, setItems }: CardHeaderProps) => {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleClickAll = () => {
    setIsChecked(!isChecked);

    const newItems = [...items];
    newItems.forEach(item => (item.isCompleted = !isChecked));
    setItems(newItems);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="card-header wrapper">
      <Checkbox
        className="card-select-all"
        variant="select-all"
        isChecked={isChecked}
        onChange={handleClickAll}
      />
      <Input
        value={value}
        type="text"
        placeholder="What needs to be done?"
        onChange={handleInputChange}
        onKeyDown={() => {}} // Implement later, need api service
      />
    </div>
  );
};
