import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
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

function App() {
  const loc = useLocation();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
          <Route path="/bidder/progress" element={<BidderProgress/>} />

          <Route path="/department" element={<DepartmentDash/>} />
          <Route path="/department/createtender" element={<TenderCreation/>} />

        </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
