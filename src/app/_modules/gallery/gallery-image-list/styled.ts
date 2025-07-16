import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_modules/common/constant/breakpoint';

export const GalleryImageList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 13rem;

  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1.5rem;
    padding-bottom: 9rem;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
