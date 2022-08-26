import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Avatar,
  Typography,
  CardContent,
  Grid,
  Card,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import _ from "lodash";
import TagsInput from "./TagsInput";
import { useEffect } from "react";

const FinancialBid = ({ tender }) => {
  const boq = tender.boq;
  const [bidderOffer, setBidderOffer] = useState([]);
  let handleChange = (i, e) => {
    let newFormValues = [...bidderOffer];
    newFormValues[i] = {};
    newFormValues[i][e.target.name] = e.target.value;
    console.log(newFormValues)
    setBidderOffer(newFormValues);
  };

  // useEffect(() => {
  //   if (tender) {
  //     setBoq(tender.boq)
  //   }
    
  // }, [])
  return (
    <Grid
      container
      sx={{
        p: 5,
      }}
      spacing={2}
    >
      {boq && boq.map((item, index) => {
        return (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    border: "1px solid #243665",
                    padding: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={"bold"} color="primary">
                    {item.itemdescription}
                  </Typography>
                  <Grid container spacing={1}>
                    {["rate", "quantity", "units"].map((key) => {
                      return (
                        <Grid item xs={12}>
                          <Grid container spacing={1} sx={{ mt: "0.05rem" }}>
                            <Grid item xs={4}>
                              <Typography variant="body1">
                                {_.startCase(key)}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body1" fontWeight={"bold"}>
                                {item[key]}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                    })}
                    {item.warranty && (
                      <Grid item>
                        <Grid container spacing={1} sx={{ mt: "0.05rem" }}>
                          <Grid item xs={4}>
                            <Typography variant="body1">
                              {"Warranty Requirement"}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body1" fontWeight={"bold"}>
                              {item.warranty}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                    {item.preferredmodels && (
                      <Grid item xs={12}>
                        <Grid container spacing={1} sx={{ mt: "0.05rem" }}>
                          <Grid item xs={4}>
                            <Typography variant="body1">
                              Preferred Models
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant="body1" fontWeight={"bold"}>
                              {item.preferredmodels}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                   
                    <Grid item xs={6} >
                      <TextField
                        type="number"
                        name="unitrate"
                        label="Unit Rate"
                        // value={
                        //   bidderOffer[index] &&  bidderOffer[index].unitrate
                        // }
                        fullWidth
                        onChange={(e) => handleChange(index, e)}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="totalamount"
                        fullWidth
                        id="totalamount"
                        label="Total Amount"
                        inputProps={{ readOnly: true }}
                        value={
                          bidderOffer[index] &&
                          bidderOffer[index].unitrate * item.quantity
                        }
                        size="small"
                        onChange={(e) => handleChange(index, e)}
                        
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TagsInput
                        onKeyPress={(e) => {
                          e.key === "Enter" && e.preventDefault();
                        }}
                        selectedTags={(items) => {
                          let newFormValues = [...bidderOffer];
                          newFormValues[index] &&
                            (newFormValues[index]["offeredmodels"] = items);
                          setBidderOffer(newFormValues);
                        }}
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        id="offeredmodels"
                        name="offeredmodels"
                        placeholder="Enter names of Make/Models"
                        label="Offered Make/Models"
                        color="primary"
                        size="small"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        name="warranty"
                        label="Warranty Offered (optional)"
                        value={
                          bidderOffer[index] && bidderOffer[index].warranty
                        }
                        fullWidth
                        onChange={(e) => handleChange(index, e)}
                        size="small"
                      />
                    </Grid>
                    
                  </Grid>
                  
                </Box>
              </CardContent>
            </Card>
            <Button onClick={(e) => console.log(bidderOffer)}>Submit</Button>
          </Grid>
        );
      })}
      
    </Grid>
  );
};

export default FinancialBid;
