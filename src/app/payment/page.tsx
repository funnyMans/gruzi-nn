'use client';

import PaypalScript from '@/features/payment/paypal/PaypalScript';
import { CheckoutForm } from '@/features/payment/stripe/CheckoutForm';

import { Container, Paper, Box, Typography, Divider } from '@mui/material';

const CheckoutPage = () => {
  const priceId = 'price_1RA6QRFjM1oEhuKJIQINO82a';

  return (
    <Container maxWidth='md' sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant='h6' gutterBottom>
            Pay with Card
          </Typography>
          <CheckoutForm priceId={priceId} />
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box>
          <Typography variant='h6' gutterBottom>
            Or Pay with PayPal
          </Typography>
          <PaypalScript />
        </Box>
      </Paper>
    </Container>
  );
};

export default CheckoutPage;
