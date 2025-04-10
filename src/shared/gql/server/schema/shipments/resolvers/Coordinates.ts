import type { CoordinatesResolvers } from './../../types.generated';
export const Coordinates: CoordinatesResolvers = {
  latitude: (coords) => coords.latitude,
  longitude: (coords) => coords.longitude,
  /* Implement Coordinates resolver logic here */
};
