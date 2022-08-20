import React from "react";
import HomeCarousel from "../effects/Carousel";
import Something from "./Something";
import Layout from "./Layout";
import TenderDisplay from "./TenderDisplay";
import { motion } from "framer-motion";
import Spinner from "../utils/chakra.gif";
import { Typography } from "@mui/material";
import {getAllTenders} from "../api/tender";

function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
      getAllTenders().then((res) => {
        console.log(res);
        setLoading(false);
      }
      );
  }, []);
  if(loading){
    return ( <>
      <div className="spinner">
        <img src={Spinner} alt="Loading..." />
      </div>
    </>);
  }
  return (
    
    <Layout>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'tween', duration: 0.9}} exit={{ opacity: 0, transition: { ease: 'easeInOut', duration: 0.5 } }} id="home">
        <HomeCarousel />
        <div id="something">
          <Something />
        </div>
        <div>
          <TenderDisplay />
        </div>
      </motion.div>
    </Layout>
  );
}

export default Home;
