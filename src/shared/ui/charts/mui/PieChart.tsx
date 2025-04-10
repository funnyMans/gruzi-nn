import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

export default function PieChartUI() {
  return (
    <PieChart
      series={[
        {
          paddingAngle: 5,
          innerRadius: 10,
          outerRadius: 80,
          cornerRadius: 5,
          data,
        },
      ]}
      margin={{ right: 5 }}
      width={250}
      height={250}
      slotProps={{ legend: { hidden: true } }}
    />
  );
}
