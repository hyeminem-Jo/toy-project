import React from 'react';
import * as S from './styled';
import Lottie from 'react-lottie';
import spinner from '@/assets/lotties/spinner.json';

interface ButtonProps {
  text: string;
  iconName?: string;
  widthFull?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  filled?: boolean;
  loading?: boolean;
}

const Button = ({
  text,
  iconName,
  widthFull = false,
  onClick,
  disabled = false,
  type = 'button',
  filled = false,
  loading = false,
}: ButtonProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
  };

  return (
    <S.Button
      type={type}
      onClick={onClick}
      $widthFull={widthFull}
      $filled={filled}
      disabled={disabled || loading}
    >
      {loading && <Lottie options={defaultOptions} width={20} height={20} />}
      {iconName && !loading && <i className={`fa-solid fa-${iconName}`} />}
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
};

export default Button;
