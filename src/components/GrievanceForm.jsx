import React from "react";
import Layout from "./BidderLayout";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { postGrivance } from "../api/common";
import { getAppliedTenders } from "../api/tender";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function GrievanceForm() {
  const [tenders, setTenders] = React.useState([]);
  const [selectedTender, setSelectedTender] = React.useState(null);

  React.useEffect(() => {
    getAppliedTenders(
      localStorage.getItem("user")._id,
      localStorage.getItem("token")
    )
      .then((res) => {
        setTenders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!selectedTender) {
    if (tenders.length === 0) {
      return (
        <Layout>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ marginTop: "50px" }}
          >
            <Grid item>
              <ErrorOutlineIcon sx={{ fontSize: 50 }} color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="h5" gutterBottom>
                No Tenders Allotted
              </Typography>
            </Grid>
          </Grid>
        </Layout>
      );
    }
    tenders.map((tender) => {
      return (
        <Layout>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ marginTop: "50px" }}
          >
            <Grid item>
              <Button
                variant="outline-primary"
                onClick={() => setSelectedTender(tender)}
              >
                {tender.title}
              </Button>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {tenders.map((tender) => {
                  return (
                    <Grid item key={tender._id}>
                      <Button
                        variant="outline-primary"
                        onClick={() => setSelectedTender(tender)}
                      >
                        {tender.title}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Layout>
      );
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    postGrivance(
      data.get("title"),
      data.get("description"),
      selectedTender._id,
      localStorage.getItem("token")
    ).then((res) => {
      console.log(res);
      setSelectedTender(null);
    }).catch((err) => {
      console.log(err);
    })
  }
  


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
          <Box component="form" onSubmit={handleSubmit}>
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
                  sx={{ width: "400px" }}
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
