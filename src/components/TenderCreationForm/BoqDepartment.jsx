import React, { useState, useEffect } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useNavigate } from "react-router-dom";

import { Card } from "@mui/material";
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
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TagsInput from "../TagsInput";

import moment from "moment";
import { Add, Remove } from "@mui/icons-material";
moment().format();
function BoqDepartment(props) {
  const [formValues, setFormValues] = useState([
    {
      itemdescription: "",
      quantity: "",
      units: "",
      rate: "",
      preferredmodels: "",
      warranty: "",
    },
  ]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, {
      itemdescription: "",
      quantity: "",
      units: "",
      rate: "",
      preferredmodels: "",
      warranty: "",
    }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  }
  return (
    <Box sx={{ width: '80%', margin: '3vh auto' }}>
      <Box sx={{display:'flex',justifyContent:'center'}}>

        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <ReceiptLongIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          fontWeight="bold"
          sx={{
            mt: 2,
          }}
        >
          Bill Of Quantities (BOQ for Financial Bid)
        </Typography>
      </Box>
        <Box component="form" noValidate sx={{ mt: 3, width: "100%" }} onSubmit={handleSubmit}>
          <Grid
            container
            direction="column"
            sx={{
              width: "100%",
            }}
            spacing={2}
          >
            {formValues.map((element, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    padding: "2rem",
                    width: "100%",
                    borderRadius: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  elevation={2}
                >
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                    sx={{
                      width: "100%",
                      border: "1px solid #3e92cc",
                      padding: 3,
                    }}
                  >
                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="itemdescription"
                        label="Item Description"
                        value={element.itemdescription || ""}
                        fullWidth
                        multiline
                        rows={2}
                        onChange={(e) => handleChange(index, e)}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="number"
                        name="quantity"
                        label="Quantity"
                        value={element.quantity || ""}
                        fullWidth
                        onChange={(e) => handleChange(index, e)}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        name="units"
                        label="Units"
                        value={element.units || ""}
                        fullWidth
                        onChange={(e) => handleChange(index, e)}
                        size="small"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        name="rate"
                        label="Estimated Rate"
                        value={element.rate || ""}
                        fullWidth
                        onChange={(e) => handleChange(index, e)}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TagsInput
                        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                        selectedTags={(items) => {
                          let newFormValues = [...formValues];
                          newFormValues[index]["preferredmodels"] = items;
                          setFormValues(newFormValues);
                        }
                        }
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        id="preferredmodels"
                        name="preferredmodels"
                        placeholder="Enter names of Make/Models"
                        label="Preferred Make/Models"
                        color="primary"
                        size="small"
                        defaultValue={formValues[index]["preferredmodels"]}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="warranty"
                        label="Minimum Warranty Requirement (optional)"
                        value={element.warranty || ""}
                        fullWidth
                        onChange={(e) => handleChange(index, e)}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} sx={{
                      display: "flex",
                      flexDirection: "row-reverse"
                    }}>
                      {index ? (
                        <Button
                          type="button"
                          className="button remove"
                          onClick={() => removeFormFields(index)}
                          variant="outlined"
                          color="error"
                          size="small"
                          startIcon={<Remove />}
                        >
                          Remove
                        </Button>
                      ) : null}
                    </Grid>
                  </Grid>

                </Card>
              </Grid>
            ))}
          </Grid>
          <Box className="button-section">
            <Button
              className="button add"
              type="button"
              variant="contained"
              onClick={() => addFormFields()}
              sx={{
                mt: 2
              }}
              startIcon={<Add />}
            >
              Add Item
            </Button>
            <Grid container>
              <Grid item>
                <Button onClick={props.prevStep}>previous</Button>
              </Grid>
              <Grid item>
                <Button onClick={() => { props.nextStep(formValues) }}>next</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

  );
}

export default BoqDepartment;
