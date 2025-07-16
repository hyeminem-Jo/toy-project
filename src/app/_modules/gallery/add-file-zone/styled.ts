import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const AddFileZone = styled.section`
  width: 100%;
  height: 20rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px dashed #bbb;
  background-color: #f5f5f5;

  i::before {
    font-size: 3rem;
    color: #999;
  }

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    height: 15rem;
  }
`;
