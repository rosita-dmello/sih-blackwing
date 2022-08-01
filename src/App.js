import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Navbar/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
