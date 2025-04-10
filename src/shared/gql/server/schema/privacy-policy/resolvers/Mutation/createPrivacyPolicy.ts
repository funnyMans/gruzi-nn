import dbConnect from '@/shared/lib/mongo/db';
import type { MutationResolvers } from './../../../types.generated';
export const createPrivacyPolicy: NonNullable<
  MutationResolvers['createPrivacyPolicy']
> = async (_parent, _arg, _ctx) => {
  const { lastUpdated, introduction, sections } = _arg;
  const { PrivacyPolicy } = _ctx;
  try {
    await dbConnect();

    // Create a new Terms of Use document
    const newPrivacyPolicy = PrivacyPolicy({
      lastUpdated: new Date(lastUpdated),
      introduction,
      sections,
    });

    // Save the new Terms of Use document to the database
    const savedPrivacyPolicy = await newPrivacyPolicy.save();

    // Return the saved Terms of Use document
    return savedPrivacyPolicy;
  } catch (err) {
    console.error('Error creating Terms of Use:', err);
    throw new Error('Error creating Terms of Use');
  } /* Implement Mutation.createPrivacyPolicy resolver logic here */
};
