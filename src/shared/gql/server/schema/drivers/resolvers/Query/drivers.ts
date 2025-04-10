import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from './../../../types.generated';
export const drivers: NonNullable<QueryResolvers['drivers']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { Driver } = _ctx;
  try {
    await dbConnect();

    const broker = await Driver.find({});
    if (!broker) {
      throw new Error(`Drivers not found`);
    }
    return broker;
  } catch (error: any) {
    throw new Error(error.message);
  }
  /* Implement Query.drivers resolver logic here */
};
