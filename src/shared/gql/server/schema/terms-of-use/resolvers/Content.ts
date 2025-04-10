import type { ContentResolvers } from './../../types.generated';
export const Content: ContentResolvers = {
  term: (content) => content.term,
  definition: (content) => content.definition,
  /* Implement Content resolver logic here */
};
