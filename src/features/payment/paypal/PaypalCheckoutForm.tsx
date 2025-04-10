'use client';
import {
  CreateOrderActions,
  CreateOrderData,
  CreateOrderRequestBody,
  OnApproveActions,
  OnApproveData,
} from '@paypal/paypal-js';
import {
  DISPATCH_ACTION,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { useState } from 'react';

const PaypalCheckoutForm = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);

  const onCurrencyChange = ({ target: { value } }: any) => {
    setCurrency(value);
    dispatch({
      type: DISPATCH_ACTION.RESET_OPTIONS,
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (_: CreateOrderData, actions: CreateOrderActions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '8.99',
            currency_code: 'USD',
            breakdown: {
              item_total: {
                value: '8.99',
                currency_code: 'USD',
              },
            },
          },
        },
      ],
    } as CreateOrderRequestBody);
  };

  const onApproveOrder = (_: OnApproveData, actions: OnApproveActions) => {
    return actions.order!.capture().then((details) => {
      const status = details.status;
      alert(`Transaction completed by ${status}`);
    });
  };

  return (
    <div className='checkout'>
      {isPending ? (
        <p>LOADING...</p>
      ) : (
        <>
          <select value={currency} onChange={onCurrencyChange}>
            <option value='USD'>💵 USD</option>
            <option value='EUR'>💶 Euro</option>
          </select>

          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={(data, actions) => onCreateOrder(data, actions)}
            onApprove={(data, actions) => onApproveOrder(data, actions)}
          />
        </>
      )}
    </div>
  );
};

export default PaypalCheckoutForm;
