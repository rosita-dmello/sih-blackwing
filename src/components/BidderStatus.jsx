import { Typography, Grid, Paper } from "@mui/material";
import React from "react";
import Layout from "./BidderLayout";
import { getAppliedTenders } from "../api/tender";
// import { getGrievance } from "../api/common";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function BidderStatus() {
  const [tenders, setTenders] = React.useState([]);
  const [grievances, setGrievances] = React.useState([]);

  React.useEffect(() => {
    getAppliedTenders(
      localStorage.getItem("user")._id,
      localStorage.getItem("token")
    )
      .then((res) => {
        setTenders(res.data.tenders);
      })
      .catch((err) => {
        console.log(err);
      });

    // getGrievance(localStorage.getItem("token")).then(
    //   (res) => {
    //     setGrievances(res.data.grievances);
    //   }
    // );
  }, []);
  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
        sx={{ marginTop: "30px" }}
      >
        <Grid item style={{ textAlign: "center" }}>
          <Typography variant="h4"> Tenders </Typography>
          {/* <hr
            style={{
              width: "20%",
              height: "2px",
              backgroundColor: "#243665",
              border: "none",
              textAlign: "center",
            }}
          /> */}
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {tenders.length > 0 ? (
              tenders.map((tender) => {
                return (
                  <Grid item>
                    <Paper style={{ padding: "10px" }}>
                      <Typography variant="h6">
                        Reference No. -- {tender.tenderreferenceno}{" "}
                      </Typography>
                    </Paper>
                  </Grid>
                );
              })
            ) : (
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
            )}
          </Grid>
        </Grid>
        <Grid item style={{ textAlign: "center" }}>
          <Typography variant="h4"> Grievances </Typography>
        </Grid>
        <Grid item>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
          {grievances.length > 0 ? (
            grievances.map((grievance) => {
              return (
                <Grid item>
                  <Paper style={{ padding: "10px" }}>
                    <Typography variant="h6">
                      Reference No. -- {grievance.grievancereferenceno}{" "}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })
          ) : (
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
                    No Grievances Available
                  </Typography>
                </Grid>
              </Grid>
          )}
          </Grid>
          </Grid>
      </Grid>
    </Layout>
  );
}

export default BidderStatus;
