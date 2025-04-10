import { ReactElement, Suspense } from 'react';
import { Typography } from '@mui/material';
import PrivacyPolicyLoading from './loading';

interface ILayoutProps {
  children: ReactElement;
}

const PrivacyPolicyLayout = ({ children }: ILayoutProps) => {
  return (
    <Suspense fallback={<PrivacyPolicyLoading />}>
      <Typography>PrivacyPolicyLayout</Typography>
      {children}
    </Suspense>
  );
};

export default PrivacyPolicyLayout;
