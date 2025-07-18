import styled from '@emotion/styled';

export const MovieHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, #000, transparent);
  width: 100%;
  height: 10rem;
  padding: 0 5rem;
`;

export const MovieLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const MovieLogoText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  opacity: 0.3;
`;
