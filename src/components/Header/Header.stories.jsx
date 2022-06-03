import React from 'react';
import Header from './index.tsx';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
