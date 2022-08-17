import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {
  FormControlLabel,
  FormControl,
  RadioGroup,
  FormControlGroup,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import { useNavigate } from "react-router-dom";
import BusinessIcon from "@mui/icons-material/Business";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import _ from "lodash";
import TagsInput from "../TagsInput";

export default function CompanyDetails({
  credentials,
  setCredentials,
  handleNext,
}) {
  const navigate = useNavigate();

  const [data, setData] = React.useState({
    companyName: "",
    preferentialBidder: false,
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
  const [chips, setChips] = React.useState([]);
  const [showState, setShowState] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState("");
  const fields = [
    "State",
    "Country",
    "City",
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
  const countries = Country.getAllCountries().map((country) => country.name);

  return (
    <Box sx={{ width: "40vw" }}>
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
          <BusinessIcon />
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
        <Box component="form" onSubmit={handleSubmit} width="100%">
          <Grid container direction="column">
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={handleChange}
                id="companyName"
                name="companyName"
                label="Company Name / Licence Holder Name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                label="Preferential Bidder"
                control={
                  <Checkbox
                    name="preferentialBidder"
                    onChange={handleChange}
                    color="primary"
                  />
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={handleChange}
                id="registrationNumber"
                name="registrationNumber"
                label="Registration Number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                multiline
                rows={3}
                required
                fullWidth
                onChange={handleChange}
                id="registeredAddress"
                name="registeredAddress"
                label="Registered Address"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <ChipInput
              margin="normal"
              variant="outlined"
              fullWidth
              label="Partners/Directors"
                value={chips}
                onAdd={(chip) => {
                  setChips((prev) => [...prev, chip]);
                }}
                onDelete={(chip, index) => {
                  setChips((prev) => {
                    return prev.splice(index, 1);
                  });
                }}
              />
            </Grid> */}
            <Grid item xs={12}>
              <TagsInput
                selectedTags={(items) =>
                  setData((prev) => {
                    return { ...prev, partners: items };
                  })
                }
                margin="normal"
                fullWidth
                variant="outlined"
                id="partners"
                name="partners"
                placeholder="Enter names of Partners/Directors"
                label="Partners/Directors"
                color="primary"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="bidderType-form">Bidder Type</FormLabel>
                <RadioGroup
                  aria-labelledby="bidderType-radio-buttons"
                  defaultValue="Indian"
                  name="bidderType"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Indian"
                    control={<Radio />}
                    label="Indian"
                  />
                  <FormControlLabel
                    value="Foreign"
                    control={<Radio />}
                    label="Foreign"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select
                  labelId="country-select-label"
                  id="country"
                  label="Country"
                  onChange={handleChange}
                  name="country"
                  defaultValue={"India"}
                >
                  {Country.getAllCountries().map((field) => (
                    <MenuItem
                      key={field.name}
                      value={field.name}
                      onClick={() => {
                        setCountryCode(field.isoCode);
                        setShowState(true);
                      }}
                    >
                      {field.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ display: showState ? "block" : "none" }}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="state-select-label">State</InputLabel>
                <Select
                  labelId="state-select-label"
                  id="state"
                  label="Country"
                  onChange={handleChange}
                  name="state"
                >
                  {showState &&
                    State.getStatesOfCountry(countryCode).map((field) => (
                      <MenuItem key={field.name} value={field.name}>
                        {field.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {fields.slice(2, 7).map((field) => {
                return (
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      onChange={handleChange}
                      id={_.camelCase(field)}
                      name={_.camelCase(field)}
                      label={field}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="legalStatus-select-label">
                  Legal Status
                </InputLabel>
                <Select
                  labelId="legalStatus-select-label"
                  id="Legal Status"
                  label="Country"
                  onChange={handleChange}
                  name="legalStatus"
                >
                  {[
                    "Limited Company",
                    "Undertaking",
                    "Jointventure",
                    "Partnership",
                    "Others",
                  ].map((field) => (
                    <MenuItem key={field} value={field}>
                      {field}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="companyCategory-select-label">
                  Legal Status
                </InputLabel>
                <Select
                  labelId="companyCategory-select-label"
                  id="companyCategory"
                  label="Company Category"
                  onChange={handleChange}
                  name="companyCategory"
                >
                  {[
                    "Micro Unit as per MSME",
                    "Small Unit as per MSME",
                    "Medium Unit as per MSME",
                    "Ancillary Unit",
                    "Project Affected Person of this Company",
                    "SSI",
                    "Others",
                  ].map((field) => (
                    <MenuItem key={field} value={field}>
                      {field}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 0 }}
              >
                Set Password
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
