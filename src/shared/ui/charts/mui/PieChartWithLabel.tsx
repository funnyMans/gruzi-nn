import { PieChart } from '@mui/x-charts/PieChart';

import ChartLabel from './ChartLabel';

const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const style = {
  width: 400,
  height: 200,
};

export default function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...style}>
      <ChartLabel>Center label</ChartLabel>
    </PieChart>
  );
}
