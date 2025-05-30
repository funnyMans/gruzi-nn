import { gql } from '@apollo/client';

export const GET_FAQS = gql`
  query GetFAQs($audience: String, $category: String, $isActive: Boolean) {
    faqs(audience: $audience, category: $category, isActive: $isActive) {
      id
      question
      answer
      category
      audience
      isActive
    }
  }
`;
