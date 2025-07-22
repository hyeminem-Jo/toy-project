'use client';

import * as S from './styled';
import Input from '@/app/_modules/common/components/form/input/Input';
import Button from '@/app/_modules/common/components/button/button/Button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const SignUpForm = ({ setView }: { setView: (view: 'SIGN_IN' | 'SIGN_UP') => void }) => {
  const schema = z
    .object({
      email: z.string().min(1, '이메일을 입력해주세요.').email('이메일 형식이 올바르지 않습니다.'),
      password: z.string().min(1, '비밀번호를 입력해주세요.'),
      passwordConfirm: z.string().min(1, '비밀번호를 다시 입력해주세요.'),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      path: ['passwordConfirm'],
      message: '비밀번호가 일치하지 않습니다',
    });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <S.SignUpFormWrap onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            id='email'
            label='이메일'
            placeholder='이메일을 입력하세요.'
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            inputRef={field.ref}
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <Input
            id='password'
            label='비밀번호'
            placeholder='비밀번호를 입력하세요.'
            value={field.value}
            onChange={field.onChange}
            maxLength={12}
            onBlur={field.onBlur}
            inputRef={field.ref}
            type='password'
            error={errors.password?.message}
          />
        )}
      />
      <Controller
        name='passwordConfirm'
        control={control}
        render={({ field }) => (
          <Input
            id='passwordConfirm'
            label='비밀번호 확인'
            placeholder='비밀번호를 다시 입력하세요.'
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            inputRef={field.ref}
            type='password'
            error={errors.passwordConfirm?.message}
          />
        )}
      />
      <Button
        type='submit'
        text='가입하기'
        filled
        widthFull
        // onClick={() => router.push('/')}
      />
    </S.SignUpFormWrap>
  );
};

export default SignUpForm;
