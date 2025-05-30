'use client';

import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { postStripeSession } from '@/shared/providers/stripe/server-actions/stripeSession';
import config from '@/shared/lib/config';

import { Box } from '@mui/material';

const stripePromise = loadStripe(config.stripe.publishableKey);

export const CheckoutForm = ({ priceId }: { priceId: string }) => {
  const fetchClientSecret = useCallback(async () => {
    const stripeResponse = await postStripeSession({ priceId });
    return stripeResponse.clientSecret;
  }, [priceId]);

  const options = { fetchClientSecret };

  return (
    <Box id='checkout' sx={{ mt: 2 }}>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <Box
          sx={{
            minHeight: 500,
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            p: 2,
          }}
        >
          <EmbeddedCheckout />
        </Box>
      </EmbeddedCheckoutProvider>
    </Box>
  );
};
