'use client';
import {
  Avatar,
  Box,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { div as MotionDiv } from 'framer-motion/client';
import { useState, MouseEvent } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const ProfileMainContent = () => {
  const user = {
    name: 'Emily Carter',
    role: 'Broker',
    company: 'OceanTrade Logistics',
    avatar: 'https://i.pravatar.cc/150?img=45',
    bio: 'Experienced broker specializing in North American freight logistics.',
    email: 'emily.carter@example.com',
  };

  const stats = [
    { label: 'Total Shipments', value: 302 },
    { label: 'Partnered Transporters', value: 45 },
    { label: 'Active Contracts', value: 8 },
  ];

  const paymentMethods = [
    { type: 'Visa', last4: '1234' },
    { type: 'MasterCard', last4: '5678' },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleSettingsClick = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container sx={{ py: 5 }}>
        <Card elevation={4} sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Avatar
                src={user.avatar}
                alt={user.name}
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid size={{ xs: 10, sm: 7 }}>
              <Typography variant='h5'>{user.name}</Typography>
              <Typography variant='subtitle1' color='text.secondary'>
                {user.role} @ {user.company}
              </Typography>
              <Typography variant='body2' mt={1}>
                {user.bio}
              </Typography>
              <Chip
                label={user.role}
                color='primary'
                size='small'
                sx={{ mt: 1 }}
              />
            </Grid>
            <Grid size={{ xs: 2, sm: 1 }} textAlign='right'>
              <IconButton onClick={handleSettingsClick}>
                <SettingsIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => alert('Edit Profile Coming Soon')}>
                  Edit Profile
                </MenuItem>
                <MenuItem
                  onClick={() => alert('Notification Settings Coming Soon')}
                >
                  Notifications
                </MenuItem>
                <MenuItem onClick={() => alert('Privacy Settings Coming Soon')}>
                  Privacy
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={2}>
            {stats.map((stat, i) => (
              <Grid size={{ xs: 12, sm: 4 }} key={i}>
                <MotionDiv
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card sx={{ p: 2 }}>
                    <Typography variant='subtitle2' color='text.secondary'>
                      {stat.label}
                    </Typography>
                    <Typography variant='h6'>{stat.value}</Typography>
                  </Card>
                </MotionDiv>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box>
            <Typography variant='h6' gutterBottom>
              Payment Methods
            </Typography>
            <List>
              {paymentMethods.map((method, index) => (
                <ListItem key={index}>
                  <CreditCardIcon sx={{ mr: 2 }} />
                  <ListItemText
                    primary={`${method.type} **** ${method.last4}`}
                    secondary='Default billing method'
                  />
                </ListItem>
              ))}
            </List>
            <Button
              variant='outlined'
              startIcon={<AddIcon />}
              onClick={() => setIsOpenDialog(true)}
            >
              Add Method
            </Button>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box textAlign='left'>
            <Typography variant='h6' gutterBottom>
              Verification
            </Typography>
            <Button
              variant='contained'
              color='success'
              startIcon={<VerifiedUserIcon />}
              onClick={() => alert('Go to verification page')}
            >
              Go to Verification
            </Button>
          </Box>
        </Card>
        <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)}>
          <DialogTitle>Add Payment Method</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your payment method details.
            </DialogContentText>
            {/* Add form fields here */}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpenDialog(false)}>Cancel</Button>
            <Button onClick={() => setIsOpenDialog(false)}>Add</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </MotionDiv>
  );
};

export default ProfileMainContent;
