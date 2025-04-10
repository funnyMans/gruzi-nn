import type { ContactResolvers } from './../../types.generated';
export const Contact: ContactResolvers = {
  phone: (contact) => contact.phone,
  email: (contact) => contact.email,
};
