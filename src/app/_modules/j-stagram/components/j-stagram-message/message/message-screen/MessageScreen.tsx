'use client';

import MessageUser from '../message-user/MessageUser';
import Input from '@/app/_modules/common/components/form/input/Input';
import Button from '@/app/_modules/common/components/button/button/Button';
import * as S from './styled';
import { useIsMobile } from '@/app/_modules/common/hooks/useIsMobile';
import { useRef, useState } from 'react';
import MessageBubble from '../message-bubble/MessageBubble';
import { useAtomValue } from 'jotai';
import { selectedChatUserIdState } from '@/app/store';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from 'actions/messageActions';

const MessageScreen = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const isMobile = useIsMobile();
  const inputRef = useRef<HTMLInputElement>(null);
  const selectedChatUserId = useAtomValue(selectedChatUserIdState);

  const messages = [
    {
      isMe: true,
      message: 'Hello',
    },
    {
      isMe: false,
      message: 'Hello222',
    },
    {
      isMe: true,
      message: 'Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333',
    },
    {
      isMe: true,
      message: 'Hello',
    },
    {
      isMe: false,
      message: 'Hello222',
    },
    {
      isMe: true,
      message: 'Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333',
    },
    {
      isMe: true,
      message: 'Hello',
    },
    {
      isMe: false,
      message: 'Hello222',
    },
    {
      isMe: true,
      message: 'Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333',
    },
    {
      isMe: true,
      message: 'Hello',
    },
    {
      isMe: false,
      message: 'Hello222',
    },
    {
      isMe: true,
      message: 'Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333',
    },
    {
      isMe: true,
      message: 'Hello',
    },
    {
      isMe: false,
      message: 'Hello222',
    },
    {
      isMe: true,
      message: 'Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333',
    },
    {
      isMe: true,
      message: 'Hello',
    },
    {
      isMe: false,
      message: 'Hello222',
    },
    {
      isMe: true,
      message: 'Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333',
    },
    {
      isMe: true,
      message: 'Hello',
    },
    {
      isMe: false,
      message: 'Hello222',
    },
    {
      isMe: true,
      message: 'Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333Hello333333',
    },
    {
      isMe: true,
      message: 'Hello',
    },
    {
      isMe: false,
      message: 'Hello222',
    },
  ];

  const selectedChatUserQuery = useQuery({
    queryKey: ['selectedChatUser', selectedChatUserId],
    queryFn: () => getUserById(selectedChatUserId),
    enabled: !!selectedChatUserId,
  });

  console.log(selectedChatUserQuery.data);

  return (
    <S.MessageScreenContainer>
      {selectedChatUserQuery.data ? (
        <>
          <MessageUser user={selectedChatUserQuery.data} onlineAt='2025-07-21' isChat />
          <S.MessageScreenChat>
            {messages.map((message, index) => (
              <MessageBubble
                key={`${message.message}-${index}`}
                isMe={message.isMe}
                message={message.message}
              />
            ))}
          </S.MessageScreenChat>
          <S.MessageScreenChatForm>
            <Input
              id='chat'
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              isSearch={!isMobile}
              width={!isMobile ? 500 : undefined}
              inputRef={inputRef}
            />
            <Button
              type='button'
              text='전송'
              size='md'
              filled
              bgColor='dodgerblue'
              textColor='white'
            />
          </S.MessageScreenChatForm>
        </>
      ) : (
        <S.MessageScreenNoChat>
          <h2>Message 💬</h2>
          <span>채팅 상대를 선택해주세요.</span>
        </S.MessageScreenNoChat>
      )}
    </S.MessageScreenContainer>
  );
};

export default MessageScreen;
