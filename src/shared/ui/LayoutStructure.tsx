import { ReactNode } from 'react';
import { DashboardLayout, PageContainer } from '@toolpad/core';
import PageTransition from '../animation/framer-motiion/PageTransition';

interface IProps {
  children: ReactNode;
}
const LayoutStructure = ({ children }: IProps) => {
  return (
    <DashboardLayout>
      <PageContainer maxWidth={'xl'}>
        <PageTransition>{children}</PageTransition>
      </PageContainer>
    </DashboardLayout>
  );
};

export default LayoutStructure;
