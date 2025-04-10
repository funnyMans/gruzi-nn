import { ResponsiveChartContainer } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';

interface IProps {
  series: any[];
  height: number;
  xAxis: any[];
  marginStyle: Record<string, number>;
}

const employees = [
  {
    employeeId: 11,
    name: 'John',
    managerId: 200,
  },
  {
    employeeId: 50,
    name: 'Todd',
    managerId: 73,
  },
  {
    employeeId: 150,
    name: 'Alex',
    managerId: 200,
  },
  {
    employeeId: 73,
    name: 'Sara',
    managerId: 11,
  },
  {
    employeeId: 200,
    name: 'Alex',
    managerId: 50,
  },
  {
    employeeId: 100,
    name: 'Alex',
    managerId: 150,
  },
];

export default function BarChartUI({
  series,
  height,
  xAxis,
  marginStyle,
}: Partial<IProps>) {
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
