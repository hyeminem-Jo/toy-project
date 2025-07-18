import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const GalleryContainer = styled.div`
  padding-top: 6rem;

  @media (max-width: ${BREAKPOINT}px) {
    padding-top: 4rem;
  }
`;

export const GalleryContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const GalleryTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 2.5rem;
  }
`;
