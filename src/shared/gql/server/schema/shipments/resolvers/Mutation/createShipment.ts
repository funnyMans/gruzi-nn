import dbConnect from '@/shared/lib/mongo/db';
import type { MutationResolvers } from './../../../types.generated';

export const createShipment: NonNullable<
  MutationResolvers['createShipment']
> = async (_parent, _arg, _ctx) => {
  const { input: cargo } = _arg;
  const { Shipment } = _ctx;
  try {
    await dbConnect();

    const shipment = await Shipment.save(cargo);
    return shipment;
  } catch (error: any) {
    throw new Error(error.message);
  }
  /* Implement Mutation.createShipment resolver logic here */
};
