'use client';

import MessageUser from '../message-user/MessageUser';
import Input from '@/app/_modules/common/components/form/input/Input';
import Button from '@/app/_modules/common/components/button/button/Button';
import * as S from './styled';
import { useIsMobile } from '@/app/_modules/common/hooks/useIsMobile';
import { useEffect, useRef, useState } from 'react';
import MessageBubble from '../message-bubble/MessageBubble';
import { useAtomValue } from 'jotai';
import { selectedChatUserIdState } from '@/app/store';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserById, getAllMessages, sendMessage } from 'actions/messageActions';
import { createBrowserSupabaseClient } from 'utils/supabase/client';

const MessageScreen = () => {
  const [message, setMessage] = useState<string>('');
  const isMobile = useIsMobile();
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const selectedChatUserId = useAtomValue(selectedChatUserIdState);
  const supabase = createBrowserSupabaseClient();

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const selectedChatUserQuery = useQuery({
    queryKey: ['selectedChatUser', selectedChatUserId],
    queryFn: () => getUserById(selectedChatUserId),
    enabled: !!selectedChatUserId,
  });

  const sendMessageMutation = useMutation({
    mutationFn: async () => {
      await sendMessage({ message, otherUserId: selectedChatUserId });
    },
    onSuccess: () => {
      setMessage('');
      getAllMessagesQuery.refetch();
      inputRef.current?.focus();
    },
  });

  const getAllMessagesQuery = useQuery({
    queryKey: ['messages', selectedChatUserId],
    queryFn: () => getAllMessages({ otherUserId: selectedChatUserId }),
    enabled: !!selectedChatUserId,
  });

  // 메시지가 변경될 때마다 스크롤을 맨 아래로 이동
  useEffect(() => {
    scrollToBottom();
  }, [getAllMessagesQuery.data]);

  useEffect(() => {
    const channel = supabase
      .channel('message_postgres_changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'message' },
        (payload) => {
          // console.log('Channel data:', payload);
          if (payload.eventType === 'INSERT' && !payload.errors) {
            getAllMessagesQuery.refetch();
          }
        },
      );

    channel.subscribe();

    return () => {
      channel.unsubscribe(); // MessageScreen 컴포넌트가 언마운트될 때 채널 구독 해제
    };
  }, []);

  return (
    <S.MessageScreenContainer>
      {selectedChatUserQuery.data ? (
        <>
          <MessageUser user={selectedChatUserQuery.data} onlineAt='2025-07-21' isChat />
          <S.MessageScreenChat ref={chatContainerRef}>
            {getAllMessagesQuery.data?.map((message) => (
              <MessageBubble
                key={message.id}
                isMe={message.receiver === selectedChatUserId}
                message={message.message}
              />
            ))}
          </S.MessageScreenChat>
          <S.MessageScreenChatForm
            onSubmit={(e) => {
              e.preventDefault();
              if (message.trim()) {
                sendMessageMutation.mutate();
              }
            }}
          >
            <Input
              id='chat'
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              width={!isMobile ? 500 : undefined}
              inputRef={inputRef}
            />
            <Button
              type='submit'
              text='전송'
              size='md'
              filled
              bgColor='dodgerblue'
              textColor='white'
              disabled={!message}
              loading={sendMessageMutation.isPending}
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
