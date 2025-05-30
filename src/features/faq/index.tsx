import {
  GetFaQsQuery,
  GetFaQsQueryVariables,
} from '@/shared/gql/client/__generated__/graphql';
import { GET_FAQS } from '@/shared/gql/client/faq/faqQueries';
import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

const FaqListContainer = async () => {
  const { data } = await query<GetFaQsQuery, GetFaQsQueryVariables>({
    query: GET_FAQS,
    variables: {},
  });

  const faqs = data?.faqs;

  if (!faqs || faqs.length === 0) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant='h6'>No FAQs available.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant='h4' sx={{ mb: 3 }}>
        Frequently Asked Questions
      </Typography>

      <Grid container spacing={2}>
        {faqs.map((faq) => (
          <Grid
            key={faq?.id}
            sx={{
              flexBasis: '100%',
              flexGrow: 1,
            }}
          >
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='subtitle1'>{faq?.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='body2'>{faq?.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FaqListContainer;
