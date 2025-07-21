import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_modules/common/constant/breakpoint';

export const MovieListContainer = styled.ul`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  min-height: calc(100vh - 35rem);

  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    min-height: calc(100vh - 27rem);
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const LoadingWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
