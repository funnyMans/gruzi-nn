import type { TimestampsResolvers } from './../../types.generated';
export const Timestamps: TimestampsResolvers = {
  actualPickup: (stamp) => stamp.actualPickup,
  actualDelivery: (stamp) => stamp.actualDelivery,
  scheduledPickup: (stamp) => stamp.scheduledPickup,
  scheduledDelivery: (stamp) => stamp.scheduledDelivery,
  /* Implement Timestamps resolver logic here */
};
