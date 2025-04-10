import {
  GetPrivacyPolicyQuery,
  GetPrivacyPolicyQueryVariables,
} from '@/shared/gql/client/__generated__/graphql';
import { GET_PRIVACY_POLICY } from '@/shared/gql/client/privacy/privacyQueries';

import {
  getClient,
  query,
} from '@/shared/providers/apollo-client/apollo-client-SSR';
import React from 'react';
import config from '@/shared/lib/config';

const PrivacyPolicyPage = async () => {
  const res = await query<
    GetPrivacyPolicyQuery,
    GetPrivacyPolicyQueryVariables
  >({
    query: GET_PRIVACY_POLICY,
    variables: {
      id: config.privacy.latestPrivacyPolicy || '',
    },
  });

  const privacy = res.data.privacyPolicy!;

  return <div>PrivacyPolicyPage {privacy.id}</div>;
};

export default PrivacyPolicyPage;
