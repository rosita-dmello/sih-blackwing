import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "../components/Layout";
import Enroll from "../components/BidderEnrollment/Enroll";
import PersonalDetails from "../components/BidderEnrollment/PersonalDetails";
const steps = ["Enroll", "Company Details", "Contact Details", "Confirmation", "Verification"];

export default function BidderEnrollment() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [credentials, setCredentials] = React.useState({
    email: "",
    correspondenceEmail: "",
    password: "",
    mobile: ""
  });
  const [companyDetails, setCompanyDetails] = React.useState({
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
    companyCategory: ""
  })
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function Form() {
    if (activeStep === 0) {
      return <Enroll setCredentials={setCredentials} credentials={credentials} handleNext={handleNext} />;
    } else if (activeStep === 1) {
      return <PersonalDetails setCompanyDetails={setCompanyDetails} companyDetails={companyDetails} handleNext={handleNext} />;
    }
  }

  return (
    <Layout>
      <Box
        sx={{
          m: "2rem 3rem 1rem 3rem",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <Box>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
