import {
  GetTermsOfUseQuery,
  GetTermsOfUseQueryVariables,
} from '@/shared/gql/client/__generated__/graphql';

import { GET_TERMS_OF_USE } from '@/shared/gql/client/terms/termsQueries';
import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
import React from 'react';
import config from '@/shared/lib/config';

const TermsOfUsePage = async () => {
  if (!config.terms.latestTermsOfUse) {
    return (
      <div>Error: Terms of Use ID is not set in environment variables.</div>
    );
  }

  const res = await query<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>({
    query: GET_TERMS_OF_USE,
    variables: {
      id: config.terms.latestTermsOfUse,
    },
  });

  const terms = res.data.termsOfUse!;

  return <div>TermsOfUsePage {terms.id}</div>;
};

export default TermsOfUsePage;
