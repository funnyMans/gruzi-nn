import mongoose from 'mongoose';

const TruckSchema = new mongoose.Schema({
  truckId: { type: String, required: true, unique: true },
  licensePlate: { type: String, required: true },
  model: { type: String },
  capacity: { type: Number }, // kg
  carrierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrier' },
});

export default mongoose.models.Truck || mongoose.model('Truck', TruckSchema);
