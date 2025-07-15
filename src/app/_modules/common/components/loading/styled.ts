import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  margin: 0 auto 2rem;
`;

export const LoadingText = styled.strong`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;
