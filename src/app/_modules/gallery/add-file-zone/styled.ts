import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const AddFileZone = styled.form`
  width: 100%;
  height: 20rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px dashed #bbb;
  background-color: #f5f5f5;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    height: 15rem;
  }
`;
