'use client';

import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import config from '@/shared/lib/config';
import PaypalCheckoutForm from './PaypalCheckoutForm';

import { Box, CircularProgress } from '@mui/material';

const clientId = config.paypal.clientId;

const PaypalScript = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId,
        components: 'buttons',
        currency: 'USD',
      }}
    >
      <Box
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          p: 2,
          minHeight: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* You can add fallback if needed */}
        <React.Suspense
          fallback={<CircularProgress color='primary' size={28} />}
        >
          <PaypalCheckoutForm />
        </React.Suspense>
      </Box>
    </PayPalScriptProvider>
  );
};

export default PaypalScript;
