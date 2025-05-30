import dbConnect from '@/shared/lib/mongo/db';
import type { MutationResolvers } from './../../../types.generated';

export const createCarrier: NonNullable<
  MutationResolvers['createCarrier']
> = async (_parent, _arg, _ctx) => {
  const { input: carrier } = _arg;
  const { Carrier } = _ctx;
  try {
    await dbConnect();

    const newCarrier = new Carrier(carrier);
    const createdCarrier = await Carrier.save(newCarrier);
    return createdCarrier;
  } catch (error: any) {
    throw new Error(error.message);
  } /* Implement Mutation.createCarrier resolver logic here */
};
