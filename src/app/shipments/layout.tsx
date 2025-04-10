import { ReactElement, Suspense } from 'react';
import { Typography } from '@mui/material';
import ShipmentsLoading from './loading';

interface ILayoutProps {
  children: ReactElement;
}

const ShipmentsLayout = ({ children }: ILayoutProps) => {
  return (
    <Suspense fallback={<ShipmentsLoading />}>
      <Typography>ShipmentsLayout</Typography>
      {children}
    </Suspense>
  );
};

export default ShipmentsLayout;
