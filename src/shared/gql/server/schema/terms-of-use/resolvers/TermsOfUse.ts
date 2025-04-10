import type { TermsOfUseResolvers } from './../../types.generated';
export const TermsOfUse: TermsOfUseResolvers = {
  id: (terms) => terms.id,
  effectiveDate: (terms) => terms.effectiveDate,
  terms: (terms) => terms.terms,

  /* Implement TermsOfUse resolver logic here */
};
