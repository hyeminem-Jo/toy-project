import Lottie from 'lottie-react';
import spinner from '@/assets/lotties/spinner.json';
import * as S from './styled';

const Loading = () => {
  return (
    <S.LoadingContainer>
      <Lottie animationData={spinner} loop={true} style={{ width: 100, height: 100 }} />
      <S.LoadingText>로딩중...</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default Loading;
