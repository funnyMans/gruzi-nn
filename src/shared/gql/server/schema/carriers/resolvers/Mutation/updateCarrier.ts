import dbConnect from '@/shared/lib/mongo/db';
import type { Carrier, MutationResolvers } from './../../../types.generated';
export const updateCarrier: NonNullable<
  MutationResolvers['updateCarrier']
> = async (_parent, _arg, _ctx) => {
  const { input: carrierUpdate } = _arg;
  const { Carrier } = _ctx;

  const { carrierId, name, address, contact, rating, verified, legalForm } =
    carrierUpdate;

  // Prepare the update fields
  const updateFields = {} as Carrier;

  if (name) updateFields.name = name;
  if (address) updateFields.address = address;
  if (contact) updateFields.contact = contact;
  if (rating) updateFields.rating = rating;
  if (verified) updateFields.verified = verified;
  if (legalForm) updateFields.legalForm = legalForm;

  try {
    await dbConnect();

    const updatedShipment = await Carrier.findOneAndUpdate(
      { carrierId },
      { $set: updateFields },
      {
        returnDocument: 'after', // Return the updated document (use 'before' for the original document)
      } // Returns the updated document
    );

    if (!updatedShipment) {
      throw new Error('Shipment not found');
    }

    return updatedShipment;
  } catch (error: any) {
    throw new Error('Error updating shipment: ' + error.message);
  } /* Implement Mutation.updateCarrier resolver logic here */
};
