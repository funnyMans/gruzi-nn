import { ReactNode } from 'react';
import { DashboardLayout, PageContainer } from '@toolpad/core';

interface IProps {
  children: ReactNode;
}
const LayoutStructure = ({ children }: IProps) => {
  return (
    <DashboardLayout>
      <PageContainer maxWidth={'xl'}>{children}</PageContainer>
    </DashboardLayout>
  );
};

export default LayoutStructure;
