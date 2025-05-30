import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from '../../../types.generated';

export const privacyPolicy: NonNullable<
  QueryResolvers['privacyPolicy']
> = async (_parent, _arg, _ctx) => {
  const { id } = _arg;
  const { PrivacyPolicy } = _ctx;

  try {
    await dbConnect();

    const policy = await PrivacyPolicy.findById(id);
    if (!policy) {
      throw new Error(`Policy with id ${id} not found`);
    }
    return policy;
  } catch (error: any) {
    throw new Error(error.message);
  }
  /* Implement Query.getPrivacyPolicy resolver logic here */
};
