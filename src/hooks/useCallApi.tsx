import { useEffect, useState } from 'react';
import api from '../api';
import { Todo } from 'components/Todo/types';

type State = {
  todos: Todo[];
  isLoading: boolean;
  error: string;
};

const useCallApi = () => {
  const initialState: State = {
    todos: [],
    isLoading: true,
    error: null,
  };
  const [state, setState] = useState(initialState);

  const fetchData = async () => {
    try {
      const { data: todos } = await api.getAll();
      setState({ ...state, todos, isLoading: false });
    } catch (error) {
      console.log(error.response.data);
      setState({
        ...state,
        error: error.response.data.message,
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

export default useCallApi;
