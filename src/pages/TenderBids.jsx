import { Add } from "@mui/icons-material";
import {
  CircularProgress,
  Typography,
  Box,
  Paper,
  Grid,
  Fab,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import Layout from "../components/DepartmentLayout";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import BidsTable from "../components/BidsTable";
import { viewAllStaffGet } from "../api/department";
import { viewAllBidsGet } from "../api/tender";
// import { getbids } from "../data/api";

function TenderBids({tender}) {
  const [bids, setBids] = useState([
   
  ]);
  const setBidsFn = async () => {
    const response = await viewAllBidsGet(localStorage.getItem("token"), tender._id);
    if (response) {
      console.log(response);
    //   setbids(response.result.data.staffs);
    } else {
    }
  };
  useEffect(() => {
    setBidsFn();
  }, []);

  return (
 
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            padding: { md: "3rem", xs: "1rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: { xs: "1.5rem", md: "none" },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              sx={{
                mb: "3rem",
                textDecoration: "underline",
                textDecorationColor: "#243665",
                textDecorationThickness: "3px",
                textUnderlineOffset: "1rem",
                lineHeight: "3rem"
              }}
            >
              TENDER BIDS
            </Typography>
           
          </Box>
          {!bids ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5rem",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Box>
              <TextField
                label="Search bids"
                id="search"
                fullWidth
                sx={{
                  mb: 3,
                }}
                onChange={(e) => {
                  const search = e.target.value;
                  console.log(search);
                  const filteredbids = bids.filter((bid) => {
                    return bid.name.toLowerCase().includes(search) || bid.type.toLowerCase().includes(search) || bid.email.includes(search) ;
                  });
                  setBids(filteredbids);
                } }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <BidsTable bids={bids} />
            </Box>
          )}
        </Grid>
      </Grid>
    
  );
}

export default TenderBids;
