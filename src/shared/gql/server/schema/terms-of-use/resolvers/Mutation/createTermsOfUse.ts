import type { MutationResolvers } from './../../../types.generated';
export const createTermsOfUse: NonNullable<
  MutationResolvers['createTermsOfUse']
> = async (_parent, _arg, _ctx) => {
  const { effectiveDate, terms } = _arg;
  const { TermsOfUse } = _ctx;
  try {
    // Create a new Terms of Use document
    const newTermsOfUse = TermsOfUse({
      effectiveDate: new Date(effectiveDate), // Ensure the effectiveDate is a Date object
      terms: terms,
    });

    // Save the new Terms of Use document to the database
    const savedTermsOfUse = await newTermsOfUse.save();

    // Return the saved Terms of Use document
    return savedTermsOfUse;
  } catch (err) {
    console.error('Error creating Terms of Use:', err);
    throw new Error('Error creating Terms of Use');
  }
  /* Implement Mutation.createTermsOfUse resolver logic here */
};
