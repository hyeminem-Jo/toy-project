import Lottie from 'react-lottie';
import spinner from '@/assets/lotties/spinner.json';
import * as S from './styled';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
  };

  return (
    <S.LoadingContainer>
      <Lottie options={defaultOptions} width={100} height={100} />
      <S.LoadingText>로딩중...</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default Loading;
