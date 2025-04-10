// import {
//   GetPrivacyPolicyQuery,
//   GetPrivacyPolicyQueryVariables,
// } from '@/shared/gql/client/__generated__/graphql';
// import { GET_PRIVACY_POLICY } from '@/shared/gql/client/privacy/privacyQueries';

// import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
// import config from '@/shared/lib/config';

const PrivacyPolicyPage = async () => {
  // const res = await query<
  //   GetPrivacyPolicyQuery,
  //   GetPrivacyPolicyQueryVariables
  // >({
  //   query: GET_PRIVACY_POLICY,
  //   variables: {
  //     id: config.privacy.latestPrivacyPolicy,
  //   },
  // });

  // const privacy = res.data.privacyPolicy!;

  return <div>PrivacyPolicyPage </div>;
};

export default PrivacyPolicyPage;
