import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Layout from "../components/Layout";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";
import {verifyTotpPost} from "../api/common";

import moment from "moment";
moment().format();

export default function Complete2FA() {
  const [loginError, setLoginError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [hotp, setHotp] = React.useState("");

  const navigate = useNavigate();
  const handleSubmitPassword = async (event) => {
      event.preventDefault();
    setLoginError("");
    const code = hotp;

    const user = JSON.parse(localStorage.getItem("user"));

    const response = await verifyTotpPost(
      user._id,
      localStorage.getItem("token"),
      {
        totp: code
      }
    );
    console.log(response);
    if (response.error) {
      setLoginError("Invalid Code!");
    } else {
      const token = response.result.data.jwtToken;

      const user = JSON.stringify(response.result.data.user);
      localStorage.setItem("token", token);
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <VerifiedUserIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            fontWeight="bold"
            sx={{
              mt: 2,
            }}
          >
            TWO FACTOR AUTHENTICATION
          </Typography>

          <hr
            style={{
              width: "20%",
              height: "2px",
              backgroundColor: "#3e92cc",
              border: "none",
            }}
          />
          <Box
            component="form"
            onSubmit={handleSubmitPassword}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography variant="h5" textAlign="center">
              Secret Code generated on your Authentication App (Authy or Google
              Authenticator)
            </Typography>
            <TextField
                          id="hotp"
                          label="Enter 6 digit Code Generated"
                          onChange={(event) => setHotp(event.target.value)}
                          fullWidth
                          sx={{
                            mt: 1.5,
                          }}
                          error={loginError === "" ? false : true}
                          helperText={loginError === "" ? "" : loginError}
                        />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 0 }}
            >
              Verify
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
