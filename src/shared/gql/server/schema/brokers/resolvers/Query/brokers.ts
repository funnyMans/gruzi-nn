import type { QueryResolvers } from './../../../types.generated';
export const brokers: NonNullable<QueryResolvers['brokers']> = async (
  _parent,
  _arg,
  _ctx
) => {
  const { Broker } = _ctx;
  try {
    const brokers = await Broker.find();
    if (!brokers) {
      throw new Error(`Brokers not found`);
    }
    return brokers;
  } catch (error: any) {
    throw new Error(error.message);
  }
  /* Implement Query.brokers resolver logic here */
};
