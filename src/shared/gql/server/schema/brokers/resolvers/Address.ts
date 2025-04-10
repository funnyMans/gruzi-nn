import type { AddressResolvers } from './../../types.generated';
export const Address: AddressResolvers = {
  /* Implement Address resolver logic here */
  street: (address) => address.street,
  city: (address) => address.city,
  state: (address) => address.state,
  zip: (address) => address.zip,
};
