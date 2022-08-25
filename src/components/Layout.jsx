import React, { useState } from "react";
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
import LoginIcon from "@mui/icons-material/Login";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import GavelIcon from "@mui/icons-material/Gavel";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import chatbotConfig from "../utils/chatbotConfig";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";



const page = {
  width: "100%",
};

const drawerWidth = 240;
const drawerStyle = {
  width: 240,
};
const drawerPaper = {
  width: 240,
};

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
  backgroundColor: "#243665",
  color: "#FFFFFF",
  zIndex: (theme) => theme.zIndex.drawer + 2,
  borderRadius: "5rem",
  width: "4rem",
  height: "4rem",
  "&:hover": {
    backgroundColor: "#2f4684"
  }
};

function Layout({ children}) {
  const theme = useTheme();
  const [showChat, setShowChat] = useState(false);

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {["User Login", "Bidder enrollment"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={Link}
                to={
                  index === 0
                    ? "/login"
                    : index === 1
                    ? "/bidder/enrollment"
                    : "/"
                }
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <LoginIcon />
                  ) : index === 1 ? (
                    <GavelIcon />
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
    </div>
  );

  const toggleDiv = () => {
    setShowChat((prev) => !prev);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div style={{ display: "flex" }}>
      {/* app bar  */}
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        elevation={0}
      >
        <Toolbar sx={{
          height: 50,
          
        }}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="a"
            fontFamily="Bebas Neue"
            href="/"
            sx={{
              letterSpacing: "0.3rem",
              textDecoration: "none",
              color: "#fff",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <img src={Stambh} alt="stambh" style={{ width: "4rem" }} />{" "}
            E-PROCUREMENT PORTAL
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, minHeight: "100vh" }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            minHeight: "100vh",
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              minHeight: "100vh",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <div style={page}>
        <Box sx={{ ...theme.mixins.toolbar, paddingBottom: 10 }}></Box>
        {children}
      </div>
      <div>
        <div>
          {showChat && (
            <Box
              sx={{
                margin: 0,
                top: "auto",
                right: 20,
                bottom: 30,
                left: "auto",
                position: "fixed",
                zIndex: (theme) => theme.zIndex.drawer + 2,
                marginBottom: "4rem"
              }}
            >
              <Chatbot
                config={chatbotConfig}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </Box>
          )}
        </div>
        <Button variant="fab" aria-label="add" sx={style} onClick={toggleDiv}>
          <ChatBubbleIcon />
        </Button>
      </div>

      {/* <SizeChange size={size} setSize={setSize} /> */}
    </div>
  );
}

export default Layout;
