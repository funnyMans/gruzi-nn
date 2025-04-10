import type { SectionResolvers } from './../../types.generated';
export const Section: SectionResolvers = {
  title: (section) => section.title,
  content: (section) => section.content,
  /* Implement Section resolver logic here */
};
