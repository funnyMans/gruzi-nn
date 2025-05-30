import { Box, LinearProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';

const LazyReviewCard = lazy(() => import('@/shared/ui/cards/ReviewCard'));
const StatsSummary = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Box
        padding={2}
        display={'flex'}
        flexWrap={'wrap-reverse'}
        justifyContent={'space-evenly'}
        gap={2}
      >
        {[1, 2, 3].map((item) => (
          <LazyReviewCard
            title={'gago ghjgg '}
            description='sdhjsdhgjshdjkghsdjkghsdfjsghdfjgjsdfhjsdjfghdfg'
            applyBtnText='apply'
            dismissBtnText='dismiss'
            key={item}
          />
        ))}
      </Box>
    </Suspense>
  );
};

export default StatsSummary;
