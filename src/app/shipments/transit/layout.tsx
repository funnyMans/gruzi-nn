import { ReactElement, Suspense } from 'react';
import { Typography } from '@mui/material';
import InTransitShipmentsLoading from './loading';

interface ILayoutProps {
  children: ReactElement;
}

const InTransitShipmentsLayout = ({ children }: ILayoutProps) => {
  return (
    <Suspense fallback={<InTransitShipmentsLoading />}>
      <Typography>InTransitShipmentsLayout</Typography>
      {children}
    </Suspense>
  );
};

export default InTransitShipmentsLayout;
