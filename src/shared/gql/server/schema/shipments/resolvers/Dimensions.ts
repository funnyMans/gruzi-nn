import type { DimensionsResolvers } from './../../types.generated';
export const Dimensions: DimensionsResolvers = {
  width: (dims) => dims.width,
  height: (dims) => dims.height,
  length: (dims) => dims.length,
  /* Implement Dimensions resolver logic here */
};
