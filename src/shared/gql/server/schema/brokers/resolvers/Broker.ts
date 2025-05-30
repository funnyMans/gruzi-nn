import type { BrokerResolvers } from './../../types.generated';
export const Broker: BrokerResolvers = {
  brokerId: (broker) => broker.brokerId,
  name: (broker) => broker.name,
  address: (broker) => broker.address,
  contact: (broker) => broker.contact,
  licenseNumber: (broker) => broker.licenseNumber,
  associatedShipments: (broker) => broker.associatedShipments,
};
