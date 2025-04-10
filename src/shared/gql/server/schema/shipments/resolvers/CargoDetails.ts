import type { CargoDetailsResolvers } from './../../types.generated';
export const CargoDetails: CargoDetailsResolvers = {
  cargoCategory: (details) => details.cargoCategory,
  description: (details) => details.description,
  weight: (details) => details.weight,
  volume: (details) => details.volume,
  costValue: (details) => details.costValue,
  currency: (details) => details.currency,
  dimensions: (details) => details.dimensions,
  isHazardous: (details) => details.isHazardous,
  hazardousDetails: (details) => details.hazardousDetails,
  handlingInstructions: (details) => details.handlingInstructions,

  /* Implement CargoDetails resolver logic here */
};
