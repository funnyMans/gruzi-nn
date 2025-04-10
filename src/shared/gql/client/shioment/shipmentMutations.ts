// lib/graphql/brokerMutations.js
import { gql } from '@apollo/client';

export const CREATE_SHIPMENT = gql`
  mutation CreateShipment($input: CreateShipmentInput!) {
    createShipment(input: $input) {
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

export const UPDATE_SHIPMENT_STATUS = gql`
  mutation UpdateShipmentStatus($shipmentId: ID!, $status: ShipmentStatus!) {
    updateShipmentStatus(shipmentId: $shipmentId, status: $status) {
      shipmentId
      status
    }
  }
`;

export const ADD_SHIPMENT_TRACKING_UPDATE = gql`
  mutation AddTrackingUpdate($shipmentId: ID!, $input: TrackingUpdateInput!) {
    addTrackingUpdate(shipmentId: $shipmentId, input: $input) {
      shipmentId
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
