import {
  GetTermsOfUseQuery,
  GetTermsOfUseQueryVariables,
} from '@/shared/gql/client/__generated__/graphql';

import { GET_TERMS_OF_USE } from '@/shared/gql/client/terms/termsQueries';
import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
import config from '@/shared/lib/config';
import { Typography, Box, Container, Paper, Divider } from '@mui/material';
import { format, isValid } from 'date-fns'; // Import isValid from date-fns

const TermsOfUsePage = async () => {
  const res = await query<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>({
    query: GET_TERMS_OF_USE,
    variables: {
      id: config.terms.latestTermsOfUse,
    },
  });

  const terms = res.data.termsOfUse!;

  // Convert the effectiveDate from milliseconds string to a valid date
  const effectiveDate = new Date(parseInt(terms.effectiveDate, 10));
  const formattedDate = isValid(effectiveDate)
    ? format(effectiveDate, 'MMMM dd, yyyy')
    : 'Invalid Date';

  return (
    <Container maxWidth='md' sx={{ paddingY: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant='h6' color='textSecondary' gutterBottom>
          Effective Date: <strong>{formattedDate}</strong>
        </Typography>
        <Divider sx={{ marginY: 3 }} />
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant='h4' gutterBottom>
            {terms.terms.general.title}
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            {terms.terms.general.intro}
          </Typography>
        </Box>
        {terms.terms.sections.map((section) => (
          <Box
            key={section.title}
            sx={{
              marginBottom: 4,
              padding: 2,
              backgroundColor: 'grey.100',
              borderRadius: 2,
            }}
          >
            <Typography variant='h5' gutterBottom>
              {section.title}
            </Typography>
            {section.content.map((content, index) => (
              <Box key={index} sx={{ marginBottom: 2 }}>
                <Typography variant='body1' color='textSecondary' gutterBottom>
                  {content.definition}
                </Typography>
                <Typography variant='body1' color='textSecondary'>
                  {content.term}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Paper>
    </Container>
  );
};

export default TermsOfUsePage;
