import type { FAQResolvers } from './../../types.generated';

export const FAQ: FAQResolvers = {
  id: (faqs) => faqs.id.toString(),
  tags: (faqs) => faqs.tags,
  answer: (faqs) => faqs.answer,
  question: (faqs) => faqs.question,
  isActive: (faqs) => faqs.isActive,
  category: (faqs) => faqs.category,
  audience: (faqs) => faqs.audience,
  createdAt: (faqs) => faqs.createdAt,
  updatedAt: (faqs) => faqs.updatedAt,
};
