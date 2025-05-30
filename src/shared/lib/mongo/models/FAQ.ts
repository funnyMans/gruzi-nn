import mongoose from 'mongoose';

const FAQSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ['Shipping', 'Tracking', 'Payments', 'Account', 'General'],
      default: 'General',
    },
    tags: [{ type: String }], // Optional keywords for filtering or search
    audience: {
      type: String,
      enum: ['customer', 'courier', 'admin', 'all'],
      default: 'all',
    },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.FAQ || mongoose.model('FAQ', FAQSchema);
