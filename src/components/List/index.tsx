import Todo from 'components/Todo';
import { List as ListProps } from './types';

const List = ({ todos }: ListProps) => (
  <div>
    {todos.map((todo) => (
      <Todo {...todo} />
    ))}
  </div>
);

export default List;
