import dbConnect from '@/shared/lib/mongo/db';
import type { QueryResolvers } from './../../../types.generated';
export const shipment: NonNullable<QueryResolvers['shipment']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { shipmentId } = _arg;
  const { Shipment } = _ctx;
  try {
    await dbConnect();

    const shipment = await Shipment.findById(shipmentId);
    if (!shipment) {
      throw new Error(`Broker with id ${shipmentId} not found`);
    }
    return shipment;
  } catch (error: any) {
    throw new Error(error.message);
  }

  /* Implement Query.shipment resolver logic here */
};
