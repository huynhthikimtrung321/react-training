import { Item, ItemData } from '../../type';
import { Checkbox, Input } from '..';

import './CardHeader.css';
import { KeyboardEvent, useState, ChangeEvent } from 'react';
import { service } from '../../service';

interface CardHeaderProps {
  items: Item[];
  setItems: (item: Item[]) => void;
  fetchItems: () => Promise<void>;
}

export const CardHeader = ({ items, fetchItems }: CardHeaderProps) => {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleClickAll = async () => {
    const currentIsChecked = !isChecked;

    const promises: Promise<unknown>[] = [];
    items.forEach(({ id, name }) =>
      promises.push(
        service.put({
          endpoint: 'tasks',
          id,
          body: { name, isCompleted: currentIsChecked },
        })
      )
    );
    await Promise.all(promises);
    await fetchItems();
    setIsChecked(currentIsChecked);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleInputSubmit = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    const item: ItemData = {
      name: value,
      isCompleted: false,
    };

    const { error } = await service.post<Item>({
      endpoint: 'tasks',
      body: item,
    });

    if (error) {
      return;
    }

    setValue('');
    await fetchItems();
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
        onKeyDown={handleInputSubmit}
      />
    </div>
  );
};
