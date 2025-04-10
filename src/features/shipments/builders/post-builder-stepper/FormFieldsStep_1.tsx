'use client';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import { Box, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Field, FieldProps } from 'formik';
import { Currency } from '@/shared/gql/client/__generated__/graphql';

export default function FormFieldsStep_1() {
  const CustomInput = ({ field, ...rest }: FieldProps) => {
    return <OutlinedInput {...field} {...rest} />;
  };
  const CustomSelect = ({ field, ...rest }: FieldProps) => {
    return <Select {...field} {...rest} />;
  };
  return (
    <Grid container spacing={3} direction={'column'}>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='description' required>
          Description
        </FormLabel>

        <Field
          component={CustomInput}
          id='description'
          name='description'
          type='description'
          placeholder=''
          autoComplete='description'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='weight' required>
          Weight (kg)
        </FormLabel>
        <Field
          component={CustomInput}
          id='weight'
          name='weight'
          type='number'
          placeholder='weight in kg'
          autoComplete='weight'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='volume' required>
          Volume (m<sup>3</sup>)
        </FormLabel>
        <Field
          component={CustomInput}
          id='volume'
          name='volume'
          type='number'
          placeholder='Street name and number'
          autoComplete='shipping address-line1'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='costValue'>Cargo Cost</FormLabel>
        <Field
          component={CustomInput}
          id='costValue'
          name='costValue'
          type='number'
          placeholder='Cost value'
          autoComplete='shipping address-line2'
          required
          size='small'
        />
      </Box>
      <Box display={'flex'} flexDirection={'column'}>
        <FormLabel htmlFor='currency'>Currency</FormLabel>
        <Field
          component={CustomSelect}
          labelId='currency'
          id='currency'
          label='Currency'
          name='currency'
        >
          <MenuItem value={Currency.Usd}>USD</MenuItem>
          <MenuItem value={Currency.Eur}>EUR</MenuItem>
          <MenuItem value={Currency.Rur}>RUR</MenuItem>
        </Field>
      </Box>
    </Grid>
  );
}
