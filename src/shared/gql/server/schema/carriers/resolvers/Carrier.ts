import type { CarrierResolvers } from './../../types.generated';
export const Carrier: CarrierResolvers = {
  carrierId: (carrier) => carrier.carrierId,
  companyId: (carrier) => carrier.companyId,
  name: (carrier) => carrier.name,
  address: (carrier) => carrier.address,
  contact: (carrier) => carrier.contact,
  legalForm: (carrier) => carrier.legalForm,
  rating: (carrier) => carrier.rating,
  verified: (carrier) => carrier.verified,
  driverIDs: (carrier) => carrier.driverIDs,
  truckIDs: (carrier) => carrier.truckIDs,
};
