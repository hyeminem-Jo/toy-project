import styled from '@emotion/styled';
import Image from 'next/image';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const MovieItemContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1 / 1.5;

  &:hover {
    .movie-dim {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const MovieImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MovieImage = styled(Image)`
  object-fit: cover;
`;

export const MovieDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.15s ease-in-out;
`;

export const MovieDesc = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;

  @media (max-width: ${BREAKPOINT}px) {
    -webkit-line-clamp: 3;
  }
`;

export const MovieTitle = styled.strong`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`;
