'use client';
import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';
import { postStripeSession } from '@/shared/providers/stripe/server-actions/stripeSession';
import config from '@/shared/lib/config';

const stripePromise = loadStripe(config.stripe.publishableKey);

export const CheckoutForm = ({ priceId }: { priceId: string }) => {
  const fetchClientSecret = useCallback(async () => {
    const stripeResponse = await postStripeSession({ priceId });
    return stripeResponse.clientSecret;
  }, [priceId]);

  const options = { fetchClientSecret };

  return (
    <div id='checkout'>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};
