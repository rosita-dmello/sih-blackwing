import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import Layout from "../components/Layout";
// import { loginPost } from "../data/api";

import moment from "moment";
moment().format();

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Central Public Procurement Portal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function UserLogin() {
  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");
  const [otherError, setOtherError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    setEmailError("");

    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    // FORM VALIDATION
    if (!data.get("email")) {
      setEmailError("Please Enter Email ID");
      setSubmitted(false);
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.get("email"))
    ) {
      setEmailError("Invalid email address");
      setSubmitted(false);
    } else if (!data.get("password")) {
        setPwError("Please enter your password!")
    }
    else {
      try {
        console.log({
          password: data.get("password"),
          email: data.get("email"),
        });

        // const response = await loginPost({
        //   password: data.get("password"),
        //   email: data.get("email"),
        // });
        // if (response.data && response.data.success) 
        // {
        //   const token = response.data.token;
        //   const user = JSON.stringify(response.data.data);
        //   localStorage.setItem("token", token);
        //   localStorage.setItem("user", user);
        //   const time = moment();
        //   localStorage.setItem("setAt", time);
        //   setLoggedIn(true);
        //   if (response.data.data.type === "CUSTOMER") {
        //     navigate("/orders");
        //   } else if (response.data.data.type === "ADMIN") {
        //     navigate("/admin/orders");
        //   } else if (response.data.data.type === "DELIVERY") {
        //     navigate("/delivery/orders");
        //   }
        // } else {
        //   setOtherError("Incorrect Email or Password!");
        // }
        // console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (<Layout>
    <div style={{ m: 0, p: 0 }}>
      <Box container component="main" sx={{ px: { xs: 4, md: 2 } }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            sx={{
          
              mb: "0.1rem",
            }}
            textAlign="center"
          >
            USER LOGIN
          </Typography>
          <hr
            style={{
              width: "12%",
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
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailError === "" ? false : true}
              helperText={emailError === "" ? "" : emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={pwError === "" ? false : true}
              helperText={pwError === "" ? "" : pwError}
            />
            <Typography sx={{textAlign: "center"}} color="error">
              {otherError}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1, borderRadius: 0 }}
            >
              Log In
            </Button>
            {submitted? <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              >
                <CircularProgress/>
                </Box>
               : ""}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </div>
    </Layout>
  );
}
