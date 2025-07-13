'use client';

import * as S from './styled';
import { useParams, useSearchParams } from 'next/navigation';

const TodoListDetailContainer = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  console.log('id', id);
  console.log('code', code);

  return (
    <S.TodoListContainer>
      <S.TodoListContent>
        <h1>Todo List Page Detail: {id}</h1>
        <h1>searchParams.code: {code}</h1>
        <p>
          lpa eum repellendus, quos, sed libero. Magnam, eveniet?styled-components를 사용하여
          스타일링되었습니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
          incidunt blanditiis cumque ipsum architecto et quas vitae maiores eos, cupiditate
          veritatis culpa eum repellendus, quos, sed libero. Magnam, eveniet?styled-components를
          사용하여 스타일링되었습니다. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum saepe incidunt blanditiis cumque ipsum architecto et quas vitae maiores eos,
          cupiditate veritatis culpa eum repellendus, quos, sed libero. Magnam,
          eveniet?styled-components를 사용하여 스타일링되었습니다. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Illum saepe incidunt blanditiis cumque ipsum architecto et
          quas vitae maiores eos, cupiditate veritatis culpa eum repellendus, quos, sed libero.
          Magnam, eveniet?styled-components를 사용하여 스타일링되었습니다. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illum saepe incidunt blanditiis cumque ipsum architecto
          et quas vitae maiores eos, cupiditate veritatis culpa eum repellendus, quos, sed libero.
          Magnam, eveniet?styled-components를 사용하여 스타일링되었습니다. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illum saepe sed libero. Magnam, eveniet?
        </p>
      </S.TodoListContent>
    </S.TodoListContainer>
  );
};

export default TodoListDetailContainer;
