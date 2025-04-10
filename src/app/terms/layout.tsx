import { ReactElement, Suspense } from 'react';
import { Typography } from '@mui/material';
import DashboardLoading from './loading';

interface ILayoutProps {
  children: ReactElement;
}

const TermsLayout = ({ children }: ILayoutProps) => {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <Typography>TermsLayout</Typography>
      {children}
    </Suspense>
  );
};

export default TermsLayout;
