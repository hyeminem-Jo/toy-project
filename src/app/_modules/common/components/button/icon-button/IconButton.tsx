import React from 'react';
import * as S from './styled';
import Lottie from 'lottie-react';
import spinner from '@/assets/lotties/spinner.json';

interface IconButtonProps {
  iconName: string;
  heightFull?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  loading?: boolean;
  color?: 'white' | 'black';
}

const IconButton = ({
  iconName,
  heightFull = false,
  onClick,
  disabled = false,
  type = 'button',
  loading = false,
  color = 'white',
}: IconButtonProps) => {
  return (
    <S.IconButton
      type={type}
      onClick={onClick}
      $heightFull={heightFull}
      disabled={disabled || loading}
      $color={color}
      $iconName={iconName}
    >
      {loading ? (
        <Lottie animationData={spinner} loop={true} />
      ) : (
        <i className={`fa-solid fa-${iconName}`} />
      )}
    </S.IconButton>
  );
};

export default IconButton;
