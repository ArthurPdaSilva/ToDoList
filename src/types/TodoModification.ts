import TodoType from './TodoType';

export default interface TodoModification {
  remove: (id: number) => void;
  todos?: TodoType[];
}
