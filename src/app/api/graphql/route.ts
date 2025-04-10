import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import dbConnect from '@/shared/lib/mongo/db';

import { resolvers } from '@/shared/gql/server/schema/resolvers.generated';
import { typeDefs } from '@/shared/gql/server/schema/typeDefs.generated';
import Shipment from '@/shared/lib/mongo/models/Shipment';
import Broker from '@/shared/lib/mongo/models/Broker';
import Driver from '@/shared/lib/mongo/models/Driver';
import Truck from '@/shared/lib/mongo/models/Truck';
import TermsOfUse from '@/shared/lib/mongo/models/TermsOfUse';
import PrivacyPolicy from '@/shared/lib/mongo/models/PrivacyPolicy';

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
});

const handler = startServerAndCreateNextHandler<any, any>(server, {
  context: async () => ({
    db: await dbConnect(),
    Shipment,
    Broker,
    Driver,
    Truck,
    TermsOfUse,
    PrivacyPolicy,
  }),
});

export { handler as GET, handler as POST };
