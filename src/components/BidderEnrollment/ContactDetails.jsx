import React, { useState, useEffect } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
import ContactsIcon from "@mui/icons-material/Contacts";

import moment from "moment";
moment().format();

export default function ContactDetails({
  contactDetails,
  setContactDetails,
  handleNext,
}) {
  const navigate = useNavigate();
  const [data, setData] = useState(contactDetails);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    setContactDetails({
      ...data,
      phone: data.phone[0] === "+" ? data.phone : "+" + data.phone
    });
    handleNext();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box>
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
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <ContactsIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                fontWeight="bold"
                sx={{
                  mt: 2,
                }}
              >
                ADD CONTACT DETAILS
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="title-select-label">Title</InputLabel>
                      <Select
                        labelId="title-select-label"
                        id="title"
                        label="Title"
                        onChange={handleChange}
                        name="title"
                        defaultValue={contactDetails.title}
                      >
                        {["Mrs", "Mr", "Ms", "Dr", "Sri"].map((field) => (
                          <MenuItem key={field} value={field}>
                            {field}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="contactName"
                      label="Contact Name"
                      onChange={handleChange}
                      name={"contactName"}
                      defaultValue={contactDetails.contactName}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DesktopDatePicker
                      label="Date of Birth"
                      inputFormat="DD/MM/YYYY"
                      value={data.dateOfBirth}
                      onChange={(newVal) =>
                        setData((prev) => {
                          return {
                            ...prev,
                            dateOfBirth: moment(newVal).format("DD/MM/YYYY"),
                          };
                        })
                      }
                      renderInput={(params) => (
                        <TextField {...params} fullWidth error={false} defaultValue={contactDetails.dateOfBirth} />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="designation"
                      label="Designation"
                      onChange={handleChange}
                      name={"designation"}
                      defaultValue={contactDetails.designation}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <PhoneInput
                      country={"in"}
                      value={contactDetails.phone}
                      enableSearch
                      onChange={(phone) =>
                        setData((prev) => {
                          return { ...prev, phone: phone };
                        })
                      }
                      inputProps={{
                        required: true,
                        name: "phone",
                      }}
                      specialLabel="Phone"
                      inputStyle={{ width: "100%" }}
                      containerStyle={{
                        marginTop: "0.3rem",
                        marginBottom: "0.3rem",
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Set Contact Details
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
