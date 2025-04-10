import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from './../../../types.generated';
export const broker: NonNullable<QueryResolvers['broker']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { brokerId } = _arg;
  const { Broker } = _ctx;
  try {
    await dbConnect();

    const broker = await Broker.findById(brokerId);
    if (!broker) {
      throw new Error(`Broker with id ${brokerId} not found`);
    }
    return broker;
  } catch (error: any) {
    throw new Error(error.message);
  }
  /* Implement Query.broker resolver logic here */
};
