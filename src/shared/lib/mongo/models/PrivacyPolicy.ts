import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for each section of the Privacy Policy
const PrivacyPolicySectionSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: Schema.Types.Mixed, required: true }, // Content can be a string or an array
  },
  { _id: false } // We don't need _id for nested sections
);

// Define the schema for the Privacy Policy
const PrivacyPolicySchema = new Schema(
  {
    lastUpdated: { type: Date, required: true },
    introduction: { type: String, required: true },
    sections: [PrivacyPolicySectionSchema], // Array of sections
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create and export the model
export default mongoose.models.PrivacyPolicy ||
  mongoose.model('PrivacyPolicy', PrivacyPolicySchema);
