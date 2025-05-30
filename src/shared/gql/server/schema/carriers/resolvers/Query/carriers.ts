import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from './../../../types.generated';
export const carriers: NonNullable<QueryResolvers['carriers']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { Carrier } = _ctx;
  try {
    await dbConnect();

    const carriers = await Carrier.find();
    if (!carriers) {
      throw new Error(`carriers not found`);
    }
    return carriers;
  } catch (error: any) {
    throw new Error(error.message);
  }
  /* Implement Query.carriers resolver logic here */
};
