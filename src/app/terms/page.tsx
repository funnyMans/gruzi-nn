import {
  GetTermsOfUseQuery,
  GetTermsOfUseQueryVariables,
} from '@/shared/gql/client/__generated__/graphql';

import { GET_TERMS_OF_USE } from '@/shared/gql/client/terms/termsQueries';
import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
import config from '@/shared/lib/config';
import { Typography } from '@mui/material';

const TermsOfUsePage = async () => {
  const res = await query<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>({
    query: GET_TERMS_OF_USE,
    variables: {
      id: config.terms.latestTermsOfUse,
    },
  });

  const terms = res.data.termsOfUse!;

  return (
    <div>
      <Typography variant='h1' gutterBottom>
        {terms.id}
      </Typography>
      <Typography variant='h2' gutterBottom>
        {terms.effectiveDate}
      </Typography>
      <Typography variant='body1' gutterBottom>
        {terms.terms.general.title}
      </Typography>
      <Typography variant='body1' gutterBottom>
        {terms.terms.general.intro}
      </Typography>

      {terms.terms.sections.map((section) => (
        <div key={section.title}>
          <Typography variant='h3' gutterBottom>
            {section.title}
          </Typography>

          {section.content.map((content, index) => (
            <div key={index}>
              <Typography variant='body1' gutterBottom>
                {content.definition}
              </Typography>
              <Typography variant='body1' gutterBottom>
                {content.term}
              </Typography>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TermsOfUsePage;
