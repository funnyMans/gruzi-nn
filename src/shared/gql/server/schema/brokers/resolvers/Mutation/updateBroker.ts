import dbConnect from '@/shared/lib/mongo/db';
import type { Broker, MutationResolvers } from './../../../types.generated';
export const updateBroker: NonNullable<
  MutationResolvers['updateBroker']
> = async (_parent, _arg, _ctx) => {
  const { input: brokerUpdate } = _arg;
  const { Broker } = _ctx;

  const { brokerId, name, licenseNumber, address, contact } = brokerUpdate;

  // Prepare the update fields
  const updateFields = {} as Broker;

  if (name) updateFields.name = name;
  if (licenseNumber) updateFields.licenseNumber = licenseNumber;
  if (address) updateFields.address = address;
  if (contact) updateFields.contact = contact;

  try {
    await dbConnect();

    const updatedShipment = await Broker.findOneAndUpdate(
      { brokerId },
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
  } /* Implement Mutation.updateBroker resolver logic here */
};
