import React from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import Option1 from '../home_selections/Option1';
import Option2 from '../home_selections/Option2';
import Option3 from '../home_selections/Option3';
import Option4 from '../home_selections/Option4';
import './something.css';

function Something() {
  const [selected, setSelected] = React.useState(1);
  const handleSelected = (val) => {
    setSelected(val);
  }
  return (
    <div className="adj">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <h1>Something</h1>
        </Grid>
        <Grid item>
          <Grid
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Something;
