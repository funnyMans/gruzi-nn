import { gql } from '@apollo/client';

// Define the GraphQL query to fetch a truck's details
export const GET_TRUCK = gql`
  query GetTruck($truckId: ID!) {
    truck(truckId: $truckId) {
      truckId
      capacity
      licensePlate
      model
    }
  }
`;
