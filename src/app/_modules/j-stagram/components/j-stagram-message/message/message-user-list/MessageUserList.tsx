'use client';

import { useAtom } from 'jotai';
import { selectedChatUserState } from '@/app/store';
import MessageUser from '../message-user/MessageUser';

import * as S from './styled';

const MessageUserList = () => {
  const [selectedChatUser, setSelectedChatUser] = useAtom(selectedChatUserState);

  return (
    <S.MessageUserListContainer>
      <S.MessageUserList>
        <MessageUser
          index={1}
          userId={1}
          name='John Doe'
          onClick={() => setSelectedChatUser({ id: 1, name: 'John Doe' })}
          active={selectedChatUser.id === 1}
        />
        <MessageUser
          index={2}
          userId={2}
          name='Jane Smith'
          onClick={() => setSelectedChatUser({ id: 2, name: 'Jane Smith' })}
          active={selectedChatUser.id === 2}
        />
        <MessageUser
          index={3}
          userId={3}
          name='Mike Johnson'
          active={selectedChatUser.id === 3}
          onClick={() => setSelectedChatUser({ id: 3, name: 'Mike Johnson' })}
        />
      </S.MessageUserList>
    </S.MessageUserListContainer>
  );
};

export default MessageUserList;
