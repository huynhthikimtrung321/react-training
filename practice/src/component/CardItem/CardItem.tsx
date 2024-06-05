import { Item, ItemData } from '../../type';
import { Button, Checkbox, Input } from '..';
import './CardItem.css';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { service } from '../../service';

interface CardItemProps {
  item: Item;
  onChange: () => void;
  fetchItems: () => Promise<void>;
}

export const CardItem = ({ item, onChange, fetchItems }: CardItemProps) => {
  const { id, name, isCompleted } = item;
  const [value, setValue] = useState(name);
  const [isEdit, setIsEdit] = useState(false);
  const completedLabelClass = isCompleted ? 'completed-label' : '';

  const handleToggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleInputSubmit = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    const updatedItem: ItemData = {
      name: value,
      isCompleted: item.isCompleted,
    };

    const { error } = await service.put<Item>({
      endpoint: 'tasks',
      body: updatedItem,
      id,
    });

    if (error) {
      return;
    }

    await fetchItems();
    setIsEdit(false);
  };

  const handleDelete = async () => {
    const isConfirmed = confirm('Are you sure to delete this task?');
    if (!isConfirmed) {
      return;
    }

    const { error } = await service.delete({ endpoint: 'tasks', id });

    if (error) {
      return;
    }

    await fetchItems();
  };

  return (
    <li className="cart-item" onDoubleClick={handleToggleEdit}>
      {isEdit ? (
        <Input
          value={value}
          type="text"
          autofocus={true}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
          onBlur={() => setIsEdit(false)}
        />
      ) : (
        <>
          <Checkbox
            variant="primary"
            isChecked={isCompleted}
            onChange={onChange}
          />
          <p className={`cart-label ${completedLabelClass}`}>{name}</p>
          <Button
            variant="ghost"
            hover="color"
            size="medium"
            icon="x"
            color="tertiary"
            className="button-delete"
            onClick={handleDelete}
          />
        </>
      )}
    </li>
  );
};
