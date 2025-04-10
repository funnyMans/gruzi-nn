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

  try {
    const res = await query<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>({
      query: GET_TERMS_OF_USE,
      variables: {
        id: config.terms.latestTermsOfUse,
      },
    });

    const terms = res.data.termsOfUse;

    if (!terms) {
      return <div>Error: Terms of Use not found.</div>;
    }

    return <div>TermsOfUsePage {terms.id}</div>;
  } catch (error) {
    console.error('Failed to fetch Terms of Use:', error);
    return <div>Error: Failed to fetch Terms of Use.</div>;
  }
};

export default TermsOfUsePage;
