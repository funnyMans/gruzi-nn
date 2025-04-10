import { gql } from '@apollo/client';

export const GET_TERMS_OF_USE = gql`
  query GetTermsOfUse($id: ID!) {
    termsOfUse(id: $id) {
      id
      effectiveDate
      terms {
        general {
          title
          intro
        }
        sections {
          title
          content {
            term
            definition
          }
        }
        acknowledgement
      }
    }
  }
`;
