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

    if (!FAQ) {
      console.error('FAQ model not found in context');
      throw new Error('FAQ model not found');
    }

    const filter: Record<string, any> = {};
    if (args.audience) filter.audience = args.audience;
    if (args.category) filter.category = args.category;
    if (typeof args.isActive === 'boolean') filter.isActive = args.isActive;

    // ✅ Catch DB sort error
    let faqs;
    try {
      faqs = await FAQ.find(filter).sort({ createdAt: -1 });
    } catch (err) {
      console.error('FAQ .sort() failed:', err);
      throw new Error('Sorting FAQs failed');
    }

    return faqs;
  } catch (error: any) {
    console.error('faqs resolver top-level error:', error);
    throw new Error(error.message || 'Failed to fetch FAQs');
  }
};
