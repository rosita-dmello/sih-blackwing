import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import DSCCode from "./pages/DSCCode";
import DSCPassword from "./pages/DSCPassword";
import UserLogin from "./pages/UserLogin";
import DepartmentUsers from "./pages/DepartmentUsers";
import NewDSCUser from "./pages/NewDSCUser";
import BidderEnrollment from "./pages/BidderEnrollment";
import BidderDash from "./pages/BidderDash";
import DepartmentDash from "./pages/DepartmentDash";
import { AnimatePresence } from "framer-motion";
import BidderSideTender from "./pages/BidderSideTender";


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

          {/* Nodal Officer and DSC  */}
          <Route path="/nodalofficer/verify" element={<DSCCode/>} />
          <Route path="/nodalofficer/setpassword" element={<DSCPassword/>} />
          <Route path="/dsc/users" element={<DepartmentUsers/>} />
          <Route path="/dsc/users/new" element={<NewDSCUser/>} />

          <Route path="/bidder/enrollment" element={<BidderEnrollment/>} />
          <Route path="/bidder" element={<BidderDash/>} />
          <Route path="/bidder/tender" element={<BidderSideTender/>} />

          <Route path="/department" element={<DepartmentDash/>} />
        </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
