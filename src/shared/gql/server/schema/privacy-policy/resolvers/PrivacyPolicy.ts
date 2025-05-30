import type { PrivacyPolicyResolvers } from './../../types.generated';

export const PrivacyPolicy: PrivacyPolicyResolvers = {
  id: (policy) => policy.id,
  introduction: (policy) => policy.introduction,
  sections: (policy) => policy.sections,
  lastUpdated: (policy) => policy.lastUpdated,
  createdAt: (policy) => policy.createdAt,
  updatedAt: (policy) => policy.updatedAt,

  /* Implement PrivacyPolicy resolver logic here */
};
