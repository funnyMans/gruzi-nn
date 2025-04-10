import type { LocationResolvers } from './../../types.generated';
export const Location: LocationResolvers = {
  address: (location) => location.address,
  city: (location) => location.city,
  state: (location) => location.state,
  zip: (location) => location.zip,
  /* Implement Location resolver logic here */
};
