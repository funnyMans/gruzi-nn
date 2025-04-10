import PaypalScript from '@/features/payment/paypal/PaypalScript';
import { CheckoutForm } from '@/features/payment/stripe/CheckoutForm';

const CheckoutPage = () => {
  // Here you would be getting the basked etc.
  // We're hard-coding the oruce for simplicity
  const priceId = 'price_1RA6QRFjM1oEhuKJIQINO82a';

  return (
    <main>
      <div className='max-w-screen-lg mx-auto my-8'>
        <CheckoutForm priceId={priceId} />
        <PaypalScript />
      </div>
    </main>
  );
};

export default CheckoutPage;
