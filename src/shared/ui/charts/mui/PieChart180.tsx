import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

export default function PieChartUI180() {
  return (
    <PieChart
      series={[
        {
          startAngle: -90,
          endAngle: 90,
          paddingAngle: 5,
          innerRadius: 40,
          outerRadius: 80,
          cornerRadius: 5,
          data,
        },
      ]}
      margin={{ right: 5 }}
      width={200}
      height={200}
      slotProps={{
        legend: { hidden: true },
      }}
    />
  );
}
