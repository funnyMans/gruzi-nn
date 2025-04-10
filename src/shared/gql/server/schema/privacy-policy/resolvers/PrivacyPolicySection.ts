import type { PrivacyPolicySectionResolvers } from './../../types.generated';
export const PrivacyPolicySection: PrivacyPolicySectionResolvers = {
  title: (section) => section.title,
  content: (section) => section.content,
  /* Implement PrivacyPolicySection resolver logic here */
};
