import { Metadata } from 'next';
import TodoListContainer from '@/app/_modules/todo/components/todo-container/TodoContainer';
import AppLayout from '@/app/_modules/common/components/layout/AppLayout';

export const metadata: Metadata = {
  title: "Hyejin's Project | 나의 할 일 ✅",
  description: '나의 할 일을 추가해보세요 ✅',
};

export default function TodoListPage() {
  return (
    <AppLayout>
      <TodoListContainer />
    </AppLayout>
  );
}
