import styled from '@emotion/styled';
import Link from 'next/link';
import { BREAKPOINT_SM } from '@/app/_modules/common/constant/breakpoint';

export const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 9rem;
  height: 100dvh;
  padding: 3rem 2rem 4rem;
  border-right: 1px solid #ccc;

  @media (max-width: ${BREAKPOINT_SM}px) {
    top: initial;
    bottom: 0;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    height: 6rem;
    border-right: none;
    border-top: 1px solid #ccc;
  }
`;

export const SideBarContent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10rem;

  @media (max-width: ${BREAKPOINT_SM}px) {
    order: 1;
    flex-direction: row;
    gap: 2rem;
    margin-top: 0;
  }
`;

export const SideBarHomeLink = styled(Link)`
  display: block;
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  background-image: url('/assets/images/jstagram-icon.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${BREAKPOINT_SM}px) {
    order: 2;
    width: 3rem;
    height: 3rem;
    margin: 0;
  }
`;

export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  border-radius: 1rem;

  i {
    font-size: 2.3rem;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SideBarProfileLink = styled(Link)`
  position: relative;
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  margin: 1.5rem auto 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    /* order: 3; */
    width: 3rem;
    height: 3rem;
    margin: 0;
    margin-left: 0.5rem;
  }
`;

export const SideBarLogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  aspect-ratio: 1/1;
  border-radius: 1rem;

  &:hover {
    background-color: #f0f0f0;
  }

  i {
    font-size: 2.3rem;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    display: none;
    /* width: 4rem;
    margin-top: 0; */
  }
`;
