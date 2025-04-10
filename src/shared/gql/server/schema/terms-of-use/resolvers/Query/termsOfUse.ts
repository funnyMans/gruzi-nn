import type { QueryResolvers } from '../../../types.generated';
export const termsOfUse: NonNullable<QueryResolvers['termsOfUse']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { id } = _arg;
  const { TermsOfUse } = _ctx;

  try {
    const terms = await TermsOfUse.findById(id);
    if (!terms) {
      throw new Error(`Terms of use with id ${id} not found`);
    }
    return terms;
  } catch (error: any) {
    throw new Error(error.message);
  }

  /* Implement Query.getTermsOfUse resolver logic here */
};
