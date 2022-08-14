import HomeCarousel from "../effects/Carousel"; 
import Navbar from "./Navbar";
import Something from "./Something";
import Layout from "./Layout"
function Home() {
  return (
    <Layout>
      <div id='home'>
    <HomeCarousel />
    <div id='something'>
    <Something />
    </div>
    </div>
    </Layout>
    
  );
}

export default Home;