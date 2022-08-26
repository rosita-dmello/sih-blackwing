import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TenderCard from "./TenderCard";
import ReactPaginate from 'react-paginate';
import './td.css'

function TenderDisplay() {
  const tempTenders = [
    {
      tenderId: 25612,
      tenderName: "Public Health and Sanitation",
      tenderLocation: "Kathmandu",
      tenderDescription: ["Pipes and Fittings", "Electrical", "Plumbing"],
      tenderAmount: "100,000",
      tenderOpeningDate: "17 Oct 2022",
      tenderClosingDate: "2 Dec 2022",
    },
    {
      tenderId: 25615,
      tenderName: "Public Health and Sanitation",
      tenderLocation: "Kathmandu",
      tenderDescription: ["Pipes and Fittings", "Electrical", "Plumbing"],
      tenderAmount: "100,000",
      tenderOpeningDate: "17 Oct 2022",
      tenderClosingDate: "2 Dec 2022",
    },
  ];

  const [users, setUsers] = React.useState(tempTenders);
  const [pageNumber, setPageNumber] = React.useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item style={{ textAlign: "center" }}>
          <h1>Tender Display</h1>
        </Grid>
        <Grid item style={{ paddingLeft: "50px", marginBottom: "20px" }}>
          {/* <div style={{textAlign:'center'}}>By Field:</div><br /> */}
          <TextField
            id="outlined-basic"
            label="Search"
            variant="standard"
            style={{ position: "relative", width: "250px" }}
            onChange={(e) => {
              const search = e.target.value;
              const filteredUsers = tempTenders.filter((user) => {
                return user.tenderName.toLowerCase().includes(search) || user.tenderName.toUpperCase().includes(search) || user.tenderName.includes(search) ;
              });
              setUsers(filteredUsers);
            } }
          />
          <SearchOutlinedIcon
            style={{
              position: "absolute",
              marginLeft: "-40px",
              marginTop: "10px",
              fontSize: "35px",
            }}
          />
        </Grid>
        <Grid item style={{ paddingLeft: "50px" }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            className="user"
          >
            {users.slice(pagesVisited, pagesVisited + usersPerPage).map((tender) => {
              return (
                <Grid item key={tender.tenderId}>
                  <TenderCard tender={tender} />
                </Grid>
              );
            })}
            {users.length === 0 && (
              <Grid item style={{textAlign: 'center', 'color': 'light-blue'}}>
                <Typography variant="secondary" fontSize={20}>No Such Tender Exists...</Typography>
                </Grid>)}
          </Grid>
          <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
        </Grid>
      </Grid>
    </div>
  );
}

export default TenderDisplay;
