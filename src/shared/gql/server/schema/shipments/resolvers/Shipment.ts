import type { ShipmentResolvers } from './../../types.generated';
export const Shipment: ShipmentResolvers = {
  shipmentId: (shipment) => shipment.shipmentId,
  brokerId: (shipment) => shipment.brokerId,
  driverId: (shipment) => shipment.driverId,
  truckId: (shipment) => shipment.truckId,
  cargoDetails: (shipment) => shipment.cargoDetails,
  deliveryLocation: (shipment) => shipment.deliveryLocation,
  pickupLocation: (shipment) => shipment.pickupLocation,
  status: (shipment) => shipment.status,
  timestamps: (shipment) => shipment.timestamps,
  trackingUpdates: (shipment) => shipment.trackingUpdates,
  /* Implement Shipment resolver logic here */
};
