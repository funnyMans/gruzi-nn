import type { MutationResolvers } from './../../../types.generated';
export const updatePrivacyPolicy: NonNullable<
  MutationResolvers['updatePrivacyPolicy']
> = async (_parent, _arg, _ctx) => {
  const { id, lastUpdated, introduction, sections } = _arg;
  const { PrivacyPolicy } = _ctx;
  try {
    // Save the new Terms of Use document to the database
    const savedPrivacyPolicy = await PrivacyPolicy.findByIdAndUpdate(
      id,
      { lastUpdated, introduction, sections },
      { new: true }
    );

    // Return the saved Terms of Use document
    return savedPrivacyPolicy;
  } catch (err) {
    console.error('Error creating Terms of Use:', err);
    throw new Error('Error creating Terms of Use');
  }

  /* Implement Mutation.updatePrivacyPolicy resolver logic here */
};
