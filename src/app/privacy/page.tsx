import {
  GetPrivacyPolicyQuery,
  GetPrivacyPolicyQueryVariables,
} from '@/shared/gql/client/__generated__/graphql';
import { GET_PRIVACY_POLICY } from '@/shared/gql/client/privacy/privacyQueries';

import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
import config from '@/shared/lib/config';
import { Typography } from '@mui/material';
import { createFeatureGate } from '@/shared/lib/flags/flags';

const PrivacyPolicyPage = async () => {
  const res = await query<
    GetPrivacyPolicyQuery,
    GetPrivacyPolicyQueryVariables
  >({
    query: GET_PRIVACY_POLICY,
    variables: {
      id: config.privacy.latestPrivacyPolicy,
    },
  });

  const privacy = res.data.privacyPolicy!;

  const flagsEnabled = await createFeatureGate('my_first_gate')();

  return (
    <div>
      <Typography>
        {flagsEnabled ? 'flags enabled' : 'flags are not available'}
      </Typography>
      <Typography>{privacy.id}</Typography>
      <Typography>{privacy.introduction}</Typography>
      {privacy.sections.map((section) => (
        <div key={section.title}>
          <Typography>{section.title}</Typography>
          <Typography>{section.content}</Typography>
        </div>
      ))}
      <Typography></Typography>
    </div>
  );
};

export default PrivacyPolicyPage;
