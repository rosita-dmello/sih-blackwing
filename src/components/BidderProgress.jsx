import React from "react";
import Layout from "./BidderLayout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  Grid,
  Typography,
  TextField,
  CircularProgress,
  Box,
  InputLabel,
  Input,
} from "@mui/material";
import BidderProgressTable from "./BidderProgressTable";
import ProgressLogCard from "./PrgressLogCard";
import {submitProgress} from '../api/common'

function BidderProgress() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [submitted, setSubmitted] = React.useState(false);
  const [file, setFile] = React.useState(null);
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

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const data = new FormData(event.currentTarget);
    submitProgress(data.get('description'),file,localStorage.getItem('token')).then((res) => {
      console.log(res);
      setSubmitted(false);
      setShow(false);
    }
    );
  }

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
                <Box component='form' noValidate onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  autoFocus
                />
                <InputLabel>
                    <Typography variant="h6" sx={{ fontSize: "100%" }}>
                      Upload File Here
                    </Typography>
                  <Input
                    type="file"
                    id="file"
                    name="file"
                    sx={{ mb: 1 }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </InputLabel>
                <br />
                {submitted ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  ""
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 8,
                    mb: 2,
                    py: 1,
                    borderRadius: 0,
                    textAlign: "center",
                    backgroundColor: "primary.main",
                  }}
                >
                  Submit
                </Button>
                </Box>
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  key={item.description}
                >
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
