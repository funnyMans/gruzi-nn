'use client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import PaypalCheckoutForm from './PaypalCheckoutForm';
import config from '@/shared/lib/config';

const clientId = config.paypal.clientId;
const PaypalScript = () => {
  return (
    <PayPalScriptProvider options={{ clientId }}>
      <PaypalCheckoutForm />
    </PayPalScriptProvider>
  );
};

export default PaypalScript;
