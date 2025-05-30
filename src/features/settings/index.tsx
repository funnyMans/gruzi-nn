'use client';

import {
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Divider,
  Button,
  Box,
} from '@mui/material';
import { div as MotionDiv } from 'framer-motion/client';
import { useState } from 'react';

const PlatformSettingsContent = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [productNews, setProductNews] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [messagePermission, setMessagePermission] = useState<
    'all' | 'connections'
  >('all');

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      <Typography variant='h4' gutterBottom>
        Platform Settings
      </Typography>
      <Typography variant='body1' color='text.secondary' marginBottom={4}>
        Manage how you receive alerts, who can contact you, and your general
        platform experience.
      </Typography>

      <Grid container spacing={4}>
        {/* Notifications */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Notifications
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                  />
                }
                label='Enable Email Notifications'
              />
              <Divider sx={{ my: 2 }} />
              <FormControlLabel
                control={
                  <Switch
                    checked={emailAlerts}
                    onChange={(e) => setEmailAlerts(e.target.checked)}
                  />
                }
                label='Receive Alert Summaries'
              />
            </CardContent>
          </Card>
        </Grid>

        {/* News */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                News & Product Updates
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={productNews}
                    onChange={(e) => setProductNews(e.target.checked)}
                  />
                }
                label='Subscribe to Feature Updates'
              />
              <Typography variant='body2' color='text.secondary' mt={1}>
                Get occasional emails about new features, partnerships, and
                platform tips.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Messaging */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Who Can Message You
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={messagePermission === 'all'}
                    onChange={(e) =>
                      setMessagePermission(
                        e.target.checked ? 'all' : 'connections'
                      )
                    }
                  />
                }
                label='Allow All Users to Message Me'
              />
              {messagePermission !== 'all' && (
                <Typography variant='body2' color='text.secondary' mt={1}>
                  Only users you've connected with can send you messages.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Privacy */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card variant='outlined'>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                Privacy Settings
              </Typography>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label='Show Online Status'
              />
              <Divider sx={{ my: 2 }} />
              <FormControlLabel
                control={<Switch />}
                label='Allow Search Engines to Index Profile'
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Save */}
        <Grid size={{ xs: 12 }}>
          <Box textAlign='right' mt={2}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => alert('Settings saved')}
            >
              Save Changes
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MotionDiv>
  );
};

export default PlatformSettingsContent;
