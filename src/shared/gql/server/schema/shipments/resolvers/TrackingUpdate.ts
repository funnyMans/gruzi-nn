import type { TrackingUpdateResolvers } from './../../types.generated';
export const TrackingUpdate: TrackingUpdateResolvers = {
  status: (update) => update.status,
  location: (update) => update.location,
  timestamp: (update) => update.timestamp,
  /* Implement TrackingUpdate resolver logic here */
};
