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

function TenderView({ tender, set }) {
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
              navigate("/bidder/");
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
              sx={{ borderBottom: "2px solid #243665" }}
            >
              Reference No. -- {tender.tenderreferenceno}
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
              sx={{ marginTop: "20px" }}
            >
              <Grid item>
                Type: <div className="tdview">{tender.tendertype}</div>
              </Grid>
              <Grid item>
                Category:<div className="tdview">{tender.tendercategory}</div>
              </Grid>
              <Grid item>
                Form Of Contract:
                <div className="tdview">{tender.formofcontract}</div>
              </Grid>
              <Grid item>
                Publish Date:
                <div className="tdview">
                  {moment(tender.publishingdate).format("DD-MM-YYYY")}
                </div>
              </Grid>
              <Grid item>
                Publish Time:
                <div className="tdview">{tender.publishingat}</div>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
              style={{ marginTop: "20px", padding: "10px" }}
            >
              <Grid item xs={12} md={6} lg={6}>
                <Card sx={{ width: "100%" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      backgroundColor: "#243665",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Dependencies
                  </Typography>
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Grid item>
                        MultiCurrency Allowed:
                        <div style={{ textAlign: "center" }}>
                          {tender.allowmulticurrency ? "Yes" : "No"}
                        </div>
                      </Grid>
                      <Grid item>
                        NIT Verify:
                        <div style={{ textAlign: "center" }}>
                          {tender.nitverify ? "Yes" : "No"}
                        </div>
                      </Grid>
                      <Grid item>
                        Exemption Allowed:
                        <div style={{ textAlign: "center" }}>
                          {tender.allowexemption ? "Yes" : "No"}
                        </div>
                      </Grid>
                      <Grid item>
                        Item Wise Evaluation:
                        <div style={{ textAlign: "center" }}>
                          {tender.allowitemwiseevaluation ? "Yes" : "No"}
                        </div>
                      </Grid>
                    </Grid>
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
                      backgroundColor: "#243665",
                      textAlign: "center",
                      color: "white",
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
                    <div className="cat3" style={{ marginTop: "10px" }}>
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

            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              {tender.boq && (
                <Grid item sm={12} md={6} lg={6}>
                  <Card sx={{ width: "100%" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        backgroundColor: "#243665",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      BOQ
                    </Typography>
                    <CardContent>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        {tender.boq.map((item, index) => {
                          return (
                            <Grid item key={index}>
                              <Paper
                                elevation={6}
                                style={{ padding: "10px", margin: "10px" }}
                              >
                                <Typography variant="h8" component="h5">
                                  Product: {item.itemdescription}
                                </Typography>
                                <Typography variant="h8" component="h5">
                                  Quantity: {item.quantity}
                                </Typography>
                                <Typography variant="h8" component="h5">
                                  Units: {item.units}
                                </Typography>
                                <Typography variant="h8" component="h5">
                                  Price: Rs. {item.rate}
                                </Typography>
                              </Paper>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              )}
              <Grid item sm={12} md={6} lg={6}>
                <Card sx={{ width: "100%" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      backgroundColor: "#243665",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Other Details
                  </Typography>
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      <Grid item>
                        Account Type:
                        <div style={{ textAlign: "center" }}>
                          {tender.accounttypehead}
                        </div>
                      </Grid>
                      <Grid item>
                        Bid Openers:
                        <div style={{ textAlign: "center" }}>
                          {tender.noofbidopeners}
                        </div>
                      </Grid>
                      <Grid item>
                        Product Category:
                        <div style={{ textAlign: "center" }}>
                          {tender.productcategory}
                        </div>
                      </Grid>
                      <Grid item>
                        Pre Bid Meeting Addr:
                        <div style={{ textAlign: "center" }}>
                          {tender.prebidmeetingadress}
                        </div>
                      </Grid>
                      <Grid item>
                        Tender Fee:
                        <div style={{ textAlign: "center" }}>
                          Rs. {tender.tenderfee}
                        </div>
                      </Grid>
                      <Grid item>
                        EMD Amount:
                        <div style={{ textAlign: "center" }}>
                          Rs. {tender.emdamount}
                        </div>
                      </Grid>
                      <Grid item>
                        EMD Payable To:
                        <div style={{ textAlign: "center" }}>
                          {tender.emdfeepayableto}
                        </div>
                      </Grid>
                      <Grid item>
                        EMD Payable At:
                        <div style={{ textAlign: "center" }}>
                          {tender.emdfeepayableat}
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "20px" }}
                  onClick={() => {
                    set(tender);
                    navigate("/bidder/apply");
                  }}
                >
                  Submit Bid
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TenderView;
