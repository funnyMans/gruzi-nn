// lib/graphql/brokerQueries.js
import { gql } from '@apollo/client';

export const GET_BROKER_BY_ID = gql`
  query GetBrokerById($brokerId: ID!) {
    broker(brokerId: $brokerId) {
      brokerId
      name
      licenseNumber
      address {
        street
        city
        state
        zip
      }
      contact {
        phone
        email
      }
      associatedShipments
    }
  }
`;

export const GET_ALL_BROKERS = gql`
  query GetAllBrokers {
    brokers {
      brokerId
      name
      licenseNumber
      contact {
        phone
        email
      }
    }
  }
`;
