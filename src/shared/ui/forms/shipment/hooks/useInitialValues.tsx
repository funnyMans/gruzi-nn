'use client';

const useShipmentInitialValues = () => {
  return {
    shipmentId: '',
    brokerId: '',
    driverId: '',
    truckId: '',
    status: '',
    description: '',
    weight: 0,
    volume: 0,
    dimensions: { length: 0, width: 0, height: 0 },
    costValue: 0,
    currency: 'USD',
    isHazardous: false,
    cargoCategory: 'GENERAL_GOODS',
    pickupLocation: { address: '', city: '', state: '', zip: '' },
    deliveryLocation: { address: '', city: '', state: '', zip: '' },
    hazardousDetails: { unNumber: '', class: '', packingGroup: '' },
    timestamps: { scheduledPickup: '', scheduledDelivery: '' },
    trackingUpdates: [],
  };
};

export default useShipmentInitialValues;
