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
import PasswordIcon from '@mui/icons-material/Password';

export default function Enroll({credentials, setCredentials, handleNext}) {
  const [pwError, setPwError] = React.useState("");
  const [confirmPwError, setConfirmPwError] = React.useState("");
  const [loginError, setLoginError] = React.useState("");
  const navigate = useNavigate();
  const handleSubmitPassword = async (event) => {
    setPwError("");
    setConfirmPwError("");
    setLoginError("");

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("loginid")) {
        setLoginError("Please enter a login ID!");
    } else if (data.get("password").length < 8) {
      setPwError("Password too short.");
    } else if (data.get("password") !== data.get("confirmPassword")) {
      setConfirmPwError("This field does not match with the password.");
    } else {
      console.log({
        loginid: data.get("loginid"),
        password: data.get("password"),
      });
      setCredentials({
        loginid: data.get("loginid"),
        password: data.get("password"),
      });
      handleNext();
    }
  };

  

  return (

      <Box sx={{width: "35vw"}}>
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
            <PasswordIcon/>
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            fontWeight="bold"
            sx={{
              mt: 2,
            }}
          >
            CREATE CREDENTIALS
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
         
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="loginid"
              name="loginid"
              label="Login ID"
              defaultValue={credentials && credentials.loginid}
              autoFocus
              sx={{
                // mb: "1rem",
              }}
              error={loginError === "" ? false : true}
              helperText={loginError === "" ? "Enter a valid Email ID. Cannot be changed later." : loginError}
            />

            <hr
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#3e92cc",
                border: "none",
              }}
            />

            <TextField
              required
              fullWidth
              name="password"
              label="Set a New Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={pwError === "" ? false : true}
              defaultValue = {credentials && credentials.password}
              helperText={pwError === "" ? "Minimum Length is 8. Use a combination of letters, numbers, and special characters." : pwError}
              sx={{
                  mb: "1rem"
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
              defaultValue = {credentials && credentials.password}
              error={confirmPwError === "" ? false : true}
              helperText={confirmPwError === "" ? "" : confirmPwError}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 0 }}
            >
              Set Password
            </Button>
          </Box>
        </Box>
      </Box>
 
  );
}
