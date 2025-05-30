import mongoose from 'mongoose';

const DriverSchema = new mongoose.Schema({
  driverId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true },
  contact: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  carrierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrier' },
  status: {
    type: String,
    enum: ['On Duty', 'Off Duty', 'On Leave'],
    default: 'Off Duty',
  },
});

export default mongoose.models.Driver || mongoose.model('Driver', DriverSchema);
