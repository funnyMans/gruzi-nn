import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from './../../../types.generated';

export const faqs: NonNullable<QueryResolvers['faqs']> = async (
  _parent,
  args,
  _ctx
) => {
  const { FAQ } = _ctx;
  try {
    await dbConnect();

    const filter: Record<string, any> = {};
    if (args.audience) filter.audience = args.audience;
    if (args.category) filter.category = args.category;
    if (typeof args.isActive === 'boolean') filter.isActive = args.isActive;

    const faqs = await FAQ.find(filter).sort({ createdAt: -1 });

    return faqs;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to fetch FAQs');
  }
};
