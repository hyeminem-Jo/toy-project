import styled from '@emotion/styled';
import Image from 'next/image';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const GalleryImageContainerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.15s ease-in-out;
`;

export const GalleryImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  aspect-ratio: 1 / 1.2;

  &:hover {
    box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.13);
    .overlay {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const GalleryImageTape = styled.img`
  position: absolute;
  top: 1rem;
  right: -3rem;
  width: 10rem;
  height: auto;
  transform: rotate(45deg);
  opacity: 0.6;
  z-index: 1;
  cursor: pointer;

  @media (max-width: ${BREAKPOINT}px) {
    top: 1rem;
    right: -2rem;
    width: 8rem;
  }
`;

export const GalleryImageWrap = styled.div`
  flex: 5;
  position: relative;
  width: 100%;
  height: 50%;
  /* aspect-ratio: 1 / 2; */
`;

export const GalleryImage = styled(Image)`
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const GalleryImageInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const GalleryImageTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const GalleryImageDate = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: #aaa;
`;
