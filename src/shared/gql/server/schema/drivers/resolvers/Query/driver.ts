import type { QueryResolvers } from './../../../types.generated';
export const driver: NonNullable<QueryResolvers['driver']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { driverId } = _arg;
  const { Driver } = _ctx;
  try {
    const broker = await Driver.findById(driverId);
    if (!broker) {
      throw new Error(`Driver with id ${driverId} not found`);
    }
    return broker;
  } catch (error: any) {
    throw new Error(error.message);
  } /* Implement Query.driver resolver logic here */
};
