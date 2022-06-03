import React from 'react';
import List from './index.tsx';

export default {
  title: 'Components/List',
  component: List,
};

export const todos = [
  { label: 'Regar las plantas', status: 'pending' },
  { label: 'Darle comida a las mascotas', status: 'pending' },
  { label: 'Sacar a pasear a los perros', status: 'pending' },
  { label: 'Sacar la basura', status: 'pinned' },
  { label: 'Lavar los platos', status: 'done' },
];

const Template = (args) => <List {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  todos,
};
