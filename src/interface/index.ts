type CategoryType = 'one' | 'two' | 'three' | 'four'

export interface ITodo {
  id: number;
  title: string;
  description: string;
  category: CategoryType;
}

export interface ITodos {
  todos: Array<ITodo>;
}

export interface ICategory {
  category: CategoryType;
  todos: Array<ITodo>;
}

export interface ITodoCategories {
  category: CategoryType;
  todos: Array<ITodo>;
}