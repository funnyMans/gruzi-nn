'use client';
import React, { ReactElement } from 'react';
import { Formik, Form, Field } from 'formik';
import { shipmentValidationSchema } from '../schema/shipment';
import useShipmentInitialValues from './hooks/useInitialValues';

interface IProps {
  children: ReactElement;
}
const ShipmentPostForm = ({ children }: IProps) => {
  const initialValues = useShipmentInitialValues();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shipmentValidationSchema}
      onSubmit={(values) => {
        console.log('Form submitted:', values);
      }}
    >
      <Form>{children}</Form>
    </Formik>
  );
};

export default ShipmentPostForm;
