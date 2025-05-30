'use client';
import { Box, Typography } from '@mui/material';
import BasicImageGallery from '@/shared/ui/gallery/BasicImageGallery';

type TechLogo = {
  name: string;
  src: string;
};
const logos: TechLogo[] = [
  { name: 'React', src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
  { name: 'Next.js', src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
  {
    name: 'Apollo',
    src: 'https://cdn.worldvectorlogo.com/logos/apollo-graphql-1.svg',
  },
  { name: 'Stripe', src: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
  {
    name: 'MUI',
    src: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
  },
  { name: 'PayPal', src: 'https://cdn.worldvectorlogo.com/logos/paypal-3.svg' },
  { name: 'Formik', src: 'https://formik.org/images/formik-og.png' },
  {
    name: 'Axios',
    src: 'https://avatars.githubusercontent.com/u/32372333?s=200&v=4',
  },
];

const ToolsImageList: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant='h4' gutterBottom textAlign='center'>
        Tech Stack Gallery of the project
      </Typography>
      <BasicImageGallery items={logos} />
    </Box>
  );
};

export default ToolsImageList;
