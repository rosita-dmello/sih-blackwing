import React, {useState} from "react";
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
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from "@mui/material/Button";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import chatbotConfig from "../utils/chatbotConfig";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CommentIcon from '@mui/icons-material/Comment';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';



// import theme from "../App";

const page = {
  width: "100%",
};

const drawerWidth = 240;

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  backgroundColor:'#3e92cc',
  color:'#FFFFFF',
  zIndex: (theme) => theme.zIndex.drawer + 2
 };

function Layout({ children, size, setSize }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);

  const toggleDiv = () => {
    setShowChat((prev) => !prev);
  }
  return (
    <>
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
          minHeight: "100vh"
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Tenders", "Progress Log", "Report Grievance", "Track Status","Logout"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={
                    index === 0
                      ? "/bidder/tender"
                      : index === 1
                      ? "/bidder/progress"
                      : index === 2
                      ? "/bidder/grievance"
                      : index === 3
                      ? "/bidder/status"
                      : "/"
                  }
                  onClick={() => {
                    if (index === 4) {
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
                      <CommentIcon />
                    ) : index === 3 ? (
                      <StackedLineChartIcon />
                    ) :
                    index === 4 ? (
                      <LogoutIcon />
                    ) : 
                    (
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
    </>
  );
}

export default Layout;
