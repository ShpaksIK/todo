export type Category =
  | 'urgent_important'
  | 'urgent_not_important'
  | 'important_not_urgent'
  | 'not_urgent_not_important';

export interface Todo {
  id: string;
  title: string;
  description: string;
  category: Category;
  completed: boolean;
}
