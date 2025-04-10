import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { CardActionArea, CardActions } from '@mui/material';

interface IProps {
  imgSrc: string;
  title: string;
  description: string;
  applyBtnText: string;
  dismissBtnText: string;
}
const ReviewCard = ({
  imgSrc,
  title,
  description,
  applyBtnText,
  dismissBtnText,
}: Partial<IProps>) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: 1,
        borderRadius: 5,
      }}
    >
      <Image
        src={imgSrc || 'https://jkkm.info/ui/images/awards/victory.png'}
        width={150}
        height={150}
        alt='gago'
      />
      <CardContent
        sx={{
          maxWidth: 300,
        }}
      >
        <Typography variant={'h5'}>{title}</Typography>
        <Typography
          variant={'overline'}
          gutterBottom
          sx={{ wordBreak: 'break-word' }}
        >
          {description}
        </Typography>
        <CardActions>
          <Button variant='contained'>{applyBtnText}</Button>
          <Button>{dismissBtnText}</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
