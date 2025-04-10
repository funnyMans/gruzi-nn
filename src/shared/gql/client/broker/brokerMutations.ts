// lib/graphql/brokerMutations.js
import { gql } from '@apollo/client';

export const CREATE_BROKER = gql`
  mutation CreateBroker($input: CreateBrokerInput!) {
    createBroker(input: $input) {
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
    }
  }
`;

export const UPDATE_BROKER = gql`
  mutation UpdateBroker($input: UpdateBrokerInput!) {
    updateBroker(input: $input) {
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
    }
  }
`;
