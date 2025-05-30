import config from '@/shared/lib/config';
import { Box, Card } from '@mui/material';
import { GoogleMapsEmbed } from '@next/third-parties/google';

const GMapApiKey = config.googleMaps.apiKey;

interface IDirections {
  pickupLocation: any;
  deliveryLocation: any;
}

interface IProps {
  directions: IDirections;
}
const GoogleMap = ({ directions }: IProps) => {
  return (
    <Box width={300} height={200}>
      <Card>
        <GoogleMapsEmbed
          allowfullscreen
          apiKey={GMapApiKey}
          height={200}
          width={300}
          mode='place'
          zoom='13'
          q={`${directions.pickupLocation.city}, ${directions.pickupLocation.address}`}
          //  'Brooklyn+Bridge,New+York,NY'
          // style={'border-radius: 10px'}
        />
      </Card>
    </Box>
  );
};

export default GoogleMap;
