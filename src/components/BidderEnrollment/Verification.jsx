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
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";
import { verifyOtpPost } from "../../api/common";
import LinearProgress from "@mui/material/LinearProgress";

export default function Verification({ credentials }) {
  const [pwError, setPwError] = React.useState("");
  const [confirmPwError, setConfirmPwError] = React.useState("");
  const [loginError, setLoginError] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();
  const handleSubmitCode = async (event) => {
    setPwError("");
    setConfirmPwError("");
    setLoginError("");
    setSubmitted(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      emailOtp: data.get("emailOtp"),
      mobileOtp: data.get("mobileOtp"),
      authMobileId: localStorage.getItem("authSmsId"),
      authEmailId: localStorage.getItem("authEmailId"),
    });
    const response = await verifyOtpPost({
      emailOtp: data.get("emailOtp"),
      mobileOtp: data.get("mobileOtp"),
      authMobileId: localStorage.getItem("authSmsId"),
      authEmailId: localStorage.getItem("authEmailId"),
    });
    if (response.result.data) {
      const { user } = response.result.data;
      const userString = JSON.stringify(user);
      localStorage.setItem("user", userString);
      setSubmitted(false);
      if (user.istotpenabled) {
        navigate("/totp/enter");
      } else {
        navigate("/totp/enable");
      }
    }
    // if (data.get("password").length < 8) {
    //   setPwError("Password too short.");
    // } else if (data.get("password") !== data.get("confirmPassword")) {
    //   setConfirmPwError("This field does not match with the password.");
    // } else {
    //   console.log({
    //     code: data.get("code"),
    //     password: data.get("password"),
    //   });
    //   navigate("/");
    // }
  };

  return (
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
          backgroundColor: "#243665",
          border: "none",
        }}
      />
      <Box component="form" onSubmit={handleSubmitCode} sx={{ mt: 1 }}>
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
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="mobileOtp"
          name="mobileOtp"
          label="Verification Code from Phone"
          autoFocus
          sx={{
            mb: "1rem",
          }}
        />

        {/* 
            <TextField
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
        {submitted ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 0 }}
          >
            Verify
          </Button>
        )}
      </Box>
    </Box>
  );
}
