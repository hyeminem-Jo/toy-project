import styled from '@emotion/styled';
import Image from 'next/image';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';
import Link from 'next/link';

export const MovieDetailContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 12rem);
  padding-top: 13rem;
  padding-bottom: 10rem;
  color: #fff;

  @media (max-width: ${BREAKPOINT}px) {
    padding-top: 10rem;
    padding-bottom: 5rem;
  }
`;

export const MovieDetailContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const MovieDetailImageWrap = styled.div`
  flex: 1;
  position: relative;
  aspect-ratio: 1 / 1.5;
  overflow: hidden;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
  }
`;

export const MovieDetailImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieDetailInfo = styled.div`
  flex: 1.8;
`;

export const MovieDetailTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1.5;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 3rem;
  }
`;

export const MovieDetailDescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const MovieDetailDescTitle = styled.strong`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const MovieDetailDesc = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const MovieDetailBottom = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  font-weight: 600;
  button {
    width: 20rem;
    margin-top: 1.5rem;
  }

  @media (max-width: ${BREAKPOINT}px) {
    gap: 1.5rem;
    button {
      width: auto;
      margin-top: 2rem;
    }
  }
`;

export const MovieDetailAverage = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const MovieDetailPopularity = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const MovieDetailReleaseDate = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const GoBackMovieList = styled(Link)`
  margin-top: 3rem;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #fff;
`;
