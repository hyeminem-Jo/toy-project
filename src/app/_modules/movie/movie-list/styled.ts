import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_modules/common/constant/breakpoint';

export const MovieListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  min-height: calc(100vh - 35rem);

  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
