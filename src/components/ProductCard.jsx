import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import {motion} from 'framer-motion';
import ProductView from "./ProductView"; 

export default function ProductCard({ data}) {

  return (
    <Card sx={{ maxWidth: 550 }} component={motion.div} whileHover={{scale:1.1, boxShadow: "0px 0px 4px gray"}}>
      <CardMedia
        component="img"
        height="140"
        image={data.thumbnail}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Sold By: {data.seller}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {data.availability}
        </Typography>
        <br />

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textDecoration: "line-through", fontSize: "12px" }}
            >
              MRP: {data.mrp}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Offered Price: {data.offeredprice}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
