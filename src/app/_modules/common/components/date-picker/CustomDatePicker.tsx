import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './styled';

interface CustomDatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  disabled?: boolean;
}

const CustomDatePicker = ({
  selectedDate,
  setSelectedDate,
  disabled = false,
}: CustomDatePickerProps) => {
  return (
    <S.DatePickerWrapper $disabled={disabled}>
      <DatePicker
        dateFormat='yyyy.MM.dd'
        shouldCloseOnSelect
        minDate={new Date()}
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        placeholderText='기한 없음'
        disabled={disabled}
      />
    </S.DatePickerWrapper>
  );
};

export default CustomDatePicker;
