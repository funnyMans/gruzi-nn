import { type Branding, type Navigation } from '@toolpad/core/AppProvider';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import theme from '@/app/theme';

interface IProps {
  children: React.ReactNode;
  navigation: Navigation;
  branding: Branding;
}
export default function LayoutProvider({
  children,
  branding,
  navigation,
}: IProps) {
  return (
    // preview-start
    <NextAppProvider navigation={navigation} branding={branding} theme={theme}>
      <DashboardLayout>{children}</DashboardLayout>
    </NextAppProvider>
    // preview-end
  );
}
