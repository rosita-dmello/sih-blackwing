import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.picsum.photos/id/60/200/300.jpg?hmac=OeRKYl1vFStEdR8BEDJW4JRnkE3FdcrGzxxKT_omffg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sample
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: Sample
        </Typography>
      </CardContent>
    </Card>
  );
}
