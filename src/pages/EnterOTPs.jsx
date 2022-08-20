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

export default function EnterOTPs() {
 
  const [loginError, setLoginError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const navigate = useNavigate();
  const handleSubmitPassword = async (event) => {
    
    setLoginError("");
    setPhoneError("");

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postData = {
      emailOtp: data.get("emailOtp"),
      mobileOtp: data.get("mobileOtp"),
      authMobileId: localStorage.getItem("authMobileId"),
      authEmailId: localStorage.getItem("authEmailId")
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
            VERIFY YOUR EMAIL AND PHONE
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="emailOtp"
              name="emailOtp"
              label="Verification Code from Email"
              autoFocus
              sx={{
                mb: "1rem",
              }}
              error={loginError === "" ? false : true}
              helperText={loginError === "" ? "" : loginError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobileOtp"
              name="mobileOtp"
              label="Verification Code from Mobile"
              sx={{
                mb: "1rem",
              }}
              error={phoneError === "" ? false : true}
              helperText={phoneError === "" ? "" : phoneError}
            />
            {/* <hr
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#3e92cc",
                border: "none",
              }}
            /> */}

            {/* <TextField
              required
              fullWidth
              name="password"
              label="Set a New Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={pwError === "" ? false : true}
              helperText={pwError === "" ? "" : pwError}
              sx={{
                  my: "1rem"
              }}
            />

            <TextField
              required
              fullWidth
              name="password"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              error={confirmPwError === "" ? false : true}
              helperText={confirmPwError === "" ? "" : confirmPwError}
            /> */}

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
