import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Box } from '@mui/material';

export default function FormFieldsStep_2() {
  return (
    <Grid container spacing={3} direction={'column'}>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='address1' required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id='address1'
          name='address1'
          type='address1'
          placeholder='Street name and number'
          autoComplete='shipping address-line1'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='address2'>Address line 2</FormLabel>
        <OutlinedInput
          id='address2'
          name='address2'
          type='address2'
          placeholder='Apartment, suite, unit, etc. (optional)'
          autoComplete='shipping address-line2'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='city' required>
          City
        </FormLabel>
        <OutlinedInput
          id='city'
          name='city'
          type='city'
          placeholder='New York'
          autoComplete='City'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='state' required>
          State
        </FormLabel>
        <OutlinedInput
          id='state'
          name='state'
          type='state'
          placeholder='NY'
          autoComplete='State'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='country' required>
          Country
        </FormLabel>
        <OutlinedInput
          id='country'
          name='country'
          type='country'
          placeholder='United States'
          autoComplete='shipping country'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormControlLabel
          control={<Checkbox name='saveAddress' value='yes' />}
          label='Use this address for payment details'
        />
      </Box>
    </Grid>
  );
}
