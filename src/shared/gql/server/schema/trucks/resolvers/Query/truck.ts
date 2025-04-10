import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from './../../../types.generated';
export const truck: NonNullable<QueryResolvers['truck']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { truckId } = _arg;
  const { Truck } = _ctx;
  try {
    await dbConnect();

    const broker = await Truck.findById(truckId);
    if (!broker) {
      throw new Error(`Truck with id ${truckId} not found`);
    }
    return broker;
  } catch (error: any) {
    throw new Error(error.message);
  } /* Implement Query.truck resolver logic here */
};
