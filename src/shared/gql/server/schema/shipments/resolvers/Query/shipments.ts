import type { QueryResolvers } from './../../../types.generated';
export const shipments: NonNullable<QueryResolvers['shipments']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { Shipment } = _ctx;
  try {
    const shipment = await Shipment.find({});
    if (!shipment) {
      throw new Error(`Brokers not found`);
    }
    return shipment;
  } catch (error: any) {
    throw new Error(error.message);
  }
  /* Implement Query.shipments resolver logic here */
};
