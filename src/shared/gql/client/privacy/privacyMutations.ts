import { gql } from '@apollo/client';

export const CREATE_PRIVACY_POLICY = gql`
  mutation CreatePrivacyPolicy(
    $lastUpdated: String!
    $introduction: String!
    $sections: [PrivacyPolicySectionInput!]!
  ) {
    createPrivacyPolicy(
      lastUpdated: $lastUpdated
      introduction: $introduction
      sections: $sections
    ) {
      id
      lastUpdated
      introduction
      sections {
        title
        content
      }
    }
  }
`;

export const UPDATE_PRIVACY_POLICY = gql`
  mutation UpdatePrivacyPolicy(
    $id: ID!
    $lastUpdated: String!
    $introduction: String!
    $sections: [PrivacyPolicySectionInput!]!
  ) {
    updatePrivacyPolicy(
      id: $id
      lastUpdated: $lastUpdated
      introduction: $introduction
      sections: $sections
    ) {
      id
      lastUpdated
      introduction
      sections {
        title
        content
      }
    }
  }
`;
