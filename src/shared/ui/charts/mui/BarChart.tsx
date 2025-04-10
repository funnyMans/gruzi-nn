import { BarChart } from '@mui/x-charts/BarChart';

interface IProps {
  series: any[];
  height: number;
  xAxis: any[];
  marginStyle: Record<string, number>;
}

export default function BarChartUI({ marginStyle }: Partial<IProps>) {
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34], label: 'pv' },
        { data: [51, 6, 49, 30], label: 'pv' },
        { data: [15, 25, 30, 50], label: 'pv' },
        { data: [60, 50, 15, 25], label: 'pv' },
      ]}
      height={290}
      xAxis={[
        {
          data: ['Q1', 'Q2', 'Q3', 'Q4'],
          scaleType: 'band',
        },
      ]}
      margin={marginStyle || { top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
