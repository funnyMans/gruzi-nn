import dbConnect from '@/shared/lib/mongo/db';
import type { MutationResolvers } from './../../../types.generated';
export const updateShipmentStatus: NonNullable<
  MutationResolvers['updateShipmentStatus']
> = async (_parent, _arg, _ctx) => {
  const { shipmentId, status } = _arg;
  const { Shipment } = _ctx;

  try {
    await dbConnect();

    const updatedShipment = await Shipment.findByIdAndUpdate(
      shipmentId,
      { status }, // Only update the status
      { new: true } // Returns the updated document
    );

    if (!updatedShipment) {
      throw new Error('Shipment not found');
    }

    return updatedShipment;
  } catch (error: any) {
    throw new Error('Error updating shipment: ' + error.message);
  }
  /* Implement Mutation.updateShipmentStatus resolver logic here */
};
