import mongoose from 'mongoose';
// Define the Terms of Use Schema
const TermsOfUseSchema = new mongoose.Schema(
  {
    effectiveDate: {
      type: Date,
      required: true,
    },
    terms: {
      general: {
        title: { type: String, required: true },
        intro: { type: String, required: true },
      },
      sections: [
        {
          title: { type: String, required: true },
          content: {
            type: [Object], // An array of objects for structured content
            required: true,
          },
        },
      ],
      acknowledgement: { type: String, required: true },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the Terms of Use Model

export default mongoose.models.TermsOfUse ||
  mongoose.model('TermsOfUse', TermsOfUseSchema);
