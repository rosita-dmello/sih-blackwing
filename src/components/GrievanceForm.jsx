import React from "react";
import Layout from "./BidderLayout";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

function GrievanceForm() {
  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center", marginTop: "8px" }}
        spacing={4}
      >
        <Grid item>
          <Typography
            component="h1"
            variant="h5"
            fontWeight="bold"
            sx={{
              mt: 2,
            }}
          >
            SUBMIT GRIEVANCE
          </Typography>
          <hr
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#243665",
              border: "none",
              textAlign: "center",
            }}
          />
          <Typography variant="body1" component="p">
            Please fill in the form below to submit your grievance.
          </Typography>
        </Grid>

        <Grid item>
          <Box component="form">
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <TextField
                  label="Grievance Title"
                  id="title"
                  name="title"
                  variant="outlined"
                  sx={{ width: "300px" }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Grievance Description"
                  id="description"
                  name="description"
                  variant="outlined"
                  sx={{ width: "400px" }}
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>

            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 4 }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default GrievanceForm;
