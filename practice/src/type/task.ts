import { FILTER_LABEL, FILTER_VALUE } from '../constant';

const { LABEL_ACTIVE, LABEL_ALL, LABEL_COMPLETED } = FILTER_LABEL;
const { VALUE_ACTIVE, VALUE_ALL, VALUE_COMPLETED } = FILTER_VALUE;

export interface Item {
  id: string;
  content: string;
  isCompleted: boolean;
}

type FilterLabel =
  | typeof LABEL_ALL
  | typeof LABEL_ACTIVE
  | typeof LABEL_COMPLETED;
type FilterValue =
  | typeof VALUE_ALL
  | typeof VALUE_ACTIVE
  | typeof VALUE_COMPLETED;

export type Filter = {
  label: FilterLabel;
  value: FilterValue;
  isActive: boolean;
};
