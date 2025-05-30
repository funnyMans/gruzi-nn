import mongoose from 'mongoose';

const ShipmentSchema = new mongoose.Schema({
  shipmentId: { type: String, required: true, unique: true },
  brokerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Broker',
    required: true,
  },
  carrierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrier',
    required: true,
  },
  truckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Truck',
    required: true,
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    required: true,
  },
  cargoDetails: {
    description: { type: String, required: true },
    weight: { type: Number, required: true }, // in kilograms
    volume: { type: Number, required: true }, // in cubic meters
    dimensions: {
      length: { type: Number, required: true }, // in meters
      width: { type: Number, required: true }, // in meters
      height: { type: Number, required: true }, // in meters
    },
    costValue: { type: Number, required: true }, // monetary value
    currency: { type: String, required: true, enum: ['RUR', 'USD', 'EUR'] },
    handlingInstructions: { type: String },
    isHazardous: { type: Boolean, default: false },
    hazardousDetails: {
      unNumber: { type: String },
      class: { type: String },
      packingGroup: { type: String },
    },
    cargoCategory: {
      type: String,
      enum: ['Hazardous', 'Military', 'Perishable', 'General Goods'],
      required: true,
    },
  },
  pickupLocation: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  deliveryLocation: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  status: {
    type: String,
    enum: ['Scheduled', 'In Transit', 'Delivered', 'Cancelled'],
    default: 'Scheduled',
  },
  timestamps: {
    scheduledPickup: { type: Date, required: true },
    actualPickup: { type: Date },
    scheduledDelivery: { type: Date, required: true },
    actualDelivery: { type: Date },
  },
  trackingUpdates: [
    {
      timestamp: { type: Date, required: true },
      location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
      },
      status: { type: String, required: true },
    },
  ],
});

export default mongoose.models.Shipment ||
  mongoose.model('Shipment', ShipmentSchema);
