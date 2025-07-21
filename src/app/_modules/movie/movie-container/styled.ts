import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 13rem;
  padding-bottom: 10rem;
  color: #fff;

  @media (max-width: ${BREAKPOINT}px) {
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
`;
