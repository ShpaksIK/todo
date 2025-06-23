import { Category } from '../redux/todo';

export const getCategoryTitle = (category: Category): string => {
  switch (category) {
    case 'urgent_important':
      return 'Срочно и важно';
    case 'urgent_not_important':
      return 'Срочно и не важно';
    case 'important_not_urgent':
      return 'Важно и не срочно';
    case 'not_urgent_not_important':
      return 'Не срочно и не важно';
    default:
      return '';
  }
};
