'use client';
import { ReactNode } from 'react';

import { signIn, signOut, getSession, useSession } from 'next-auth/react';
import { Authentication, type Branding, type Navigation } from '@toolpad/core';
import { NextAppProvider } from '@toolpad/core/nextjs';

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import InsightsIcon from '@mui/icons-material/Insights';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CachedIcon from '@mui/icons-material/Cached';
// import LayoutStructure from './LayoutStructure';
// import theme from '@/app/theme';
import LayoutStructure from './LayoutStructure';
import { ThemeProvider, useTheme } from '@mui/material';
import theme from '@/app/theme';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'shipments',
    title: 'Shipments',
    icon: <FireTruckIcon />,
    children: [
      {
        segment: 'posted',
        title: 'Posted',
        icon: <WorkHistoryIcon />,
      },
      {
        segment: 'transit',
        title: 'Transit',
        icon: <CachedIcon />,
      },
      {
        segment: 'delivered',
        title: 'Delivered',
        icon: <CheckCircleOutlineIcon />,
      },
    ],
  },
  {
    segment: 'stats',
    title: 'Statistics',
    icon: <InsightsIcon />,
    children: [
      {
        segment: 'posted',
        title: 'Posted',
        icon: <WorkHistoryIcon />,
      },
      {
        segment: 'transit',
        title: 'Transit',
        icon: <CachedIcon />,
      },
      {
        segment: 'delivered',
        title: 'Delivered',
        icon: <CheckCircleOutlineIcon />,
      },
    ],
  },
  {
    segment: 'calendar',
    title: 'Calendar',
    icon: <EditCalendarIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Cabinet',
  },
  {
    segment: 'profile',
    title: 'Profile',
    icon: <AssignmentIndIcon />,
    children: [
      {
        segment: 'posted',
        title: 'Posted',
        icon: <WorkHistoryIcon />,
      },
      {
        segment: 'transit',
        title: 'Transit',
        icon: <CachedIcon />,
      },
      {
        segment: 'delivered',
        title: 'Delivered',
        icon: <CheckCircleOutlineIcon />,
      },
    ],
  },
  {
    segment: 'payment',
    title: 'Payment',
    icon: <PaymentOutlinedIcon />,
  },
  {
    segment: 'verification',
    title: 'Verification',
    icon: <VerifiedUserIcon />,
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <SettingsIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Platform',
  },
  {
    segment: 'notifications',
    title: 'Notifications',
    icon: <NotificationsActiveIcon />,
  },

  {
    segment: 'faq',
    title: 'FAQ',
    icon: <LiveHelpIcon />,
  },
  {
    segment: 'contacts',
    title: 'Contact Us',
    icon: <ContactPhoneIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Support',
  },
  {
    segment: 'support',
    title: 'Live Chat',
    icon: <QuestionAnswerIcon />,
  },
  {
    segment: 'terms',
    title: 'Terms of Use',
    icon: <ReceiptLongIcon />,
  },
  {
    segment: 'privacy',
    title: 'Privacy Policy',
    icon: <PrivacyTipIcon />,
  },
];

const BRANDING: Branding = {
  title: 'Gruzi NN',
};

const AUTHENTICATION: Authentication = {
  signIn,
  signOut,
};

interface IProps {
  children: ReactNode;
}
function LayoutProvider({ children }: IProps) {
  const { data: session } = useSession();

  return (
    <NextAppProvider
      session={session}
      navigation={NAVIGATION}
      branding={BRANDING}
      authentication={AUTHENTICATION}
    >
      <ThemeProvider theme={theme}>
        <LayoutStructure>{children}</LayoutStructure>
      </ThemeProvider>
    </NextAppProvider>
  );
}

export default LayoutProvider;
