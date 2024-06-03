import { Filter, Item } from '../../type';
import { Button } from '..';
import './CardFooter.css';
import { Dispatch, MouseEvent } from 'react';

interface CardFooterProps {
  items: Item[];
  filters: Filter[];
  setFilters: Dispatch<React.SetStateAction<Filter[]>>;
}

export const CardFooter = ({
  items = [],
  filters,
  setFilters,
}: CardFooterProps) => {
  const activeItemsLength = items.filter(
    item => item.isCompleted === false
  ).length;

  const handleClickFilter = (event: MouseEvent<HTMLButtonElement>) => {
    const filterBtn = event.target as HTMLButtonElement;
    const filterValue = filterBtn.value;
    const newFilters = [...filters];
    newFilters.forEach(filter =>
      filter.value === filterValue
        ? (filter.isActive = true)
        : (filter.isActive = false)
    );
    setFilters(newFilters);
  };

  return (
    <section className="card-footer">
      <p className="todo-item-left">{activeItemsLength} items left</p>
      <div>
        {filters.map(({ label, value, isActive }, index) => (
          <Button
            key={index}
            variant="outline"
            size="small"
            value={value}
            label={label}
            isActive={isActive}
            onClick={handleClickFilter}
          />
        ))}
      </div>
      <Button
        variant="ghost"
        hover="underline"
        size="small"
        label="Clear completed"
      />
    </section>
  );
};
