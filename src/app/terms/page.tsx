// import {
//   GetTermsOfUseQuery,
//   GetTermsOfUseQueryVariables,
// } from '@/shared/gql/client/__generated__/graphql';

// import { GET_TERMS_OF_USE } from '@/shared/gql/client/terms/termsQueries';
// import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
// import config from '@/shared/lib/config';

const TermsOfUsePage = async () => {
  // const res = await query<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>({
  //   query: GET_TERMS_OF_USE,
  //   variables: {
  //     id: config.terms.latestTermsOfUse,
  //   },
  // });

  // const terms = res.data.termsOfUse!;

  return <div>TermsOfUsePage</div>;
};

export default TermsOfUsePage;
