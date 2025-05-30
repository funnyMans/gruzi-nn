import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import Stripe from 'stripe';
import config from '@/shared/lib/config';

const apiKey = config.stripe.secretKey;
const stripe = new Stripe(apiKey);

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const stripeSessionId = searchParams.get('session_id');

  if (!stripeSessionId?.length) return redirect('/shop');

  const session = await stripe.checkout.sessions.retrieve(stripeSessionId);

  if (session.status === 'complete') {
    // Go to a success page!
    return redirect(`/payment/success`);
  }

  if (session.status === 'open') {
    // Here you'll likely want to head back to some pre-payment page in your checkout
    // so the user can try again
    return redirect(`/payment/cancel`);
  }

  return redirect('/shop');
};
