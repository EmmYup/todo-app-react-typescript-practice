import Button from 'components/Button';

const buttonProps = {
  label: 'Agregar',
  styles:
    'flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500',
  onClick: () => {},
};

const Header = () => (
  <div className='mb-4'>
    <h1 className='text-grey-darkest'>Todo App</h1>
    <div className='flex mt-4'>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
        placeholder='Agregar Tarea'
      />
      <Button {...buttonProps} />
    </div>
  </div>
);

export default Header;
