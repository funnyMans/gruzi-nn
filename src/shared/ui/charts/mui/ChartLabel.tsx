'use client';
import { styled } from '@mui/material';
import { useDrawingArea } from '@mui/x-charts';

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

export default function ChartLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
