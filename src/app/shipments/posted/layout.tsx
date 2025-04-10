import { ReactElement, Suspense } from 'react';
import { Typography } from '@mui/material';
import PostedShipmentsLoading from './loading';

interface ILayoutProps {
  children: ReactElement;
}

const PostedShipmentsLayout = ({ children }: ILayoutProps) => {
  return (
    <Suspense fallback={<PostedShipmentsLoading />}>
      <Typography>PostedShipmentsLayout</Typography>
      {children}
    </Suspense>
  );
};

export default PostedShipmentsLayout;
