import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const DatePickerWrapper = styled.div<{ $disabled: boolean }>`
  .react-datepicker-wrapper {
    min-width: 10rem;
    border: 1px solid #e0e0e0;
    border-radius: 0.8rem;
    padding: 0.5rem;
    background-color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    height: 100%;
    ${({ $disabled }) =>
      !$disabled &&
      css`
        border-color: orange;
      `}
  }

  .react-datepicker-popper {
    left: 3rem !important;
  }

  .react-datepicker__month-container {
    width: 25rem;
    height: auto;
  }

  .react-datepicker__month {
    margin: 1rem 0.3rem;
  }

  .react-datepicker__week {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    padding: 0 1rem;
  }

  .react-datepicker__day {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 500;
  }

  .react-datepicker__day-names {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    padding: 0 1.2rem;
    gap: 0;
    margin-top: 0.5rem;
  }

  .react-datepicker__day-name {
    flex: 1;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .react-datepicker__current-month {
    font-size: 1.4rem;
  }

  .react-datepicker__header {
    padding-top: 1rem;
  }

  .react-datepicker__navigation {
    top: 0.8rem;
  }

  /* 기본 스타일을 유지하면서 필요한 부분만 커스터마이징 */
  .react-datepicker__input-container input {
    width: 100%;
    /* 기본 스타일을 유지하되 필요한 부분만 수정 */
  }
`;
