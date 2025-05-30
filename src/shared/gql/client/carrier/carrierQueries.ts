import { gql } from '@apollo/client';

export const GET_CARRIER_BY_ID = gql`
  query GetCarrierById($carrierId: ID!) {
    carrier(carrierId: $carrierId) {
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
      driverIDs
      truckIDs
    }
  }
`;

export const GET_ALL_CARRIERS = gql`
  query GetAllCarriers {
    carriers {
      carrierId
      name
      companyId
      verified
      rating
    }
  }
`;
