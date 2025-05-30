import {
  GetPrivacyPolicyQuery,
  GetPrivacyPolicyQueryVariables,
} from '@/shared/gql/client/__generated__/graphql';
import { GET_PRIVACY_POLICY } from '@/shared/gql/client/privacy/privacyQueries';
import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
import config from '@/shared/lib/config';
import { Typography, Box, Container, Paper, Divider } from '@mui/material';

const PrivacyPolicyPage = async () => {
  // Fetch the latest privacy policy data
  const response = await query<
    GetPrivacyPolicyQuery,
    GetPrivacyPolicyQueryVariables
  >({
    query: GET_PRIVACY_POLICY,
    variables: {
      id: config.privacy.latestPrivacyPolicy,
    },
  });

  const privacyPolicy = response.data.privacyPolicy!;

  return (
    <Container maxWidth='md' sx={{ paddingY: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        {/* Uncomment the following block if feature flags are needed */}
        {/* <Typography align="center" color="textSecondary" gutterBottom>
          {flagsEnabled ? 'Flags enabled' : 'Flags are not available'}
        </Typography> */}

        <Typography variant='h3' align='center' gutterBottom>
          Privacy Policy
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant='subtitle1' color='textSecondary' gutterBottom>
          {privacyPolicy.introduction}
        </Typography>
        <Divider sx={{ marginY: 3 }} />
        {privacyPolicy.sections.map((section, index) => (
          <Box
            key={section.title}
            sx={{
              marginBottom: 4,
              padding: 2,
              backgroundColor: index % 2 === 0 ? 'grey.100' : 'white',
              borderRadius: 2,
            }}
          >
            <Typography variant='h5' gutterBottom>
              {section.title}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {section.content}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Container>
  );
};

export default PrivacyPolicyPage;
