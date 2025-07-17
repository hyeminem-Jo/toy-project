import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

class DateUtil {
  format = (date: string | Date, format = 'YYYY.MM.DD') => {
    return dayjs(date).format(format);
  };

  toLocaleDate = (date: string, format = 'YYYY-MM-DD HH:mm:ss', emptyString = '') => {
    return date ? dayjs(date).format(format) : emptyString;
  };

  renderDateSnsType = (date: string) => {
    const MINUTE = 60;
    const HOUR = 60 * 60;
    const DAY = 60 * 60 * 24;
    const MONTH = 60 * 60 * 24 * 30;
    const YEAR = 60 * 60 * 24 * 365;

    const diffSecond = dayjs().diff(dayjs(this.toLocaleDate(date)), 'second');

    if (diffSecond < MINUTE) {
      return `방금 전`;
    }
    if (diffSecond < HOUR) {
      return `${dayjs().diff(dayjs(this.toLocaleDate(date)), 'minute')}분 전`;
    }
    if (diffSecond < DAY) {
      return `${dayjs().diff(dayjs(this.toLocaleDate(date)), 'hour')}시간 전`;
    }
    if (diffSecond < MONTH) {
      return `${dayjs().diff(dayjs(this.toLocaleDate(date)), 'day')}일 전`;
    }
    if (diffSecond < YEAR) {
      return `${dayjs().diff(dayjs(this.toLocaleDate(date)), 'month')}달 전`;
    }
    return `${dayjs().diff(dayjs(this.toLocaleDate(date)), 'year')}년 전`;
  };

  renderDateTime = (date: string, format = 'YYYY.MM.DD HH:mm') => {
    return dayjs(date).format(format);
  };

  renderDate = (date: string, format = 'YYYY년 M월 D일') => {
    return dayjs(date).format(format);
  };

  renderDateTimeString = (date: string, format = 'YYYY.MM.DD') => {
    return dayjs(date, 'YYYYMMDDHHmmss').format(format);
  };
}

const instance = new DateUtil();

export default instance;
