'use client';

import React, { useState } from 'react';
import * as S from './styled';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo, getTodos, TodoRow } from 'actions/todoActions';
import Input from '@/app/_modules/common/components/form/input/Input';

import Button from '@/app/_modules/common/components/button/button/Button';
import TodoItem from '../todo-item/TodoItem';
import Loading from '@/app/_modules/common/components/loading/Loading';

const TodoContainer = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [newlyCreatedTodoId, setNewlyCreatedTodoId] = useState<number | null>(null);

  const todosQuery = useQuery({
    queryKey: ['todos', searchInput],
    queryFn: () => getTodos({ searchInput }),
  });

  const createTodoMutation = useMutation({
    mutationFn: async () => {
      const newTodo = await createTodo({
        title: '새 할 일',
        completed: false,
      });
      return newTodo;
    },
    onSuccess: (newTodo) => {
      // 새로 생성된 할일의 ID를 저장
      setNewlyCreatedTodoId(newTodo.id);
      todosQuery.refetch();

      // ⬇️ 다른 페이지에서 쿼리 데이터 갱신시, queryClient 를 통해 캐시 데이터 갱신
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });

  return (
    <S.TodoContainer>
      <S.TodoTitle>나의 할 일 ✅</S.TodoTitle>
      <S.TodoContent>
        <Input
          id='todo-search'
          placeholder='할 일을 검색하세요.'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          isSearch
        />

        <S.TodoList>
          {todosQuery?.data &&
            todosQuery?.data?.map((todo: TodoRow, index: number) => (
              <TodoItem
                key={todo.id}
                index={index}
                todo={todo}
                isNewlyCreated={newlyCreatedTodoId === todo.id}
                onEditComplete={() => {
                  // 편집이 완료되면 새로 생성된 할일 ID를 초기화
                  setNewlyCreatedTodoId(null);
                }}
              />
            ))}
          {todosQuery?.data?.length === 0 && (
            <S.TodoListEmpty>할 일이 없습니다. 🙁</S.TodoListEmpty>
          )}
        </S.TodoList>
        {todosQuery.isPending && <Loading />}
        {todosQuery?.data && (
          <Button
            text='추가하기'
            iconName='plus'
            filled
            onClick={() => createTodoMutation.mutate()}
            disabled={createTodoMutation.isPending}
            loading={createTodoMutation.isPending}
          />
        )}
      </S.TodoContent>
    </S.TodoContainer>
  );
};

export default TodoContainer;
