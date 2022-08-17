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
import {useNavigate} from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";


export default function DSCCode() {
  const [captcha, setCaptcha] = React.useState("");
  const [loginError, setLoginError] = React.useState("");
  const [submitted, setSubmitted] = React.useState("");
  
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    setLoginError("");
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (validateCaptcha(captcha) == true) {
      if (!data.get("email") || data.get("email") === "") {
        setLoginError("Enter Login Id!");
      } else {
        setSubmitted(true);
        setLoginError("");
        navigate("/nodalofficer/setpassword");
      }
    } else {
      alert("Captcha Does Not Match");
    }
    console.log({
      email: data.get("email"),
    });
  };

 

  React.useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
              VERIFY YOUR ACCOUNT
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
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Login ID"
                autoFocus
                sx={{
                  mb: "2rem",
                }}
                error={loginError === "" ? false : true}
                helperText={loginError === "" ? "" : loginError}
              />

              <hr
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#3e92cc",
                  border: "none",
                }}
              />
              <div style={{ marginTop: "3rem" }}>
                <LoadCanvasTemplate reloadColor="#3e92cc" />
              </div>

              <TextField
                margin="normal"
                required
                fullWidth
                id="captcha"
                label="Enter Captcha"
                onChange={(event) => setCaptcha(event.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 0 }}
              >
                Send Verification Code
              </Button>
            </Box>
          </Box>
      
      </Container>
    </Layout>
  );
}
