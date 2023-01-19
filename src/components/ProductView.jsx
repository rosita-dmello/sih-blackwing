import React from "react";
import { Grid, Paper, Typography, Button, TextField, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import {useState} from 'react'
import RemoveIcon from "@mui/icons-material/Remove";
import axios from 'axios'

function ProductView({ data, type }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = React.useState(1);
  const available = data.availability;


  const [orderAmount, setOrderAmount] = useState(data.offeredprice*quantity);
    const apiUrl = "http://localhost:5001/api/payments";


    function loadRazorpay() {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
          alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = async () => {
          try {
            
            const result = await axios.post(apiUrl + '/create-order', {
              amount: orderAmount + '00',
            });
            const { amount, id: order_id, currency } = result.data;
            console.log(amount);
            const {
              data: { key: razorpayKey },
            } = await axios.get(apiUrl + '/get-razorpay-key');
    
            const options = {
              key: razorpayKey,
              amount: amount.toString(),
              currency: currency,
              name: 'Blackwing',
              description: 'Donate any amount towards a greener future',
              order_id: order_id,
              handler: async function (response) {
                const result = await axios.post(apiUrl + '/pay-order', {
                  amount: amount,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                });
                alert(result.data.message);
               
              },
              theme: {
                color: '#8fd071',
              },
            };
    
         
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          } catch (err) {
            alert(err);
            
          }
        };
        document.body.appendChild(script);
      }



  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ marginTop: "30px" }}
    >
      <Grid item sx={{ padding: "20px", minWidth: "500px" }}>
        <img
          src={data.thumbnail}
          alt="product"
          style={{ width: "200px", float: "left", margin: "10px", minHeight: "300px" }}
        />
        <Typography variant="h3">{data.title}</Typography>
        <Typography variant="h5">Description: {data.description}</Typography>
        <Typography variant="h5">Sold By: {data.seller}</Typography>
        <Typography variant="h5">Availability: {data.availability}</Typography>
        <br />
        <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
          MRP: {data.mrp}
        </Typography>
        <Typography variant="body2">
          Offered Price: {data.offeredprice}
        </Typography>
        <br />
        {type === "dept" && (
          <Typography variant="h5">
            Quantity:{" "}
            <RemoveIcon
              sx={{
                backgroundColor: "#243665",
                color: "white",
                marginLeft: "5px",
                borderRadius: "20%",
              }}
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
                setOrderAmount(data.offeredprice * quantity);
              }}
            />{" "}
            {quantity}{" "}
            <AddIcon
              sx={{
                backgroundColor: "#243665",
                color: "white",
                marginLeft: "5px",
                borderRadius: "20%",
              }}
              color="primary"
              onClick={() => {
                if (quantity < available) setQuantity(quantity + 1);
                setOrderAmount(data.offeredprice*quantity);
              }}
            />
          </Typography>
        )}

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {type === "dept" && (
            <Grid item>
              <Typography variant="h6">
                Total Price: {quantity * data.offeredprice}
              </Typography>
            </Grid>
          )}
          <Grid item>
            <Typography variant="h6">Category:</Typography>
          </Grid>
          {data.categories.map((item) => {
            return (
              <Grid item>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={15}
                  sx={{
                    backgroundColor: "#243665",
                    color: "white",
                    borderRadius: "30%",
                    padding: "10px",
                  }}
                >
                  {item}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          {type === "dept" && (
            <Grid item>
              <Button variant="contained" color="primary" onClick={loadRazorpay}>
                Purchase
              </Button>
            </Grid>
          )}
          {type === "dept" && (
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/department/buy")}
              >
                Back
              </Button>
            </Grid>
          )}
          {type === "bidder" && (
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate("/bidder/ebazar")}
              >
                Back
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductView;
