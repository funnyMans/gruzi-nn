import { GET_ALL_BROKERS } from '@/shared/gql/client/broker/brokerQueries';
import { CREATE_TERMS } from '@/shared/gql/client/terms/termsMutations';
import {
  getClient,
  query,
} from '@/shared/providers/apollo-client/apollo-client-SSR';
import React from 'react';

const DashboardPage = async () => {
  const { data } = await query({
    query: GET_ALL_BROKERS,
  });

  return <div>DashboardPage</div>;
};

export default DashboardPage;
