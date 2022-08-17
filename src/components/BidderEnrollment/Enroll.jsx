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
import { InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PasswordIcon from "@mui/icons-material/Password";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

export default function Enroll({ credentials, setCredentials, handleNext }) {
  const [pwError, setPwError] = React.useState("");
  const [confirmPwError, setConfirmPwError] = React.useState("");
  const [loginError, setLoginError] = React.useState("");
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: "",
    correspondenceEmail: "",
    password: "",
    mobile: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    setPwError("");
    setConfirmPwError("");
    setLoginError("");
    setCredentials(data);

    const fdata = new FormData(event.currentTarget);
    if (!fdata.get("email")) {
      setLoginError("Please enter a login ID!");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fdata.get("email"))
    ) {
      setLoginError("Invalid email address");
    } else if (fdata.get("password").length < 8) {
      setPwError("Password too short.");
    } else if (fdata.get("password") !== fdata.get("confirmPassword")) {
      setConfirmPwError("This field does not match with the password.");
    } else {
      console.log(data);
      handleNext();
    }
  };

  return (
    <Box sx={{ width: "35vw" }}>
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
          <PasswordIcon />
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
        <Box component="form" onSubmit={handleSubmitPassword} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Login ID"
            autoComplete="email"
            type="email"
            // defaultValue={credentials && credentials.email}
            // autoFocus
            onChange={handleChange}
            error={loginError === "" ? false : true}
            helperText={
              loginError === ""
                ? "Enter a valid Email ID. Cannot be changed later."
                : loginError
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            autoComplete="email"
            type="email"
            id="correspondenceEmail"
            name="correspondenceEmail"
            label="Correspondence Email"
            // defaultValue={credentials && credentials.correspondenceEmail}
            helperText={
              loginError === "" ? "It can be same as Login ID." : loginError
            }
          />
          <PhoneInput
            country={"in"}
            value={data.phone}
            onChange={(phone) =>
              setData((prev) => {
                return { ...prev, mobile: phone };
              })
            }
            inputProps={{
              required: true,
            }}
            specialLabel="Mobile"
            inputStyle={{ width: "100%" }}
            containerStyle={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
          {/* <TextField
            margin="normal"
            autoComplete="tel"
            name="mobile"
            required
            fullWidth
            id="mobile"
            label="Mobile"
            type="tel"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
          /> */}
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
            onChange={handleChange}
            error={pwError === "" ? false : true}
            // defaultValue={credentials && credentials.password}
            helperText={
              pwError === ""
                ? "Minimum Length is 8. Use a combination of letters, numbers, and special characters."
                : pwError
            }
            sx={{
              mb: "1rem",
            }}
          />

          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            // defaultValue={credentials && credentials.password}
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
