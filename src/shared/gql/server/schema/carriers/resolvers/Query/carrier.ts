import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from './../../../types.generated';
export const carrier: NonNullable<QueryResolvers['carrier']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { carrierId } = _arg;
  const { Carrier } = _ctx;
  try {
    await dbConnect();

    const carrier = await Carrier.findById(carrierId);
    if (!carrier) {
      throw new Error(`carrier with id ${carrierId} not found`);
    }
    return carrier;
  } catch (error: any) {
    throw new Error(error.message);
  }
  /* Implement Query.carrier resolver logic here */
};
