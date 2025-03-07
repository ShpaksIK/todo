export type CategoryType = 'one' | 'two' | 'three' | 'four'

type StatusType = 'progress' | 'completed'

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: StatusType;
  category: CategoryType;
}

export type ITodos = Array<ITodo> | null

export interface ITodoCategories {
  one?: ITodos;
  two?: ITodos;
  three?: ITodos;
  four?: ITodos;
}
