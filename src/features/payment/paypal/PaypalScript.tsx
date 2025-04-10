'use client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import PaypalCheckoutForm from './PaypalCheckoutForm';

const clientId =
  process.env.PAYPAL_CLIENT_ID ||
  'AYUKtRQkAa1ivC9LcrTPlPNkGuhcemWIFbFmFCwac4av5q4Nbc0h8GwX4ItBu5vHPiDQM7bfIVl7bWXn';
const PaypalScript = () => {
  return (
    <PayPalScriptProvider options={{ clientId }}>
      <PaypalCheckoutForm />
    </PayPalScriptProvider>
  );
};

export default PaypalScript;
