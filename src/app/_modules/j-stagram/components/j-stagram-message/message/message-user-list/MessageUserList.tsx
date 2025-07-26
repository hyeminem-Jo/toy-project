'use client';

import { useAtom } from 'jotai';
import { selectedChatUserIdState } from '@/app/store';
import MessageUser from '../message-user/MessageUser';

import * as S from './styled';
import { useQuery } from '@tanstack/react-query';
import { getAllUserList } from 'actions/messageActions';
import { myInfoState } from '@/app/store';

const MessageUserList = () => {
  const [selectedUserId, setSelectedUserId] = useAtom(selectedChatUserIdState);
  const [myInfo] = useAtom(myInfoState);

  const getAllUserQuery = useQuery({
    queryKey: ['getAllUser'],
    queryFn: getAllUserList,
  });

  const filteredUsers = getAllUserQuery.data?.filter((user) => user.id !== myInfo?.id) || [];

  return (
    <S.MessageUserListContainer>
      <S.MessageUserList>
        {filteredUsers.map((user) => (
          <MessageUser
            key={user.id}
            user={user}
            onClick={() => setSelectedUserId(user.id)}
            active={selectedUserId === user.id}
          />
        ))}
      </S.MessageUserList>
    </S.MessageUserListContainer>
  );
};

export default MessageUserList;
