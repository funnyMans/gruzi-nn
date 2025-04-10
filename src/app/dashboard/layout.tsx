import { ReactElement, Suspense } from 'react';
import { Typography } from '@mui/material';
import DashboardLoading from './loading';

interface ILayoutProps {
  children: ReactElement;
}

const DashboardLayout = ({ children }: ILayoutProps) => {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <Typography>DashboardLayout</Typography>
      {children}
    </Suspense>
  );
};

export default DashboardLayout;
