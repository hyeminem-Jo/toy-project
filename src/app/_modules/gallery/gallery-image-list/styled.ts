import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_modules/common/constant/breakpoint';

export const GalleryImageListContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: 13rem;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 1.5rem;
    padding-bottom: 9rem;
  }
`;

export const GalleryImageList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const GalleryImageListEmpty = styled.p`
  margin: 5rem auto;
  font-size: 1.6rem;
  font-weight: 600;
  color: #bbb;
  text-align: center;
`;
