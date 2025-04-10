import type { BrokerResolvers } from './../../types.generated';
export const Broker: BrokerResolvers = {
  brokerId: (shipment) => shipment.brokerId,
  name: (shipment) => shipment.name,
  address: (shipment) => shipment.address,
  contact: (shipment) => shipment.contact,
  licenseNumber: (shipment) => shipment.licenseNumber,
  associatedShipments: (shipment) => shipment.associatedShipments,
};
