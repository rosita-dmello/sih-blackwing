import React from "react";
import HomeCarousel from "../effects/Carousel";
import Something from "./Something";
import Layout from "./Layout";
import TenderDisplay from "./TenderDisplay";
import { motion } from "framer-motion";
import Spinner from "../utils/chakra.gif";
import { Box } from "@mui/material";
import {getAllTenders} from "../api/tender";

function Home() {
  const [loading, setLoading] = React.useState(true);
  const [tenders, setTenders] = React.useState([]);
  React.useEffect(() => {
      getAllTenders().then((res) => {
        console.log(res);
        setLoading(false);
        setTenders(res.result.data.tenders);
      }
      );
  }, []);
  if(loading){
    return ( <>
      <Box className="spinner" sx={{zIndex: (theme) => theme.zIndex.drawer + 10, backgroundColor: 'white', padding: '50rem'}}>
        <img src={Spinner} alt="Loading..." />
      </Box>
    </>);
  }
  return (
    
    <Layout>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{type: 'tween', duration: 0.9}} exit={{ opacity: 0, transition: { ease: 'easeInOut', duration: 0.5 } }} id="home">
        <HomeCarousel />
        {tenders && <div id="something">
          <Something tenders={tenders}/>
        </div>}
        
        <div>
          <TenderDisplay />
        </div>
      </motion.div>
    </Layout>
  );
}

export default Home;
