import mongoose from 'mongoose';

const CarrierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyId: { type: String, required: true, unique: true },
  legalForm: { type: String }, // e.g. LLC, Individual, etc.
  contact: {
    phone: { type: String },
    email: { type: String },
  },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
  },
  verified: { type: Boolean, default: false },
  rating: { type: Number, min: 0, max: 5 },

  drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Driver' }],
  trucks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Truck' }],
});

export default mongoose.models.Carrier ||
  mongoose.model('Carrier', CarrierSchema);
