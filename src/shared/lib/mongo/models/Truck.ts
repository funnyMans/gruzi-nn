import mongoose from 'mongoose';

const TruckSchema = new mongoose.Schema({
  truckId: { type: String, required: true, unique: true },
  licensePlate: { type: String, required: true, unique: true },
  model: { type: String, required: true },
  capacity: {
    weight: { type: Number, required: true }, // in kilograms
    volume: { type: Number, required: true }, // in cubic meters
  },
  currentLocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Maintenance'],
    default: 'Active',
  },
});

export default mongoose.models.Truck || mongoose.model('Truck', TruckSchema);
