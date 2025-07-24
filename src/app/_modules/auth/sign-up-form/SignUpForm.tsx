'use client';

import * as S from './styled';
import Input from '@/app/_modules/common/components/form/input/Input';
import Button from '@/app/_modules/common/components/button/button/Button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createBrowserSupabaseClient } from 'utils/supabase/client';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

const schema = z
  .object({
    email: z.string().min(1, '이메일을 입력해주세요.').email('이메일 형식이 올바르지 않습니다.'),
    password: z.string().min(1, '비밀번호를 입력해주세요.'),
    passwordConfirm: z.string().min(1, '비밀번호를 다시 입력해주세요.'),
    otp: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: '비밀번호가 일치하지 않습니다',
  });

const SignUpForm = () => {
  const supabase = createBrowserSupabaseClient();
  const [confirmationRequired, setConfirmationRequired] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      otp: '',
    },
    mode: 'onChange',
  });

  const signUpMutation = useMutation({
    mutationFn: async (formData: z.infer<typeof schema>) => {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/api/signup/confirm`,
          // window.location.origin - http://localhost:3000
        },
      });

      if (data) {
        setConfirmationRequired(true);
      }

      if (error) {
        alert(error.message);
        throw new Error(error.message);
      }

      return data;
    },
  });

  const confirmMutation = useMutation({
    mutationFn: async (formData: z.infer<typeof schema>) => {
      const { data, error } = await supabase.auth.verifyOtp({
        type: 'signup',
        email: formData.email,
        token: formData.otp,
      });

      if (data) {
        setConfirmationRequired(true);
      }

      if (error) {
        if (error.message === 'Token has expired or is invalid') {
          alert('토큰이 만료되었거나 유효하지 않습니다.');
        } else {
          alert(error.message);
        }
        throw new Error(error.message);
      }

      return data;
    },
  });

  const onSubmit = (formData: z.infer<typeof schema>) => {
    if (confirmationRequired) {
      if (watch('otp').length === 6) {
        confirmMutation.mutate(formData);
      } else {
        alert('6자리 숫자로 입력해주세요.');
      }
    } else {
      signUpMutation.mutate(formData);
    }
  };

  return (
    <S.SignUpFormWrap onSubmit={handleSubmit(onSubmit)}>
      {confirmationRequired ? (
        <Controller
          name='otp'
          control={control}
          render={({ field }) => (
            <Input
              id='otp'
              type='text'
              placeholder='otp 6자리를 입력해주세요.'
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              inputRef={field.ref}
              error={errors.otp?.message}
            />
          )}
        />
      ) : (
        <>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                id='email'
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
        </>
      )}
      <Button
        type='submit'
        text={confirmationRequired ? '인증하기' : '가입하기'}
        size='md'
        filled
        widthFull
        loading={confirmationRequired ? confirmMutation.isPending : signUpMutation.isPending}
        disabled={confirmationRequired ? confirmMutation.isPending : signUpMutation.isPending}
      />
    </S.SignUpFormWrap>
  );
};

export default SignUpForm;
