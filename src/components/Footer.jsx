import React from "react";
import { Grid, Button, ButtonGroup, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SizeChange from "./SizeChange";
import { getApiVersion } from "../api/common";
function Footer({ size, setSize }) {
  const [version, setVersion] = React.useState("0.0.0");
  React.useEffect(() => {
    getApiVersion()
      .then((res) => {
        setVersion(res.apiVersion);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "primary.main",
        height: "auto",
        color: "white",
        width: "100%",
        marginTop: "2rem",
      }}
      position="relative"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item sx={{ margin: "10px" }}>
          <h3 style={{ textAlign: "center" }}> Contributors:</h3>
          <ul>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              {[
                "Rosita D'mello",
                "Yash Brahmbhatt",
                "Kunal Chandwani",
                "Vidhita Pai",
                "Harsh Mangukiya",
              ].map((name) => {
                return (
                  <Grid item>
                    <motion.li
                      key={name}
                      whileHover={{ scale: 1.1 }}
                      style={{ margin: "3px" }}
                    >
                      <Typography>{name}</Typography>
                    </motion.li>
                  </Grid>
                );
              })}
            </Grid>
          </ul>
        </Grid>
        <Grid item sx={{ margin: "10px" }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Typography>API Version: {version}</Typography>
            </Grid>
            <Grid item>
              <Typography>Adjust Size: </Typography> 
            </Grid>
            <Grid item>
            <SizeChange size={size} setSize={setSize} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ margin: "10px", padding:'15px' }}>
          <Typography component='h5'>@All Rights Reserved by Blackwing.</Typography>
          </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
