import type { MutationResolvers } from './../../../types.generated';
export const updateTermsOfUse: NonNullable<
  MutationResolvers['updateTermsOfUse']
> = async (_parent, _arg, _ctx) => {
  const { id, terms } = _arg;
  const { TermsOfUse } = _ctx;
  try {
    // Find the existing Terms of Use document by ID
    const updatedTermsOfUse = await TermsOfUse.findByIdAndUpdate(
      id,
      { terms: terms }, // Update the 'terms' field with the new data
      { new: true } // Return the updated document
    );

    if (!updatedTermsOfUse) {
      throw new Error('Terms of Use not found');
    }

    // Return the updated Terms of Use document
    return updatedTermsOfUse;
  } catch (err) {
    console.error('Error updating Terms of Use:', err);
    throw new Error('Error updating Terms of Use');
  }
};
