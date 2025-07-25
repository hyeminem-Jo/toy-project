import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BREAKPOINT_SM } from '@/app/_modules/common/constant/breakpoint';

type MessageUserContainerProps = {
  $active?: boolean;
  $isChat?: boolean;
};

export const MessageUserContainer = styled.button<MessageUserContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  gap: 1rem;
  padding: 1.2rem;
  background-color: ${({ $active }) => ($active ? '#e6f2ff' : 'transparent')};

  ${({ $isChat }) =>
    $isChat &&
    css`
      width: 100%;
      background-color: #eee;
      pointer-events: none;
      cursor: default;
    `}

  &:hover {
    background-color: #e6f2ff;
  }

  img {
    border-radius: 50%;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    ${({ $isChat }) =>
      !$isChat &&
      css`
        flex-direction: column;
        width: 100px;
        height: 100%;
        span {
          font-size: 1.2rem;
        }
      `}
  }
`;

export const MessageUserInfo = styled.div<MessageUserContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: left;
  width: 100%;
  overflow: hidden;

  @media (max-width: ${BREAKPOINT_SM}px) {
    ${({ $isChat }) =>
      !$isChat &&
      css`
        text-align: center;
      `}
  }
`;

export const MessageUserName = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

export const MessageUserOnlineAt = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #888;
`;
