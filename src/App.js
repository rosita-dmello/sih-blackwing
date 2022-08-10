import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
