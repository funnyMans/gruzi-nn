'use client';
import { div as MotionDiv } from 'framer-motion/client';
import { PropsWithChildren } from 'react';

export default function FadeInBox({ children }: PropsWithChildren) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </MotionDiv>
  );
}
