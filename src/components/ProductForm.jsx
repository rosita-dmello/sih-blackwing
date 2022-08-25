import React from "react";
import {
  Grid,
  Typography,
  TextField,
  CircularProgress,
  Box,
  Button,
  InputLabel,
  Input,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TagsInput from "./TagsInput";
import FolderIcon from '@mui/icons-material/Folder';
import {submitProduct} from '../api/products';

function ProductForm() {
  const [categories, setCategories] = React.useState([]);
  const [file, setFile] = React.useState(null);

const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const send = {
      title: data.get('title'),
      description: data.get('description'),
      mrp: data.get('mrp'),
      offeredprice: data.get('offer'),
      availability: data.get('availability'),
      hsncode: data.get('hsncode'),
      categories: categories,
      file: file,
    }
    // submitProduct(send, localStorage.getItem('token')).then((res) => {
    //   console.log(res);
    // }
    console.log(send);
    // );
}

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <AddCircleIcon sx={{ fontSize: 50 }} color="primary" />
      </Grid>
      <Grid item component="form" noValidate onSubmit={handleSubmit}>
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
              id="availability"
              name="availability"
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
          <Grid item className="fieldset">
            <TagsInput
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              selectedTags={(items) => {
                setCategories(items);
              }}
              margin="normal"
              fullWidth
              variant="outlined"
              id="categories"
              name="categories"
              placeholder="Categories"
              label="Categories"
              color="primary"
            />
          </Grid>
          <Grid item className="fieldset">
            <InputLabel>
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                Add Thumbnail:    <FolderIcon />{file ? file.name : "None Selected Yet"}
              </Grid>
              <Input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                style={{ position: "absolute", zIndex: "-1" }}
              />
            </InputLabel>
          </Grid>
          <Grid item className="fieldset" sx={{textAlign: 'center'}}>
            <Button
              type="submit"
              variant="contained"
              >Submit</Button>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductForm;
