import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import React, {useState} from "react";
import {
  Box,
  CssBaseline,
  Avatar,
  Typography,
  CardContent,
  Grid,
  Card,
  Button,
} from "@mui/material";
import _ from "lodash";
import { createBidderPost } from "../../api/bidder";
import { useNavigate } from "react-router-dom";
var CryptoJS = require("crypto-js");
function Confirmation({
  contactDetails,
  credentials,
  companyDetails,
  handleBack,
  handleNext,
}) {
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    // handleNext();
    const allData = {
      ...credentials,
      ...companyDetails,
      ...contactDetails,
    };
    console.log("data", allData);
    const response = await createBidderPost(allData);
    if(response.error) {
      setError(response.message)
    } else {
      if(response.result.data) {
        const {authEmailId, authSmsId, newUser, newBidder} = response.result.data;
        localStorage.setItem("authEmailId", authEmailId);
        localStorage.setItem("authSmsId", authSmsId);
        handleNext();
      } else {
        console.log(response.result)
      }
    }
    console.log(response);
    // Encrypt
    var ciphertext = CryptoJS.AES
      .encrypt(JSON.stringify(allData), "blackwing")
      .toString();
    console.log("cipher", {
        data: ciphertext
    });
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(ciphertext, "blackwing");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(decryptedData);
  };
  return (
    <Box sx={{ width: "50vw" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <ThumbUpAltIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          fontWeight="bold"
          sx={{
            mt: 2,
          }}
        >
          CONFIRM DETAILS
        </Typography>

        <hr
          style={{
            width: "20%",
            height: "2px",
            backgroundColor: "#3e92cc",
            border: "none",
          }}
        />
        <Box sx={{ width: "100%" }}>
          <Grid container direction="column">
            <Grid item>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      border: "1px solid #3e92cc",
                      padding: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight={"bold"}
                      color="primary"
                    >
                      CREDENTIALS
                    </Typography>
                    {Object.keys(credentials).map(
                      (key) =>
                        key !== "password" && (
                          <Grid container spacing={1} sx={{ mt: "0.05rem" }}>
                            <Grid item xs={4}>
                              <Typography variant="body1">
                                {_.startCase(key)}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body1" fontWeight={"bold"}>
                                {credentials[key]}
                              </Typography>
                            </Grid>
                          </Grid>
                        )
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      border: "1px solid #3e92cc",
                      padding: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight={"bold"}
                      color="primary"
                    >
                      COMPANY DETAILS
                    </Typography>
                    {Object.keys(companyDetails).map((key) => (
                      <Grid container spacing={1} sx={{ mt: "0.05rem" }}>
                        <Grid item xs={4}>
                          <Typography variant="body1">
                            {_.startCase(key)}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {key !== "preferentialBidder"
                              ? companyDetails[key]
                              : companyDetails[key].toString()}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      border: "1px solid #3e92cc",
                      padding: 3,
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight={"bold"}
                      color="primary"
                    >
                      CONTACT DETAILS
                    </Typography>
                    {Object.keys(contactDetails).map((key) => (
                      <Grid container spacing={1} sx={{ mt: "0.05rem" }}>
                        <Grid item xs={4}>
                          <Typography variant="body1">
                            {_.startCase(key)}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {contactDetails[key]}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, borderRadius: 0 }}
                    onClick={handleBack}
                  >
                    Go Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, borderRadius: 0 }}
                    onClick={handleSubmit}
                  >
                    Confirm Details
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Confirmation;
