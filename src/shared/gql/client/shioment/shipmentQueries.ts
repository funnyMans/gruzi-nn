// lib/graphql/brokerQueries.js
import { gql } from '@apollo/client';

export const GET_SHIPMENT_BY_ID = gql`
  query GetShipmentById($shipmentId: ID!) {
    shipment(shipmentId: $shipmentId) {
      shipmentId
      brokerId
      driverId
      truckId
      cargoDetails {
        description
        weight
        volume
        dimensions {
          length
          width
          height
        }
        costValue
        currency
        handlingInstructions
        isHazardous
        hazardousDetails {
          unNumber
          class
          packingGroup
        }
        cargoCategory
      }
      pickupLocation {
        address
        city
        state
        zip
      }
      deliveryLocation {
        address
        city
        state
        zip
      }
      status
      timestamps {
        scheduledPickup
        actualPickup
        scheduledDelivery
        actualDelivery
      }
      trackingUpdates {
        timestamp
        location {
          latitude
          longitude
        }
        status
      }
    }
  }
`;

export const GET_SHIPMENTS_BY_STATUS = gql`
  query GetShipmentsByStatus($status: ShipmentStatus) {
    shipments(status: $status) {
      shipmentId
      brokerId
      driverId
      truckId
      cargoDetails {
        description
        weight
        volume
      }
      pickupLocation {
        address
        city
        state
        zip
      }
      deliveryLocation {
        address
        city
        state
        zip
      }
      status
      timestamps {
        scheduledPickup
        actualPickup
        scheduledDelivery
        actualDelivery
      }
      trackingUpdates {
        timestamp
        location {
          latitude
          longitude
        }
        status
      }
    }
  }
`;

export const GET_ALL_SHIPMENTS = gql`
  query GetAllShipments {
    shipments {
      shipmentId
      brokerId
      driverId
      truckId
      cargoDetails {
        description
        weight
        volume
        dimensions {
          length
          width
          height
        }
        costValue
        currency
        handlingInstructions
        isHazardous
        hazardousDetails {
          unNumber
          class
          packingGroup
        }
        cargoCategory
      }
      pickupLocation {
        address
        city
        state
        zip
      }
      deliveryLocation {
        address
        city
        state
        zip
      }
      status
      timestamps {
        scheduledPickup
        actualPickup
        scheduledDelivery
        actualDelivery
      }
      trackingUpdates {
        timestamp
        location {
          latitude
          longitude
        }
        status
      }
    }
  }
`;
