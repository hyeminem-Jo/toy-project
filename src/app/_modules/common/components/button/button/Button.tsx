import React from 'react';
import * as S from './styled';
import Lottie from 'lottie-react';
import spinner from '@/assets/lotties/spinner.json';

interface ButtonProps {
  text: string | React.ReactNode;
  iconName?: string;
  widthFull?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  filled?: boolean;
  loading?: boolean;
  size?: 'sm' | 'md';
  bgColor?: 'default' | string;
  textColor?: 'default' | string;
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
  size = 'sm',
  bgColor = 'default',
  textColor = 'default',
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      $widthFull={widthFull}
      $filled={filled}
      disabled={disabled || loading}
      $size={size}
      $bgColor={bgColor}
      $textColor={textColor}
    >
      {loading && <Lottie animationData={spinner} loop={true} style={{ width: 20, height: 20 }} />}
      {iconName && !loading && <i className={`fa-solid fa-${iconName}`} />}
      <S.ButtonText $size={size}>{text}</S.ButtonText>
    </S.Button>
  );
};

export default Button;
