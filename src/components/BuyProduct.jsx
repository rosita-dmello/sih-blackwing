import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";
import Layout from "../components/DepartmentLayout";
import ProductCard from "./ProductCard";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProductView from "./ProductView";
import {getProducts} from '../api/products';

function BuyProduct() {
  const [data, setData] = React.useState([
    // {
    //   title: "Car",
    //   description: "This is a car",
    //   mrp: 100000,
    //   seller: "A",
    //   offeredprice: 90000,
    //   availability: 10,
    //   hsncode: "1234",
    //   categories: ["car", "vehicle"],
    //   file: "https://picsum.photos/200/300",
    // },
    // {
    //   title: "Bike",
    //   description: "This is a bike",
    //   mrp: 100000,
    //   seller: "B",
    //   offeredprice: 90000,
    //   availability: 10,
    //   hsncode: "1234",
    //   categories: ["bike", "vehicle"],
    //   file: "https://picsum.photos/200/300",
    // },
    // {
    //   title: "Bike",
    //   description: "This is a bike",
    //   mrp: 100000,
    //   seller: "C",
    //   offeredprice: 90000,
    //   availability: 10,
    //   hsncode: "1234",
    //   categories: ["bike", "vehicle"],
    //   file: "https://picsum.photos/200/300",
    // },
  ]);

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
    return (<Layout><ProductView data={selected} type="dept"/></Layout>);
  }

  

  return (
    <Layout>
      <Box sx={{ minHeight: "100vh", marginTop: "30px" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item sx={{ textAlign: "center" }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="standard"
              style={{ position: "relative", width: "300px" }}
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
      </Box>
    </Layout>
  );
}

export default BuyProduct;
