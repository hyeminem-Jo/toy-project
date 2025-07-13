'use client';

import React from 'react';
import * as S from './styled';
import Link from 'next/link';

const TodoListContainer = () => {
  return (
    <S.TodoListContainer>
      <S.TodoListContent>
        <h1>TodoList</h1>

        <Link href='/'>Go to Main Page</Link>
        {/* Link 는 서버사이드로 redirect 되는게 아닌, 클라이언트 라우팅으로 동작 */}
      </S.TodoListContent>
    </S.TodoListContainer>
  );
};

export default TodoListContainer;
