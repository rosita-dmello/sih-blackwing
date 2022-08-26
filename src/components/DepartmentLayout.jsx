import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stambh from "../utils/stambh.png";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import GavelIcon from "@mui/icons-material/Gavel";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Button from "@mui/material/Button";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import chatbotConfig from "../utils/chatbotConfig";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import { useNavigate } from "react-router-dom";
// import theme from "../App";

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
};

function Layout({ children }) {
  const theme = useTheme();
  const [role, setRole] = React.useState("DEPARTMENT_HEAD");
  const [list, setList] = React.useState(["Staff"]);
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  const toggleDiv = () => {
    setShowChat((prev) => !prev);
  };
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setRole(user.role);
    if (role === "DEPARTMENT_HEAD") {
      setList(["Department Users", "New Department User", "Logout"]);
    } else if (role === "DEPARTMENT_STAFF") {
      setList(["Staff"]);
    }
  }, [role]);

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {role === "DEPARTMENT_HEAD"
            ? list.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={
                      index === 0
                        ? "/department/users/"
                        : index === 1
                        ? "/department/users/new/"
                        : "/"
                    }
                    onClick={() => {
                      if (index === 2) {
                        localStorage.removeItem("user");
                        localStorage.removeItem("setAt");
                        localStorage.removeItem("expireAt");
                        localStorage.removeItem("authSmsId");
                        localStorage.removeItem("authEmailId");
                        localStorage.removeItem("token");
                        navigate("/");
                      }
                    }}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <PeopleIcon />
                      ) : index === 1 ? (
                        <GroupAddIcon />
                      ) : index === 2 ? (
                        <LogoutIcon />
                      ) : (
                        <MailIcon />
                      )}
                    </ListItemIcon>

                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))
            : list.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={
                      index === 0
                        ? "/department"
                        : "/"
                    }
                    onClick={() => {
                      if (index === 1) {
                        localStorage.removeItem("user");
                        localStorage.removeItem("setAt");
                        localStorage.removeItem("expireAt");
                        localStorage.removeItem("authSmsId");
                        localStorage.removeItem("authEmailId");
                        localStorage.removeItem("token");
                        navigate("/");
                      }
                    }}
                  >
                    <ListItemIcon>
                      {index === 0 ? (
                        <LoginIcon />
                      ) : index === 1 ? (
                        <LogoutIcon />
                      ) : index === 2 ? (
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          minHeight: "100vh",
        }}
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
            },
            minHeight: "100vh",
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
                bottom: 20,
                left: "auto",
                position: "fixed",
                marginBottom: "3rem",
                zIndex: (theme) => theme.zIndex.drawer + 2,
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
    </div>
  );
}

export default Layout;
