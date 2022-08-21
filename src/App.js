import React, {useState} from "react";
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
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import SizeChange from "./components/SizeChange";

function App() {
  const loc = useLocation();
  const [size, setSize] = useState(14);

  const newTheme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#3e92cc',
        light: '#87adf3',
      },
      secondary: {
        main: '#e5e5e5',
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
          <Route path="/dsc/users" element={<DepartmentUsers/>} />
          <Route path="/dsc/users/new" element={<NewDSCUser/>} />

          <Route path="/bidder/enrollment" element={<BidderEnrollment/>} />
          <Route path="/bidder" element={<BidderDash/>} />
          <Route path="/bidder/tender" element={<BidderSideTender/>} />

          <Route path="/department" element={<DepartmentDash/>} />
          <Route path="/department/createtender" element={<TenderCreation/>} />

        </Routes>
        <SizeChange size={size} setSize={setSize} />
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
