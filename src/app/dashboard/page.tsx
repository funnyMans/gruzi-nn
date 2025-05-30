import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const kpis = [
  { label: 'Total Shipments', value: 124 },
  { label: 'On-Time Deliveries', value: '92%' },
  { label: 'Delayed Shipments', value: 8 },
  { label: 'Pending Invoices', value: 5 },
];

const activeShipments = [
  { id: 'SH001', status: 'In Transit', from: 'Chicago', to: 'Dallas' },
  { id: 'SH002', status: 'Delayed', from: 'NYC', to: 'Miami' },
];

const availableLoads = [
  { id: 'LD101', from: 'Atlanta', to: 'Houston', weight: '15,000 lbs' },
  { id: 'LD102', from: 'Denver', to: 'Seattle', weight: '22,000 lbs' },
];

const messages = [
  { from: 'Carrier A', text: 'Running 2 hours late.' },
  { from: 'Shipper X', text: 'Can we reschedule delivery?' },
];

const carriers = [
  { name: 'Carrier A', rating: 4.5 },
  { name: 'Carrier B', rating: 4.2 },
];

const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* KPIs */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {kpis.map((kpi, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant='h6'>{kpi.label}</Typography>
                <Typography variant='h5' fontWeight='bold'>
                  {kpi.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Active Shipments & Available Loads */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Active Shipments
              </Typography>
              <List>
                {activeShipments.map((s) => (
                  <ListItem key={s.id}>
                    <ListItemText
                      primary={`${s.id}: ${s.from} → ${s.to}`}
                      secondary={`Status: ${s.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Available Loads
              </Typography>
              <List>
                {availableLoads.map((l) => (
                  <ListItem key={l.id}>
                    <ListItemText
                      primary={`${l.id}: ${l.from} → ${l.to}`}
                      secondary={`Weight: ${l.weight}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Messages & Carriers */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Messages
              </Typography>
              <List>
                {messages.map((msg, i) => (
                  <ListItem key={i}>
                    <ListItemText primary={msg.text} secondary={msg.from} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Carriers
              </Typography>
              <List>
                {carriers.map((c, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={c.name}
                      secondary={`Rating: ${c.rating}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
