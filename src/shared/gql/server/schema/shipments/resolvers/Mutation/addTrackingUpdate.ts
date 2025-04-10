import dbConnect from '@/shared/lib/mongo/db';
import type { MutationResolvers } from './../../../types.generated';
export const addTrackingUpdate: NonNullable<
  MutationResolvers['addTrackingUpdate']
> = async (_parent, _arg, _ctx) => {
  const { shipmentId, input: trackingUpdate } = _arg;
  const { Shipment } = _ctx;
  try {
    await dbConnect();

    const updatedShipment = await Shipment.findByIdAndUpdate(
      shipmentId,
      { trackingUpdate }, // Only update the status
      { new: true } // Returns the updated document
    );

    if (!updatedShipment) {
      throw new Error('Shipment not found');
    }

    return updatedShipment;
  } catch (error: any) {
    throw new Error('Error updating shipment: ' + error.message);
  }

  /* Implement Mutation.addTrackingUpdate resolver logic here */
};
