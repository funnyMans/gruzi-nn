'use server';

import config from '@/shared/lib/config';
import { Stripe } from 'stripe';

// Load Stripe API key from environment variables
const apiKey = config.stripe.secretKey;
const stripe = new Stripe(apiKey);
interface NewSessionOptions {
  priceId: string;
}

export const postStripeSession = async ({ priceId }: NewSessionOptions) => {
  // Use dynamic URL based on your environment (development or production)
  const returnUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/checkout-return?session_id={CHECKOUT_SESSION_ID}'
      : 'https://gruzi-nn.vercel.com//checkout-return?session_id={CHECKOUT_SESSION_ID}';

  try {
    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      payment_method_types: ['card', 'alipay', 'amazon_pay'],
      mode: 'payment',
      ui_mode: 'embedded',
      return_url: returnUrl,
    });

    if (!session.client_secret) {
      throw new Error('Error initiating Stripe session');
    }

    // Return the clientSecret for use in the frontend
    return {
      sessionId: session.id,
      clientSecret: session.client_secret,
    };
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    throw new Error('Error creating Stripe session');
  }
};
