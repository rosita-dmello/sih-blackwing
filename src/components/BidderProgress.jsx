import React from "react";
import Layout from "./BidderLayout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Grid, Typography } from "@mui/material";
import BidderProgressTable from "./BidderProgressTable";

function BidderProgress() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Grid item >
            <Button variant="Info" onClick={handleShow} style={{backgroundColor: 'lightskyblue', marginLeft: '30px'}}>
              Add Log
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Fill Below</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Typography component='p' style={{color: 'red'}}>@All the entered fields will be monitored and are subjected to inspection</Typography>
              </Modal.Footer>
            </Modal>
          </Grid>
          <Grid item >
            <BidderProgressTable />
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default BidderProgress;
