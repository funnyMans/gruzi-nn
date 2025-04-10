import type { TruckResolvers } from './../../types.generated';
export const Truck: TruckResolvers = {
  truckId: (truck) => truck.truckId,
  model: (truck) => truck.model,
  capacity: (truck) => truck.capacity,
  licensePlate: (truck) => truck.licensePlate,

  /* Implement Truck resolver logic here */
};
