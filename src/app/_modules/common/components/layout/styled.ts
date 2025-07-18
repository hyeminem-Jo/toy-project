import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

type AppLayoutProps = {
  $bgColor?: string;
  $isGallery?: boolean;
};

export const AppLayout = styled.div<AppLayoutProps>`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${({ $bgColor }) => $bgColor};

  ${({ $isGallery }) =>
    $isGallery &&
    css`
      background-image: url('/assets/images/wall-background-02.jpg');
      background-size: 100% auto;
      /* background-color: rgba(255, 255, 255, 0.5);
      background-blend-mode: lighten; */
      background-color: floralwhite;
      background-blend-mode: luminosity;
      @media (max-width: ${BREAKPOINT}px) {
        background-size: 250% auto;
      }
    `}
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
