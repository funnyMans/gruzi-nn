import StatsSummary from '@/features/stats/StatsSummary';
import BarChartUI from '@/shared/ui/charts/mui/BarChart';
import LinearAreaChart from '@/shared/ui/charts/mui/LinearAreaChart';
import PieChartUI from '@/shared/ui/charts/mui/PieChart';
import PieChartUI180 from '@/shared/ui/charts/mui/PieChart180';
import PieChartWithLabel from '@/shared/ui/charts/mui/PieChartWithLabel';
import ProgressGauge from '@/shared/ui/charts/mui/ProgressGauge';
import SpeedGauge from '@/shared/ui/charts/mui/SpeedGauge';
import TwoLevelPieChart from '@/shared/ui/charts/mui/TwoLevelPieChart';
import { Container, Stack } from '@mui/material';
import React from 'react';

const StatsPage = () => {
  return (
    <Container maxWidth='xl' disableGutters>
      <StatsSummary />
      <BarChartUI />
      <LinearAreaChart />
      <Stack direction='row'>
        <TwoLevelPieChart />
        <PieChartUI />
        <PieChartWithLabel />
        <PieChartUI180 />
      </Stack>
      <ProgressGauge />
      <SpeedGauge />;
    </Container>
  );
};

export default StatsPage;
