import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from './../../../types.generated';
export const trucks: NonNullable<QueryResolvers['trucks']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { Truck } = _ctx;
  try {
    await dbConnect();
    const broker = await Truck.find({});
    if (!broker) {
      throw new Error(`Trucks not found`);
    }
    return broker;
  } catch (error: any) {
    throw new Error(error.message);
  } //* Implement Query.trucks resolver logic here */
};
