import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const TodoContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const TodoContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const TodoTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const TodoList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 1.2rem;
  }
`;

export const TodoListEmpty = styled.p`
  margin: 5rem auto;
  font-size: 1.6rem;
  font-weight: 600;
  color: #bbb;
  text-align: center;
`;
