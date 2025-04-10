import type { HazardousDetailsResolvers } from './../../types.generated';
export const HazardousDetails: HazardousDetailsResolvers = {
  class: (hazard) => hazard.class,
  unNumber: (hazard) => hazard.unNumber,
  packingGroup: (hazard) => hazard.packingGroup,

  /* Implement HazardousDetails resolver logic here */
};
