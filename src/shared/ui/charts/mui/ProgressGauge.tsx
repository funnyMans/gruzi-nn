'use client';

import {
  Gauge,
  gaugeClasses,
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
} from '@mui/x-charts/Gauge';

export default function ProgressGauge() {
  return (
    <Gauge
      width={250}
      height={200}
      value={75}
      startAngle={-110}
      endAngle={110}
      cornerRadius={3}
      text={({ value, valueMax }) => `${value} / ${valueMax}`}
      sx={{
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#52b202', // Set your desired color here
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: '#f3f0f0', // Set a different color for the reference arc if needed
        },
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          transform: 'translate(0px, 0px)',
        },
      }}
    />
  );
}
