import { ReactNode } from 'react';
import { DashboardLayout, PageContainer, ThemeSwitcher } from '@toolpad/core';

interface IProps {
  children: ReactNode;
}
const LayoutStructure = ({ children }: IProps) => {
  return (
    <DashboardLayout>
      <PageContainer maxWidth={'xl'} sx={{ padding: 1 }}>
        {children}
      </PageContainer>
    </DashboardLayout>
  );
};

export default LayoutStructure;
