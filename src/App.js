import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import { theme } from "./utils/theme";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import UserLogin from "./pages/UserLogin";
import DepartmentUsers from "./pages/DepartmentUsers";
import NewDSCUser from "./pages/NewDSCUser";
import BidderEnrollment from "./pages/BidderEnrollment";
import BidderDash from "./pages/BidderDash";
import DepartmentDash from "./pages/DepartmentDash";
import { AnimatePresence } from "framer-motion";
import BidderSideTender from "./pages/BidderSideTender";
import Enable2FA from "./pages/Enable2FA";
import Complete2FA from "./pages/Complete2FA";
import EnterOTPs from "./pages/EnterOTPs";
import TenderCreation from './pages/TenderCreation';
import BidderProgress from "./components/BidderProgress";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import SizeChange from "./components/SizeChange";
import GrievanceForm from "./components/GrievanceForm";
import BidderStatus from "./components/BidderStatus";
import TextAdjust from "./components/TextAdjust";
import Footer from "./components/Footer";
import Ebazaar from "./components/Ebazaar";
import alanBtn from '@alan-ai/alan-sdk-web';
// require('dotenv').config();
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import DepartmentSideTender from "./pages/DepartmentSideTender";
import BidderApply from './pages/BidderApply'
function App() {
  const loc = useLocation();
  const [size, setSize] = useState(14);
  const [tender, setTender] = useState(null);

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  const newTheme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#243665',
      
      },
      secondary: {
        main: '#dcdcdc',
      },
    },
   
    mixins: {
        toolbar: {
            minHeight: 80
        }
    },
    typography: {
      fontSize: size
    }
  });

  useEffect(() => {
    alanBtn({
        key: '4b4aadc895ad47b6d4238641af136e712e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
    });
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={newTheme}>
        <AnimatePresence exitBeforeEnter>
        {/* <Navbar /> */}
        <Routes location={loc} key={loc.key}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/totp/enable" element={<Enable2FA/>} />
          <Route path="/totp/enter" element={<Complete2FA/>} />
          <Route path="/otp/enter" element={<EnterOTPs/>} />

          {/* Nodal Officer and DSC  */}
          {/* <Route path="/nodalofficer/verify" element={<DSCCode/>} /> */}
          {/* <Route path="/nodalofficer/setpassword" element={<DSCPassword/>} /> */}
          

          <Route path="/bidder/enrollment" element={<BidderEnrollment/>} />
          <Route path="/bidder" element={<BidderSideTender setTender={setTender}/>} />
          <Route path="/bidder/progress" element={<BidderProgress/>} />
          <Route path="/bidder/grievance" element={<GrievanceForm/>} />
          <Route path="/bidder/status" element={<BidderStatus/>} />
          <Route path="/bidder/ebazar" element={<Ebazaar/>} />
          <Route path="/bidder/apply" element={<BidderApply tender={tender}/>}/>

          <Route path="/department" element={<DepartmentSideTender/>} />
          <Route path="/department/createtender" element={<TenderCreation/>} />
          <Route path="/department/users" element={<DepartmentUsers/>} />
          <Route path="/department/users/new" element={<NewDSCUser/>} />
          {/* <Route path="/department/tenders" element={<DepartmentSideTender/>} /> */}
        </Routes>
        {/* <TextAdjust size={size} setSize={setSize} /> */}
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
        <Footer size={size} setSize={setSize}/>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
