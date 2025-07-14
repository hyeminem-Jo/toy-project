import React from 'react';
import * as S from './styled';

interface ButtonProps {
  text: string;
  iconName?: string;
  widthFull?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  filled?: boolean;
}

const Button = ({
  text,
  iconName,
  widthFull = false,
  onClick,
  disabled = false,
  type = 'button',
  filled = false,
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      $widthFull={widthFull}
      disabled={disabled}
      $filled={filled}
    >
      {iconName && <i className={`fa-solid fa-${iconName}`} />}
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
};

export default Button;
