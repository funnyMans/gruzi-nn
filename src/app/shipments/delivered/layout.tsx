import { ReactElement, Suspense } from 'react';
import { Typography } from '@mui/material';
import DeliveredShipmentsLoading from './loading';

interface ILayoutProps {
  children: ReactElement;
}

const DeliveredShipmentsLayout = ({ children }: ILayoutProps) => {
  return (
    <Suspense fallback={<DeliveredShipmentsLoading />}>
      <Typography>DeliveredShipmentsLayout</Typography>
      {children}
    </Suspense>
  );
};

export default DeliveredShipmentsLayout;
