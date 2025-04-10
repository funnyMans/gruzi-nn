import {
  GetAllShipmentsQuery,
  GetAllShipmentsQueryVariables,
} from '@/shared/gql/client/__generated__/graphql';
import { GET_ALL_SHIPMENTS } from '@/shared/gql/client/shioment/shipmentQueries';
import { query } from '@/shared/providers/apollo-client/apollo-client-SSR';
import ShipmentViewCard from '@/shared/ui/cards/ShipmentViewCard';
import { Box } from '@mui/material';

const ShipmentList = async () => {
  const res = await query<GetAllShipmentsQuery, GetAllShipmentsQueryVariables>({
    query: GET_ALL_SHIPMENTS,
  });

  const shipments = res.data.shipments;
  return shipments.length ? (
    <Box display={'flex'} flexDirection={'column'} gap={1}>
      {shipments.map((shipment) => (
        <ShipmentViewCard
          shipment={shipment}
          applyBtnText={'accept'}
          dismissBtnText={'dismiss'}
          key={shipment.shipmentId}
        />
      ))}
    </Box>
  ) : (
    <div>No shipments</div>
  );
};

export default ShipmentList;
