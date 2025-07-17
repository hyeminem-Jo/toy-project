import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

type AppLayoutProps = {
  $bgColor?: string;
};

export const AppLayout = styled.div<AppLayoutProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 6rem;
  background: ${({ $bgColor }) => $bgColor};

  @media (max-width: ${BREAKPOINT}px) {
    padding-top: 4rem;
  }
`;

export const AppLayoutContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: 100%;

  @media (max-width: ${BREAKPOINT}px) {
    max-width: 100%;
    padding: 0 2rem;
  }
`;
