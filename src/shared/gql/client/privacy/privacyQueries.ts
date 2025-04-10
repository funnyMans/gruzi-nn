import { gql } from '@apollo/client';
export const GET_PRIVACY_POLICY = gql`
  query getPrivacyPolicy($id: ID!) {
    privacyPolicy(id: $id) {
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
