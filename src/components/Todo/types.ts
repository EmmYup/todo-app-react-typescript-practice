export type Status = 'pending' | 'pinned' | 'done';

export type Todo = {
  label: string;
  status: Status;
};
