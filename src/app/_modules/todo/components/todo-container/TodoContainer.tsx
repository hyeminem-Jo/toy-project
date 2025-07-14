'use client';

import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import { useAtomValue } from 'jotai';
import { userState } from '@/app/store';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo, getTodos } from '@/app/actions/todoActions';
import { queryClient } from '@/app/config/ReactQueryProvider';
import Input from '@/app/_modules/common/components/form/input/Input';

import Button from '@/app/_modules/common/components/button/button/Button';
import TodoItem from '../todo-item/TodoItem';

const TodoContainer = () => {
  const [todoInput, setTodoInput] = useState('');

  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    // queryFn: () => getTodos(),
  });

  const createTodoMutation = useMutation({
    mutationFn: async () => {
      if (todoInput === '') throw new Error('Todo is required');
      await createTodo(todoInput);
    },
    onSuccess: (TODOS) => {
      // createTodo(todoInput) 의 리턴값
      todosQuery.refetch();

      // ⬇️ 다른 페이지에서 쿼리 데이터 갱신시, queryClient 를 통해 캐시 데이터 갱신
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });

  // const defaultValues = todosQuery?.data?.reduce((acc, todo, index) => {
  //   acc[`todo-${index}`] = todo;
  //   acc[`todo-check-${index}`] = false;
  //   return acc;
  // }, {} as Record<string, any>);

  // console.log(defaultValues);

  const user = useAtomValue(userState);

  const handleAddTodo = () => {
    if (todoInput.trim() === '') {
      alert('할 일을 입력해주세요');
      return;
    }
    createTodoMutation.mutate();
    setTodoInput(''); // 입력 필드 초기화
  };

  return (
    <S.TodoContainer>
      <S.TodoTitle>나의 할 일 ✅</S.TodoTitle>
      <S.TodoContent>
        <Input
          placeholder='할 일을 검색하세요.'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          isSearch
        />

        <S.TodoList>
          {todosQuery?.data &&
            todosQuery?.data?.map((todo: string, index: number) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                onDeleteTodo={() => {}}
                onUpdateTodo={() => {}}
                onToggleCheck={() => {}}
              />
            ))}
        </S.TodoList>

        <Button text='추가하기' iconName='plus' filled onClick={handleAddTodo} />
        {todosQuery.isLoading && <p>Loading...</p>}
        {createTodoMutation.isPending && <p>Adding Todo...</p>}
        {todosQuery.isError && <p>Error: {todosQuery.error.message}</p>}
      </S.TodoContent>
    </S.TodoContainer>
  );
};

export default TodoContainer;
