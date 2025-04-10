import dbConnect from '@/shared/lib/mongo/db';
import type { MutationResolvers } from './../../../types.generated';
export const createBroker: NonNullable<
  MutationResolvers['createBroker']
> = async (_parent, _arg, _ctx) => {
  const { input: broker } = _arg;
  const { Broker } = _ctx;
  try {
    await dbConnect();

    const shipment = await Broker.save(broker);
    return shipment;
  } catch (error: any) {
    throw new Error(error.message);
  } /* Implement Mutation.createBroker resolver logic here */
};
