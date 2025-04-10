import { Container } from '@mui/material';
import BigCalendarWithDnD from '@/shared/ui/calendar/big-calendar/BigCalendar';

const DeliveredShipmentsPage = () => {
  return (
    <Container maxWidth='xl' sx={{ marginTop: 2 }}>
      <BigCalendarWithDnD />
    </Container>
  );
};

export default DeliveredShipmentsPage;
