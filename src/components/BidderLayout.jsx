import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stambh from "../utils/stambh.png";
import MailIcon from "@mui/icons-material/Mail";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import BookIcon from "@mui/icons-material/Book";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

// import theme from "../App";

const page = {
  width: "100%",
};

const drawerWidth = 240;

function Layout({ children }) {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      {/* app bar  */}
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="a"
            fontFamily="Bebas Neue"
            sx={{
              letterSpacing: "0.3rem",
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <img src={Stambh} alt="stambh" style={{ width: "5.3rem" }} />{" "}
            E-PROCUREMENT PORTAL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Tenders", "Progress Log", "Logout"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={
                    index === 0
                      ? "/bidder/tender"
                      : index === 1
                      ? "/bidder/progress"
                      : "/"
                  }
                  onClick={() => {
                    if (index === 2) {
                      localStorage.removeItem("user");
                      localStorage.removeItem("setAt");
                      localStorage.removeItem("expireAt");
                      localStorage.removeItem("authSmsId");
                      localStorage.removeItem("authEmailId");
                      navigate("/");
                    }
                  }}
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <BackupTableIcon />
                    ) : index === 1 ? (
                      <BookIcon />
                    ) : index === 2 ? (
                      <LogoutIcon />
                    ) : (
                      <MailIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <div style={page}>
        <Box sx={{ ...theme.mixins.toolbar, paddingBottom: 10 }}></Box>
        {children}
      </div>
    </div>
  );
}

export default Layout;
