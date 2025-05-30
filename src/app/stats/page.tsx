import { Container, Grid, Box } from '@mui/material';
import StatsSummary from '@/features/stats/StatsSummary';
import BarChartUI from '@/shared/ui/charts/mui/BarChart';
import LinearAreaChart from '@/shared/ui/charts/mui/LinearAreaChart';
import PieChartUI from '@/shared/ui/charts/mui/PieChart';
import PieChartUI180 from '@/shared/ui/charts/mui/PieChart180';
import PieChartWithLabel from '@/shared/ui/charts/mui/PieChartWithLabel';
import ProgressGauge from '@/shared/ui/charts/mui/ProgressGauge';
import SpeedGauge from '@/shared/ui/charts/mui/SpeedGauge';
import TwoLevelPieChart from '@/shared/ui/charts/mui/TwoLevelPieChart';

const StatsPage = () => {
  return (
    <Container maxWidth='xl' sx={{ py: 4 }}>
      <Box mb={4}>
        <StatsSummary />
      </Box>

      <Grid container spacing={4}>
        {/* Row 1 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <BarChartUI />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <LinearAreaChart />
        </Grid>
        {/* Row 2: Pie charts with intentional space */}
        <Grid size={{ xs: 12, md: 4 }}>
          <TwoLevelPieChart />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PieChartUI />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <PieChartWithLabel />
        </Grid>
        {/* Row 3: Centered PieChart180 with spacing */}
        <Grid size={{ xs: false, md: 3 }} /> {/* Empty column for spacing */}
        <Grid size={{ xs: 12, md: 6 }}>
          <PieChartUI180 />
        </Grid>
        <Grid size={{ xs: false, md: 3 }} />
        {/* Row 4: Gauges side-by-side */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ProgressGauge />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SpeedGauge />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatsPage;
