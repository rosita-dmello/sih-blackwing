import React from "react";
import {
  Grid,
  Typography,
  TextField,
  CircularProgress,
  Box,
  InputLabel,
  Input,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function ProductForm() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <AddCircleIcon sx={{ fontSize: 50 }} />
      </Grid>
      <Grid item component="form">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item className="fieldset">
            <TextField
              id="title"
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item className="fieldset">
            <TextField
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item className="fieldset">
            <TextField
              id="mrp"
              name="mrp"
              label="MRP/unit"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item className="fieldset">
            <TextField
              id="offer"
              name="offer"
              label="OfferPrice/unit"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item className="fieldset">
            <TextField
              id="availablity"
              name="availablity"
              label="Availablity"
              variant="outlined"
              fullWidth
              required
            />
            </Grid>
          <Grid item className="fieldset">
            <TextField
              id="hsncode"
              name="hsncode"
              label="HSNCode"
              variant="outlined"
              fullWidth
              required
            />
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductForm;
