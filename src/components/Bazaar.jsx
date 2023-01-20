import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import Layout from "../components/BidderLayout";
import ProductCard from "./ProductCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProductView from "./ProductView";
import {getProducts} from "../api/products";

function Bazaar() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getProducts().then((res) => {
      setData(res.result.data.products);
    });
  }, []);

  const [selected, setSelected] = React.useState(null);
  const[tempData, setTempData] = React.useState(data);
  const handleView = (item) => {
    setSelected(item);
  };

  if (selected) {
    return (<Layout><ProductView data={selected} type="bidder"/></Layout>);
  }

  
  

  return (
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={2}
          sx={{ marginTop: "30px"}}
        >
          <Grid item sx={{ textAlign: "center" }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="standard"
              style={{ position: "relative", width: "350px"  }}
              onChange={(e) => {
                const search = e.target.value;
                const filteredUsers = tempData.filter((user) => {
                  return (
                    user.title.toLowerCase().includes(search) ||
                    user.title.toUpperCase().includes(search) ||
                    user.title.includes(search)
                  );
                });
                setData(filteredUsers);
              }}
            />
            <SearchOutlinedIcon
              style={{
                position: "absolute",
                marginLeft: "-40px",
                marginTop: "10px",
                fontSize: "35px",
              }}
              color="primary"
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
              sx={{padding: "20px"}}
            >
              {data.map((item, index) => {
                return (
                  <Grid item key={index} >
                    <Button  onClick={()=>handleView(item)}>
                    <ProductCard data={item} />
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
  );
}

export default Bazaar;
