import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Todo, type Category } from './todo';

interface TodoState {
  todos: Todo[];
}

const loadTodos = (): Todo[] => {
  try {
    const data = localStorage.getItem('todos');
    const parsed = data ? JSON.parse(data) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const initialState: TodoState = {
  todos: loadTodos(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'completed'>>) => {
      state.todos.push({
        ...action.payload,
        id: Date.now().toString(),
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    changeTodo: (state, action: PayloadAction<Todo>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.description = action.payload.description;
        todo.category = action.payload.category;
      }
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeAll: (state) => {
      state.todos = [];
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeByCategory: (state, action: PayloadAction<Category>) => {
      state.todos = state.todos.filter((t) => t.category !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, removeAll, removeByCategory, changeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
