import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
export default function ActionAreaCard(props) {
  return (
    <Card sx={{width:800}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.src}
        />
      </CardActionArea>
    </Card>
  );
}
