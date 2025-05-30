import { gql } from '@apollo/client';

export const CREATE_CARRIER = gql`
  mutation CreateCarrier($input: CreateCarrierInput!) {
    createCarrier(input: $input) {
      carrierId
      name
      companyId
      legalForm
      contact {
        phone
        email
      }
      address {
        street
        city
        state
        zip
      }
      verified
      rating
    }
  }
`;

export const UPDATE_CARRIER = gql`
  mutation UpdateCarrier($input: UpdateCarrierInput!) {
    updateCarrier(input: $input) {
      carrierId
      name
      companyId
      legalForm
      contact {
        phone
        email
      }
      address {
        street
        city
        state
        zip
      }
      verified
      rating
    }
  }
`;
