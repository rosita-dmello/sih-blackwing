import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import moment from "moment";

function PrgressLogCard({ data }) {
  const [backgroundColor, setBackgroundColor] = React.useState("lightgreen");

  const [isDelayed, setIsDelayed] = React.useState(false);

  React.useEffect(() => {
    if (data.status === "Delayed") {
      setBackgroundColor("rgb(234, 95, 56)");
      setIsDelayed(true);
    }
  }, [data.status]);

  return (
    <div style={{ padding: "20px" }}>
      <Card sx={{ width: "100%" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            backgroundColor: { backgroundColor },
            textAlign: "center",
            padding: "10px",
          }}
        >
          Logged at: {moment(data.date).format("DD/MM/YYYY")}
        </Typography>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Typography variant="primary" color="textSecondary">
                Description: {data.description}
              </Typography>
            </Grid>
            <Grid item >
              <Typography variant="primary" color="textSecondary">
                Due Date: {moment(data.dueDate).format("DD/MM/YYYY")}
              </Typography>
            </Grid>
            <Grid item >
              <Typography variant="primary" color="textSecondary">
                Status: {data.status}
              </Typography>
            </Grid>
            <Grid item >
              <Typography variant="primary" color="textSecondary">
                Files: {data.files}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default PrgressLogCard;
