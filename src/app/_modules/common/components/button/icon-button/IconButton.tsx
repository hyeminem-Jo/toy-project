import React from 'react';
import * as S from './styled';

interface IconButtonProps {
  iconName: string;
  heightFull?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const IconButton = ({
  iconName,
  heightFull = false,
  onClick,
  disabled = false,
  type = 'button',
}: IconButtonProps) => {
  return (
    <S.IconButton type={type} onClick={onClick} $heightFull={heightFull} disabled={disabled}>
      <i className={`fa-solid fa-${iconName}`} />
    </S.IconButton>
  );
};

export default IconButton;
