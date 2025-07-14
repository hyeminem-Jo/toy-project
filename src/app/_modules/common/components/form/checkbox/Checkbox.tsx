'use client';

import * as S from './styled';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  required?: boolean;
  width?: number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({
  label = '',
  required = false,
  width,
  checked = false,
  onChange,
  disabled,
  id,
  name,
  ...rest
}: CheckboxProps) {
  return (
    <S.CheckboxFieldset>
      <S.CheckboxWrap $width={width}>
        <S.CheckboxInput
          id={id || name}
          name={name}
          type='checkbox'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <S.CustomCheckbox $isChecked={checked}>
          <i className='fa-solid fa-check'></i>
        </S.CustomCheckbox>
        <S.CheckboxLabel htmlFor={id || name}>
          {label}
          {required && <S.RequiredMark>*</S.RequiredMark>}
        </S.CheckboxLabel>
      </S.CheckboxWrap>
    </S.CheckboxFieldset>
  );
}

export default Checkbox;
