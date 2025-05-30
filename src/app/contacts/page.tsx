'use client';

import GoogleMap from '@/shared/ui/maps/google/GoogleMap';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const ContactPage = () => {
  const directions = {
    pickupLocation: {
      city: 'New York',
      address: '123 Main St',
    },
    deliveryLocation: {
      city: '',
      address: '',
    },
  };

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={2}>
        {/* Contact Info + Form */}
        <Grid sx={{ xs: 12 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant='h6' gutterBottom>
              Get in Touch
            </Typography>

            <Typography variant='body1' sx={{ mb: 2 }}>
              Email: contact@yourcompany.com <br />
              Phone: (123) 456-7890 <br />
              Address: 123 Main St, New York, NY
            </Typography>

            <form>
              <TextField
                fullWidth
                label='Your Name'
                variant='outlined'
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label='Email'
                variant='outlined'
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label='Message'
                variant='outlined'
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button variant='contained' fullWidth>
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        <Grid>
          <GoogleMap directions={directions} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
