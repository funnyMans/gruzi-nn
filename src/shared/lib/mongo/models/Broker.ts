import mongoose from 'mongoose';

const BrokerSchema = new mongoose.Schema({
  brokerId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  contact: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  licenseNumber: { type: String, required: true, unique: true },
  associatedShipments: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Shipment' },
  ],
});

export default mongoose.models.Broker || mongoose.model('Broker', BrokerSchema);
