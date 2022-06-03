import React from 'react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Click me',
  styles: 'color-green-600',
  onClick: () => {},
};

export const AddTodo = Template.bind({});
AddTodo.args = {
  label: 'Agregar',
  styles:
    'flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500',
  onClick: () => {},
};

export const FinishTodo = Template.bind({});
FinishTodo.args = {
  label: 'Finalizar tarea',
  styles:
    'flex-no-shrink p-2 ml-2 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600',
  onClick: () => {},
};
