import React from 'react';
import Header from 'components/Header';
import List from 'components/List';
import { List as ListProps } from 'components/List/types';

function App({ todos }: ListProps) {
  return (
    <div className='h-100 w-full flex items-center justify-center bg-teal-50 font-sans'>
      <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
        <Header />
        <List todos={todos} />
      </div>
    </div>
  );
}

export default App;
