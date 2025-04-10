import { gql } from '@apollo/client';

export const CREATE_TERMS = gql`
  mutation CreateTermsOfUse($effectiveDate: String!, $terms: TermsInput!) {
    createTermsOfUse(effectiveDate: $effectiveDate, terms: $terms) {
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

export const UPDATE_TERMS = gql`
  mutation UpdateTermsOfUse($id: ID!, $terms: TermsInput!) {
    updateTermsOfUse(id: $id, terms: $terms) {
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
