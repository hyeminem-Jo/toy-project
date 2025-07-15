import React from 'react';
import * as S from './styled';
import Lottie from 'react-lottie';
import spinner from '../../../../../../../public/assets/lotties/spinner.json';

interface IconButtonProps {
  iconName: string;
  heightFull?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
  loading?: boolean;
}

const IconButton = ({
  iconName,
  heightFull = false,
  onClick,
  disabled = false,
  type = 'button',
  loading = false,
}: IconButtonProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinner,
  };

  return (
    <S.IconButton
      type={type}
      onClick={onClick}
      $heightFull={heightFull}
      disabled={disabled || loading}
    >
      {loading ? <Lottie options={defaultOptions} /> : <i className={`fa-solid fa-${iconName}`} />}
    </S.IconButton>
  );
};

export default IconButton;
