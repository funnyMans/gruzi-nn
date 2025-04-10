import type { DriverResolvers } from './../../types.generated';
export const Driver: DriverResolvers = {
  /* Implement Driver resolver logic here */
  driverId: (driver) => driver.driverId,
  name: (driver) => driver.name,
  licenseNumber: (driver) => driver.licenseNumber,
  contact: (driver) => driver.contact,
};
