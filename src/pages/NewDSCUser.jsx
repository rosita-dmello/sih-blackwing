import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// import { orderPost } from "../data/api";
import { Done, SettingsInputAntennaTwoTone } from "@mui/icons-material";
import moment from "moment";
import Layout from "../components/Layout";
moment().format();

export default function NewOrder() {
  const [created, setCreated] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [data, setData] = useState({
    userlevel: "",
    title: "",
    firstname: "",
    lastname: "",
    dateofbirth: "",
    loginid: "",
    secretariatdepartment: "",
    organizationname: "",
    department: "",
    designation: "",
    contactaddress: "",
    correspondenceemail: "",
    phone: "",
    fax: "",
    mobile: "",
    userroles: "",
  });

  //   const textFields = [
  //     Title,
  //     First Name,
  //     Last Name,
  //     loginid: "",
  //     secretariatdepartment: "",
  //     organizationname: "",
  //     department: "",
  //     designation: "",
  //     contactaddress: "",
  //     correspondenceemail: "",
  //     phone: "",
  //     fax: "",
  //     mobile: "",
  //     userroles: "",
  //   ]
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {};

  return (
    <Layout>
      <Box>
        {created ? (
          <Box
            sx={{
              margin: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Done color="success" sx={{ fontSize: "500%", mb: "2rem" }} />
            <Typography
              variant="h3"
              color="primary"
              fontWeight="bold"
              textAlign="center"
            >
              User Successfully Created!
            </Typography>
          </Box>
        ) : (
            <Box  sx={{
                margin: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
          <Box width="40vw">
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
                  mb: "3rem",
                  textDecoration: "underline",
                  textDecorationColor: "#3e92cc",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "1rem",
                }}
              >
                NEW USER
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl>
                      <FormLabel id="user-level-form">User Level</FormLabel>
                      <RadioGroup
                        aria-labelledby="user-level-radio-buttons"
                        defaultValue="Organization User"
                        name="userlevel"
                        onChange={(event) =>
                          console.log(event.target.value, event.target.name)
                        }
                      >
                        <FormControlLabel
                          value="Organisation User"
                          control={<Radio />}
                          label="Organisation User"
                        />
                        <FormControlLabel
                          value="Department/Circle User"
                          control={<Radio />}
                          label="Department/Circle User"
                        />
                        <FormControlLabel
                          value="Division User"
                          control={<Radio />}
                          label="Division User"
                        />
                        <FormControlLabel
                          value="Sub Division User"
                          control={<Radio />}
                          label="Sub Division User"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <FormControl fullWidth>
                      <InputLabel id="title-select-label">Title</InputLabel>
                      <Select
                        labelId="title-select-label"
                        id="title"
                        label="Title"
                        onChange={handleChange}
                        name="title"
                      >
                        {["Mr.", "Mrs.", "Master", "Ms.", "Dr."].map(
                          (field) => (
                            <MenuItem key={field} value={field}>
                              {field}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Grid>
                  {
                      ["First Name", "Last Name"].map((field) => {
                          return (
                            <Grid item xs={12} md={5}>
                            <TextField
                              required
                              fullWidth
                              id={field.trim().toLowerCase().replace(/\s/g, "")}
                              label={field}
                              name={field.trim().toLowerCase().replace(/\s/g, "")}
                            />
                          </Grid>
                          )
                      })
                  }
                  
                  {/* const key = field.trim().toLowerCase().replace(/\s/g, ""); */}
                  {["Phone", "Fax", "Mobile"].map((field) => {
                    return (
                      <Grid item xs={12}>
                        <TextField
                          autoComplete="tel"
                          name={field.trim().toLowerCase().replace(/\s/g, "")}
                          required
                          fullWidth
                          id={field.trim().toLowerCase().replace(/\s/g, "")}
                          label={field}
                          type="tel"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                +91
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create User
                </Button>
              </Box>
            </Box>
          </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
