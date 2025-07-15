import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './styled';

interface CustomDatePickerProps {
  id: string;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  disabled?: boolean;
}

const CustomDatePicker = ({
  id,
  selectedDate,
  setSelectedDate,
  disabled = false,
}: CustomDatePickerProps) => {
  return (
    <S.DatePickerWrapper>
      <DatePicker
        dateFormat='yyyy.MM.dd'
        shouldCloseOnSelect
        minDate={new Date()}
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        placeholderText='날짜 선택'
        disabled={disabled}
      />
    </S.DatePickerWrapper>
  );
};

export default CustomDatePicker;
