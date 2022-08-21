import React from "react";
import {
  Grid,
  Button,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function TenderView({ tender }) {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/bidder/tender/");
            }}
          >
            Back
          </Button>
        </Grid>
        <Grid item style={{ padding: "20px", marginLeft: "30px" }}>
          <Paper elevation={6} style={{ padding: "10px" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ borderBottom: "2px solid lightblue" }}
            >
              Reference No. -- {tender.tenderreferenceno}
            </Typography>
            <div className="cat3" style={{ marginTop: "20px" }}>
              <div>
                Type: <div className="tdview">{tender.tendertype}</div>
              </div>
              <div>
                Category:<div className="tdview">{tender.tendercategory}</div>
              </div>
              <div>
                Form Of Contract:
                <div className="tdview">{tender.formofcontract}</div>
              </div>
              <div>
                Publish Date:
                <div className="tdview">
                  {moment(tender.publishingdate).format("DD-MM-YYYY")}
                </div>
              </div>
              <div>
                Publish Time:
                <div className="tdview">{tender.publishingat}</div>
              </div>
            </div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
              style={{ marginTop: "20px" }}
            >
              <Grid item xs={12} md={6} lg={6}>
                <Card sx={{ width: "100%" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      backgroundColor: "lightskyblue",
                      textAlign: "center",
                    }}
                  >
                    Dependencies
                  </Typography>
                  <CardContent>
                    <div className="cat3">
                      <div>
                        MultiCurrency Allowed:{" "}
                        <div style={{ textAlign: "center" }}>
                          {" "}
                          {tender.allowmulticurrency ? "Yes" : "No"}
                        </div>
                      </div>
                      <div>
                        NIT Verify:{" "}
                        <div style={{ textAlign: "center" }}>
                          {tender.nitverify ? "Yes" : "No"}
                        </div>
                      </div>
                      <div>
                        Exemption Allowed:{" "}
                        <div style={{ textAlign: "center" }}>
                          {tender.allowexemption ? "Yes" : "No"}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Card sx={{ width: "100%" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      backgroundColor: "lightskyblue",
                      textAlign: "center",
                    }}
                  >
                    Date & Time To Note
                  </Typography>
                  <CardContent>
                    <div className="cat3">
                      <div>
                        Pre-Biding Date:
                        <div style={{ textAlign: "center" }}>
                          {moment(tender.prebidmeetingdate).format(
                            "DD-MM-YYYY"
                          )}
                        </div>
                      </div>
                      <div>
                        Pre-Biding Time:
                        <div style={{ textAlign: "center" }}>
                          {tender.prebidmeetingat}
                        </div>
                      </div>
                    </div>
                    <div className="cat3" style={{marginTop: '10px'}}>
                      <div>
                        Bid Submission Start Date:
                        <div style={{ textAlign: "center" }}>
                          {moment(tender.bidsubmissionstartdate).format(
                            "DD-MM-YYYY"
                          )}
                        </div>
                      </div>
                      <div>
                        Bid Submission End Date:
                        <div style={{ textAlign: "center" }}>
                          {moment(tender.bidsubmissionclosingdate).format(
                            "DD-MM-YYYY"
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TenderView;
