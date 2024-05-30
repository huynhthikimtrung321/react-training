import { Checkbox, Input } from '..';

import './CardHeader.css';

export const CardHeader = () => {
  return (
    <div className="card-header wrapper">
      <Checkbox
        className="card-select-all"
        variant="select-all"
        isChecked={false}
        onChange={() => {}}
      />
      <Input
        value=""
        type="text"
        placeholder="What needs to be done?"
        onChange={() => {}}
        onKeyDown={() => {}}
      />
    </div>
  );
};
