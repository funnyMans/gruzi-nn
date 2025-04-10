import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';

const StatsPage = () => {
  return <Suspense fallback={<LinearProgress />}>StatsPage</Suspense>;
};

export default StatsPage;
