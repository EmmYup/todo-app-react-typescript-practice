import { Todo as TodoProps } from './types';
import { FaRegHeart, FaHeart, FaTrash } from 'react-icons/fa';
import Button from 'components/Button';

const ButtonProps = {
  label: 'Finalizar',
  styles:
    'flex-no-shrink p-2 ml-2 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600',
  onClick: () => {},
};

const Todo = ({ label, status }: TodoProps) => (
  <div className='flex mb-4 items-center justify-between'>
    <p
      className={`w-fulll ${
        status === 'done' ? 'line-through text-green-600' : 'text-grey-darkest'
      }`}
    >
      {label}
    </p>
    <div>
      {status !== 'done' && (
        <>
          <Button {...ButtonProps} />
          <FaTrash className='ml-2 cursor-pointer' />
        </>
      )}
      {status === 'pending' && <FaRegHeart />}
      {status === 'pinned' && <FaHeart />}
    </div>
  </div>
);

export default Todo;
