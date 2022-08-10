import HomeCarousel from "../effects/Carousel"; 
import Navbar from "./Navbar";
import Something from "./Something";
function Home() {
  return (
    <div id='home'>
    <Navbar />
    <HomeCarousel />
    <div id='something'>
    <Something />
    </div>
    </div>
  );
}

export default Home;