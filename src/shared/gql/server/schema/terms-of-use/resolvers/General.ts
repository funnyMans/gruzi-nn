import type { GeneralResolvers } from './../../types.generated';
export const General: GeneralResolvers = {
  title: (general) => general.title,
  intro: (general) => general.intro,
  /* Implement General resolver logic here */
};
