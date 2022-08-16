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
import _ from "lodash";

export default function CompanyDetails({
  credentials,
  setCredentials,
  handleNext,
}) {
  const navigate = useNavigate();

  const [data, setData] = React.useState({
    companyName: "",
    preferentialBidder: "",
    registrationNumber: "",
    registeredAddress: "",
    partners: [],
    bidderType: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    panNumber: "",
    establishmentYear: "",
    natureOfBusiness: "",
    legalStatus: "",
    companyCategory: "",
  });
  const fields = [
    "Company Name",
    "Preferential Bidder",
    "Registration Number",
    "Registered Address",
    "Partners",
    "Bidder Type",
    "City",
    "State",
    "Country",
    "Postal Code",
    "Pan Number",
    "Establishment Year",
    "Nature Of Business",
    "Legal Status",
    "Company Category",
  ];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCredentials(data);
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
          ADD COMPANY DETAILS
        </Typography>

        <hr
          style={{
            width: "20%",
            height: "2px",
            backgroundColor: "#3e92cc",
            border: "none",
          }}
        />
        <Box component="form" onSubmit={handleSubmit} noValidate>
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
