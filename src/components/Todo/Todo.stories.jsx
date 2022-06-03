import React from 'react';
import Todo from './index.tsx';

export default {
  title: 'Components/Todo',
  component: Todo,
};

const Template = (args) => <Todo {...args} />;

export const Pending = Template.bind({});
Pending.args = {
  label: 'Regar las plantas',
  status: 'pending',
};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Pending.args,
  status: 'pinned',
};

export const Done = Template.bind({});
Done.args = {
  ...Pending.args,
  status: 'done',
};
