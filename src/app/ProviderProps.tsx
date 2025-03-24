import TimelineIcon from '@mui/icons-material/Timeline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { type Branding, type Navigation } from '@toolpad/core/AppProvider';
import { AccessTime } from '@mui/icons-material';

const ROOT_NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Page',
    icon: <DashboardIcon />,
  },
  {
    segment: 'stats',
    title: 'Stats',
    icon: <TimelineIcon />,
    children: [
      {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
      },
      {
        segment: 'daily',
        title: 'Daily',
        icon: <AccessTime />,
      },
    ],
  },
];

const ROOT_BRANDING: Branding = {
  title: 'Gruzi-NN',
  homeUrl: '/',
};

export default {
  navigation: ROOT_NAVIGATION,
  branding: ROOT_BRANDING,
};
