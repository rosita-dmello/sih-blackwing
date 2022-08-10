import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DSCCode from "./pages/DSCCode";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nodalofficer/verify" element={<DSCCode/>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
