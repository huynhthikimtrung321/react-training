import { CardFooter, CardHeader, CardItem } from '..';

import './CardTodo.css';
import '../styles/main.css';
import { Filter, Item } from '../../type';
import { useEffect, useState } from 'react';
import { FILTER_LABEL, FILTER_VALUE } from '../../constant';
import { service } from '../../service';

const { VALUE_ACTIVE, VALUE_ALL, VALUE_COMPLETED } = FILTER_VALUE;
const { LABEL_ACTIVE, LABEL_ALL, LABEL_COMPLETED } = FILTER_LABEL;

export const CardTodo = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filters, setFilters] = useState<Filter[]>([
    { label: LABEL_ALL, value: VALUE_ALL, isActive: true },
    { label: LABEL_ACTIVE, value: VALUE_ACTIVE, isActive: false },
    { label: LABEL_COMPLETED, value: VALUE_COMPLETED, isActive: false },
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await service.get<Item[]>({ endpoint: 'tasks' });
      setItems(data ?? []);
    })();
  }, []);

  const handleClick = async (index: number) => {
    const newItems = [...items];
    const target = newItems[index];
    target.isCompleted = !target.isCompleted;

    const { error } = await service.put({
      endpoint: 'tasks',
      body: target,
      id: target.id,
    });
    if (error) {
      return;
    }

    await fetchItems();
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
          fetchItems={fetchItems}
        />
      ));
  };

  const fetchItems = async () => {
    const { data } = await service.get<Item[]>({ endpoint: 'tasks' });
    if (data) {
      setItems(data);
    }
  };

  return (
    <div>
      <CardHeader items={items} setItems={setItems} fetchItems={fetchItems} />
      <ul className="list-item">{renderCardItems()}</ul>
      <CardFooter
        items={items}
        filters={filters}
        setFilters={setFilters}
        fetchItems={fetchItems}
      />
    </div>
  );
};
