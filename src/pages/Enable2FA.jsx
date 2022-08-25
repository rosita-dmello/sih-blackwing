import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { QRCodeSVG } from "qrcode.react";
import {
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import WarningIcon from "@mui/icons-material/Warning";
import { generateTotpGet, enableTotpPut } from "../api/common";
import { SettingsInputComponent } from "@mui/icons-material";

import moment from "moment";
moment().format();

export default function Enable2FA() {
  const [sendCode, setSendCode] = React.useState(false);
  const [url, setUrl] = React.useState("www.google.com");
  const [hotp, setHotp] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleEnable = async (event) => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    const response = await generateTotpGet(
      user._id,
      localStorage.getItem("token")
    );
    console.log(response);
    if (response.result) {
      setUrl(response.result.data.url);
      setSendCode(true);
      setOpen(true);
    } else {
      console.log(response);
    }
  };
  const handleSubmitCode = async (event) => {
    event.preventDefault();
    setError("");
    const code = hotp;
 
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await enableTotpPut(
      user._id,
      localStorage.getItem("token"),
      {
        totp: code
      }
    );
    console.log(response);
    if (response.error) {
      setError("Invalid Code!");
    } else {
      // const token = response.result.data.jwtToken;

      const user = JSON.stringify(response.result.data.user);
      // localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      const time = moment();
      localStorage.setItem("setAt", time);
      localStorage.setItem("expireAt", response.result.data.expireDate);

      if (response.result.data.user.role === "BIDDER" ) {
        navigate("/bidder");
      } else {
          navigate("/department");
      } 
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            minHeight: "60vh",
            borderRadius: 7,
            width: "30vw",
          }}
          elevation={3}
        >
          <Grid
            container
            direction="column"
            sx={{ p: "2.5rem" }}
            justifyContent="center"
            alignItems={"center"}
            spacing={3}
          >
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              xs={12}
            >
              <Avatar sx={{ m: 1, bgcolor: "error.main" }}>
                <WarningIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                fontWeight="bold"
                sx={{
                  mt: 2,
                }}
                textAlign="center"
              >
                2FA IS NOT ENABLED ON THIS ACCOUNT!
              </Typography>

              <hr
                style={{
                  width: "20%",
                  height: "2px",
                  backgroundColor: "#243665",
                  border: "none",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="column"
                // sx={{ p: "0 3rem 0 3rem" }}
                justifyContent="center"
                alignItems={"center"}
                spacing={3}
              >
                <Grid item xs={12}>
                  <Typography variant="h6" color="initial" align="center">
                    Your Account may be Exposed to Security Risks
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleEnable}
                    size="large"
                    sx={{
                      mt: 2,
                    }}
                  >
                    Enable Two Factor Authentication
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>
            <Typography variant="h6" fontWeight="bold">
              Enable Two-Factor Authentication
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Google_Authenticator_for_Android_icon.svg/1200px-Google_Authenticator_for_Android_icon.svg.png"
                      width="60px"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      textTransform={"uppercase"}
                    >
                      Download an Authenticator App
                    </Typography>
                    <Typography variant="body2">
                      Download and Install Authy or Google Authenticator on your
                      Phone or Tablet
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <hr />
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    {url && <QRCodeSVG value={url} width="100px" />}
                  </Grid>
                  <Grid item xs={9} sx={{ mt: "2rem" }}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      textTransform={"uppercase"}
                    >
                      Scan the QR Code
                    </Typography>
                    <Typography variant="body2">
                      Open the Authentication App and scan the QR Code to the
                      left using your device's Camera
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <hr />
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/crypto-mining/512/Blockchain-crypto-mining-15-512.png"
                      width="80px"
                    />
                  </Grid>
                  <Grid item xs={9} sx={{ mt: "0.5rem" }}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      textTransform={"uppercase"}
                    >
                      Enter Your Code
                    </Typography>
                    <Typography variant="body2">
                      The One Time Password generated is only valid for 30
                      seconds
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={9}>
                        <TextField
                          id="hotp"
                          label="Enter 6 digit Code Generated"
                          onChange={(event) => setHotp(event.target.value)}
                          size="small"
                          fullWidth
                          sx={{
                            mt: 1.5,
                          }}
                          error={error === "" ? false : true}
                          helperText={error === "" ? "" : error}
                        />
                      </Grid>

                      <Grid item xs={3}>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{
                            marginTop: 1.7,
                          }}
                          onClick={handleSubmitCode}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  );
}
