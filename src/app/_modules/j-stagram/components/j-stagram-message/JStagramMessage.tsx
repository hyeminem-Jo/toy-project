'use client';

import MessageUserList from './message/message-user-list/MessageUserList';
import MessageScreen from './message/message-screen/MessageScreen';

import * as S from './styled';

const JStagramMessage = () => {
  return (
    <S.JStagramMessageContainer>
      <MessageUserList />
      <MessageScreen />
    </S.JStagramMessageContainer>
  );
};

export default JStagramMessage;
