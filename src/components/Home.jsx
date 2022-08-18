import HomeCarousel from "../effects/Carousel";
import Something from "./Something";
import Layout from "./Layout";
import TenderDisplay from "./TenderDisplay";
function Home() {
  return (
    <Layout>
      <div id="home">
        <HomeCarousel />
        <div id="something">
          <Something />
        </div>
        <div>
          <TenderDisplay />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
