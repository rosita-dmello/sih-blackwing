import React, { useState, useEffect } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useNavigate } from "react-router-dom";

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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
} from "@mui/material";
// import { orderPost } from "../data/api";
import { Done } from "@mui/icons-material";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import moment from "moment";
import Layout from "../components/Layout";
moment().format();

export default function NewDSCUser() {
  const [created, setCreated] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [userroles, setUserroles] = useState([]);
  const navigate = useNavigate();
  const [data, setData] = useState({
    userlevel: "",
    title: "",
    firstname: "",
    lastname: "",
    dateofbirth: "",
    email: "",
    secretariatdepartment: "",
    organizationname: "",
    department: "",
    designation: "",
    contactaddress: "",
    correspondenceemail: "",
    phone: "",
    fax: "",
    mobile: "",
    userroles: [],
  });

  const textFields = [
    "Login ID",
    "Secretariat Department",
    "Organization Name",
    "Department",
    "Designation",
    "Contact Address",
    "Correspondence Email",
  ];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleCheck = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setUserroles((prev) => [...prev, name]);
    } else {
      let userroles1 = userroles;
      userroles1 = userroles1.filter((item) => item !== name);
      setUserroles(userroles1);
    }
  };

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        userroles,
      };
    });
  }, [userroles]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateCaptcha(captcha) == true) {
      console.log(data);
      navigate("/dsc/users");
    } else {
      alert("Invalid Captcha!");
    }
  };
  React.useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <Layout>
      <LocalizationProvider dateAdapter={AdapterMoment}>
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
            <Box
              sx={{
                margin: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
                    NEW DEPARTMENT USER
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
                            onChange={handleChange}
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
                            defaultValue={"Mr."}
                          >
                            {['Mrs', 'Mr', 'Ms', 'Dr', 'Sri'].map(
                              (field) => (
                                <MenuItem key={field} value={field}>
                                  {field}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      </Grid>
                      {["First Name", "Last Name"].map((field) => {
                        return (
                          <Grid item xs={12} md={5} key={field}>
                            <TextField
                              required
                              fullWidth
                              id={field.trim().toLowerCase().replace(/\s/g, "")}
                              label={field}
                              onChange={handleChange}
                              name={field
                                .trim()
                                .toLowerCase()
                                .replace(/\s/g, "")}
                            />
                          </Grid>
                        );
                      })}
                      <Grid item xs={12}>
                        <DesktopDatePicker
                          label="Date of Birth"
                          inputFormat="DD/MM/YYYY"
                          value={data.dateofbirth}
                          onChange={(newVal) =>
                            setData((prev) => {
                              return {
                                ...prev,
                                dateofbirth:
                                  moment(newVal).format("DD/MM/YYYY"),
                              };
                            })
                          }
                          renderInput={(params) => (
                            <TextField {...params} fullWidth error={false} />
                          )}
                        />
                      </Grid>
                      {textFields.map((field) => {
                        const key = field
                          .trim()
                          .toLowerCase()
                          .replace(/\s/g, "");
                        return (
                          <Grid item xs={12} key={field}>
                            <TextField
                              required
                              fullWidth
                              id={key}
                              label={field}
                              name={key === "loginid" ? "email" : key}
                              multiline={
                                key === "contactaddress" ? true : false
                              }
                              rows={key === "contactaddress" ? 3 : 1}
                              onChange={handleChange}
                            />
                          </Grid>
                        );
                      })}
                      {/* const key = field.trim().toLowerCase().replace(/\s/g, ""); */}
                      {["Phone", "Fax", "Mobile"].map((field) => {
                        const key = field
                          .trim()
                          .toLowerCase()
                          .replace(/\s/g, "");
                        return (
                          <Grid item xs={12} key={field}>
                            <PhoneInput
                              country={"in"}
                              value={data[key]}
                              onChange={(phone) =>
                                setData((prev) => {
                                  return { ...prev, [key]: phone };
                                })
                                }
                              inputProps={{
                                required: true,
                                name: key
                              }}
                              specialLabel={field}
                              inputStyle={{ width: "100%" }}
                              containerStyle={{
                                marginTop: "0.3rem",
                                marginBottom: "0.3rem",
                              }}
                            />
                            {/* <TextField
                              autoComplete="tel"
                              name={field
                                .trim()
                                .toLowerCase()
                                .replace(/\s/g, "")}
                              required
                              fullWidth
                              id={field.trim().toLowerCase().replace(/\s/g, "")}
                              label={field}
                              type="tel"
                              onChange={handleChange}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    +91
                                  </InputAdornment>
                                ),
                              }}
                            /> */}
                          </Grid>
                        );
                      })}
                      <Grid item xs={12}>
                        <FormGroup>
                          <FormLabel id="user-role-form">User Roles</FormLabel>
                          {[
                            "Nodal Officer",
                            "Procurement Officer Admin",
                            "Procurement Officer Opener",
                            "Procurement Officer Evaluator",
                            "Procurement Officer Publisher",
                            "Auditor",
                          ].map((field) => {
                            return (
                              <FormControlLabel
                                control={<Checkbox name={field} />}
                                label={field}
                                onChange={handleCheck}
                              />
                            );
                          })}
                        </FormGroup>
                      </Grid>
                      <hr
                        style={{
                          width: "100%",
                          height: "2px",
                          backgroundColor: "#3e92cc",
                          border: "none",
                        }}
                      />
                      <Grid item xs={12}>
                        <div>
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
                      </Grid>
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
      </LocalizationProvider>
    </Layout>
  );
}
