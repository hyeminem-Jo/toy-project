import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const TodoListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 2.5rem;
  border-radius: 0.8rem;
  border: 1px solid antiquewhite;
  background-color: #faebd760;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 7px 0;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 1rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const TodoListItemWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const TodoListItemIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 0.7rem;
    margin-left: auto;
  }
`;
