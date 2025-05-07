'use client';
import React from 'react';

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Favorite from '@mui/icons-material/Favorite';
import ModeComment from '@mui/icons-material/ModeComment';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import { Shipment } from '@/shared/gql/server/schema/types.generated';
import { Button, Container, Typography } from '@mui/material';
import GoogleMap from '../maps/google/GoogleMap';

interface IProps {
  shipment: Shipment;
  applyBtnText: string;
  dismissBtnText: string;
}
const ShipmentViewCard = ({ shipment, applyBtnText }: Partial<IProps>) => {
  const { cargoDetails, deliveryLocation, pickupLocation } = shipment!;
  const {
    cargoCategory,
    costValue,
    currency,
    dimensions,
    volume,
    weight,
    isHazardous,
  } = cargoDetails;

  return (
    <Card
      elevation={1}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 2,
        border: '2px solid gray',
        borderRadius: '16px',
        minHeight: 'fit-content',
      }}
    >
      <CardContent sx={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
        <Container aria-label='cargo-general' sx={{ padding: 1 }}>
          <Box mb={1}>
            <Box>
              <Typography>{pickupLocation.city}</Typography>
              <Typography>{deliveryLocation.city}</Typography>
            </Box>
            <Rating
              name={'rating'}
              value={4}
              size={'small'}
              sx={{ verticalAlign: 'text-top' }}
            />
          </Box>
          <Box
            component='p'
            sx={{ fontSize: 14, color: 'grey.500', mb: '1.275rem' }}
          >
            {cargoDetails.description}
          </Box>
          <Divider sx={{ mt: 1, mb: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button sx={{}}>
              {applyBtnText}
              <ArrowForwardIos sx={{ fontSize: 16 }} />
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 'auto',
                gap: 1.5,
              }}
            >
              <Box
                component='button'
                type={'button'}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'text.secondary',
                  '&:hover, &:focus': {
                    color: 'primary.main',
                    '& svg': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <ModeComment /> 135
              </Box>
              <Button>
                <Favorite
                  sx={{
                    opacity: 0.6,
                    fontSize: '1.125em',
                    verticalAlign: 'middle',
                    '&:first-child': {
                      marginRight: 1,
                    },
                    '&:last-child': {
                      marginLeft: 1,
                    },
                  }}
                />{' '}
                12
              </Button>
            </Box>
          </Box>
        </Container>
        <Container aria-label='cargo-details' sx={{ padding: 1 }}>
          <Box>
            <Typography whiteSpace={'balance'} noWrap>
              Category: {cargoCategory}
            </Typography>
            <Typography>
              Cost: {currency} {costValue}
            </Typography>
            <Typography>Weight: {weight}</Typography>
            <Typography>Volume: {volume} m3</Typography>
            <Typography>
              Dimensions: {dimensions.width} * {dimensions.height} *{' '}
              {dimensions.length} m
            </Typography>
            <Typography>Is hazardous: {isHazardous ? 'Yes' : 'No'}</Typography>
          </Box>
        </Container>
        <Container aria-label='map' maxWidth='xs'>
          <Box display={'flex'} justifyContent={'center'}>
            <GoogleMap directions={{ pickupLocation, deliveryLocation }} />
          </Box>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ShipmentViewCard;
