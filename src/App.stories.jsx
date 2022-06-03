import React from 'react';
import App from './App.tsx';
import { todos } from 'components/List/List.stories.jsx';

export default {
  title: 'Pages/Main',
  component: App,
};

const Template = (args) => <App {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  todos,
};
