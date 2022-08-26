import React from "react";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";
import Option1 from '../home_selections/Option1';
import Option2 from '../home_selections/Option2';
import Option3 from '../home_selections/Option3';
import Option4 from '../home_selections/Option4';
import './something.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function findOcc(arr, key){
  let arr2 = [];
    
  arr.forEach((x)=>{
       
    // Checking if there is any object in arr2
    // which contains the key value
     if(arr2.some((val)=>{ return val[key] == x[key] })){
         
       // If yes! then increase the occurrence by 1
       arr2.forEach((k)=>{
         if(k[key] === x[key]){ 
           k["occurrence"]++
         }
      })
         
     }else{
       // If not! Then create a new object initialize 
       // it with the present iteration key's value and 
       // set the occurrence to 1
       let a = {}
       a[key] = x[key]
       a["occurrence"] = 1
       arr2.push(a);
     }
  })
    
  return arr2
}
function Something({tenders}) {
  const [selected, setSelected] = React.useState(1);
  const categoryCount = findOcc(tenders, "tendercategory");
  console.log(categoryCount);
  const data = {
    labels: categoryCount.map((category) => category.tendercategory),
    datasets: [
      {
        label: 'Category of Tenders',
        data: categoryCount.map((category) => category.occurrence),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const handleSelected = (val) => {
    setSelected(val);
  }
  return (
    // <div className="adj">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          margin: "2rem"
        }}
      >
        <Grid item>
          <Typography variant="h4">Statistics</Typography>
        </Grid>
        <Grid item>
          <Grid container directions="row">
            <Grid item>
            <Pie data={data} />
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        
          {/* <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid
              item
              lg={4}
              md={12}
              sm={12}
              style={{ width: "100%", padding: "10px", textAlign: "center" }}
            >
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button onClick={() => {handleSelected(1)}}>One</Button>
                <Button onClick={() => {handleSelected(2)}}>Two</Button>
                <Button onClick={() => {handleSelected(3)}}>Three</Button>
                <Button onClick={() => {handleSelected(4)}}>Four</Button>
                </ButtonGroup>
              <div style={{marginTop: '20px'}}>Currently viewing: {selected}</div>
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              sm={12}
              className="adj2"
            >
              {selected === 1 && <Option1 />}
              {selected === 2 && <Option2 />}
              {selected === 3 && <Option3 />}
              {selected === 4 && <Option4 />}
            </Grid>
          </Grid> */}
        </Grid>
       
      </Grid>
    // </div>
  );
}

export default Something;
