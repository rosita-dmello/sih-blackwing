import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom';


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function TenderCard({ tender }) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {tender.tenderName}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Categries:
        </Typography>
        <div className="cat">
          {tender.tenderDescription.map((item, index) => {
            return (
              <Typography
                key={index}
                variant="body2"
                component="p"
                color="textSecondary"
                style={{
                  margin: "8px",
                  backgroundColor: "lightblue",
                  padding: "5px",
                  borderRadius: "5em",
                }}
              >
                {item}
              </Typography>
            );
          })}
        </div><br />
        <div className="cat">
          <div className="lower-adjust">
            <Typography variant="h6" component="p" color="textSecondary">
              Opening Date
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p" style={{color:"green"}}>{tender.tenderOpeningDate}</Typography>
          </div>
          <div className="lower-adjust">
            <Typography variant="h6" component="p" color="textSecondary">
              Closing Date
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p" style={{color:"green"}}>{tender.tenderClosingDate}</Typography>
          </div>
          <div className="lower-adjust">
            <Typography variant="h6" color="textSecondary">
              Tender Amount
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p" style={{color:"green"}}>Rs. {tender.tenderAmount}</Typography>
          </div>
        </div>
      </CardContent>
      <div style={{textAlign: 'center', marginBottom: '8px'}}>
        <Button component={Link} size="small" to='/login'>Know More</Button>
      </div>
    </Card>
  );
}
