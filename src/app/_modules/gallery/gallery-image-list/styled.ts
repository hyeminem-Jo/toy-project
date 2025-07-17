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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// export const GalleryImageListLoading = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 100%;
//   height: 100%;
// `;

export const GalleryImageListEmpty = styled.p`
  margin: 5rem auto;
  font-size: 1.6rem;
  font-weight: 600;
  color: #bbb;
  text-align: center;
`;
