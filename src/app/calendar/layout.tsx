import { Typography } from '@mui/material';
import { ReactElement, Suspense } from 'react';
import CalendarLoading from './loading';

interface ILayoutPorps {
  children: ReactElement;
}
const CalendarLayout = ({ children }: ILayoutPorps) => {
  return (
    <Suspense fallback={<CalendarLoading />}>
      <Typography>CalendarLayout</Typography>
      {children}
    </Suspense>
  );
};

export default CalendarLayout;
