import React from "react";
import Layout from "./BidderLayout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Grid, Typography } from "@mui/material";
import BidderProgressTable from "./BidderProgressTable";
import ProgressLogCard from "./PrgressLogCard";

function BidderProgress() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dummy, setDummy] = React.useState([
    {
      date: "2021-09-01",
      dueDate: "2021-09-05",
      description: "This is a dummy description",
      files: "https://www.google.com",
      status: "Not Delayed",
    },
    {
      date: "2021-10-01",
      dueDate: "2021-09-24",
      description: "This is second dummy description",
      files: "https://www.google.com",
      status: "Delayed",
    },
  ]);

  return (
    <div>
      <Layout>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
          style={{ marginTop: "50px" }}
        >
          <Grid item>
            <Button
              variant="Info"
              onClick={handleShow}
              style={{ backgroundColor: "lightskyblue", marginLeft: "30px" }}
            >
              <Typography>Add Log</Typography>
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <Typography fontWeight="bold">Fill Below</Typography>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Typography>
                  Log I will not close if you click outside me. Don't even try
                  to press escape key.
                </Typography>
              </Modal.Body>
              <Modal.Footer>
                <Typography component="p" style={{ color: "red" }}>
                  @All the entered fields will be monitored and are subjected to
                  inspection
                </Typography>
              </Modal.Footer>
            </Modal>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              {dummy.map((item) => (
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={item.description} >
                  <ProgressLogCard data={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default BidderProgress;
