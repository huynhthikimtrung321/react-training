import { CardFooter, CardHeader, CardItem } from '..';

import './CardTodo.css';
import '../styles/main.css';
import { Filter, Item } from '../../type';
import { useState } from 'react';
import { FILTER_LABEL, FILTER_VALUE } from '../../constant';

const { VALUE_ACTIVE, VALUE_ALL, VALUE_COMPLETED } = FILTER_VALUE;
const { LABEL_ACTIVE, LABEL_ALL, LABEL_COMPLETED } = FILTER_LABEL;

export const CardTodo = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: '1',
      content: 'Do homework',
      isCompleted: false,
    },
    {
      id: '2',
      content: 'Learn Maths',
      isCompleted: true,
    },
  ]);
  const [filters, setFilters] = useState<Filter[]>([
    { label: LABEL_ALL, value: VALUE_ALL, isActive: true },
    { label: LABEL_ACTIVE, value: VALUE_ACTIVE, isActive: false },
    { label: LABEL_COMPLETED, value: VALUE_COMPLETED, isActive: false },
  ]);

  const handleClick = (index: number) => {
    const newItems = [...items];
    newItems[index].isCompleted = !newItems[index].isCompleted;
    setItems(newItems);
  };

  const renderCardItems = () => {
    const filter = filters.find(filter => filter.isActive)?.value;
    return items
      .filter(item => {
        switch (filter) {
          case VALUE_ALL: {
            return item;
          }
          case VALUE_ACTIVE: {
            return item.isCompleted === false;
          }
          case VALUE_COMPLETED: {
            return item.isCompleted === true;
          }
          default: {
            throw new Error('No filter case found!');
          }
        }
      })
      .map((item, index) => (
        <CardItem
          key={item.id}
          item={item}
          onChange={() => handleClick(index)}
        />
      ));
  };

  return (
    <div>
      <CardHeader items={items} setItems={setItems} />
      {renderCardItems()}
      <CardFooter items={items} filters={filters} setFilters={setFilters} />
    </div>
  );
};
