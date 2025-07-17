import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

interface AddFileZoneInnerTextProps {
  $isDragActive?: boolean;
}

interface AddFileZoneProps {
  $disabled?: boolean;
}

export const AddFileZone = styled.div<AddFileZoneProps>`
  width: 100%;
  height: 20rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px dashed #bbb;
  /* background-color: #f5f5f5; */
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
    `}

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    height: 15rem;
  }
`;

export const AddFileZoneInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const AddFileZoneInnerText = styled.p<AddFileZoneInnerTextProps>`
  font-size: 1.5rem;
  font-weight: 500;
  color: #888;
  text-align: center;
  line-height: 1.5;
  margin: 0;
  padding: 0;

  ${({ $isDragActive }) =>
    $isDragActive &&
    css`
      color: #000;
      font-weight: 600;
    `}
`;
