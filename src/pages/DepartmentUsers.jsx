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
import DepartmentUsersTable from "../components/DepartmentUsersTable";
import { viewAllStaffGet } from "../api/department";
// import { getusers } from "../data/api";

function DepartmentUsers() {
  const [users, setUsers] = useState([
   
  ]);
  const setusersFn = async () => {
    const response = await viewAllStaffGet(localStorage.getItem("token"));
    if (response) {
      console.log(response);
      setUsers(response.result.data.staffs);
    } else {
    }
  };
  useEffect(() => {
    setusersFn();
  }, []);

  return (
    <Layout>
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
              DEPARTMENT USERS
            </Typography>
            <Box>
              <Fab
                color="primary"
                variant="extended"
                component="a"
                href="/department/users/new"
                sx={{
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                <Add /> New User
              </Fab>
            </Box>
          </Box>
          {!users ? (
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
                label="Search Users"
                id="search"
                fullWidth
                sx={{
                  mb: 3,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="filled"
              />
              <DepartmentUsersTable users={users} />
            </Box>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default DepartmentUsers;
