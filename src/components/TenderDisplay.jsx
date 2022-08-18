import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TenderCard from "./TenderCard";
import ReactPaginate from 'react-paginate';
import './td.css'

function TenderDisplay() {
  const tempTenders = [
    {
      tenderId: "Tender1",
      tenderName: "Tender1",
      tenderDescription: "Tender1",
      tenderAmount: "Tender1",
      tenderDate: "Tender1",
    },
    {
      tenderId: "Tender2",
      tenderName: "Tender2",
      tenderDescription: "Tender2",
      tenderAmount: "Tender2",
      tenderDate: "Tender2",
    },
    {
      tenderId: "Tender3",
      tenderName: "Tender3",
      tenderDescription: "Tender3",
      tenderAmount: "Tender3",
      tenderDate: "Tender3",
    },
    {
      tenderId: "Tender4",
      tenderName: "Tender4",
      tenderDescription: "Tender4",
      tenderAmount: "Tender4",
      tenderDate: "Tender4",
    },
    {
      tenderId: "Tender5",
      tenderName: "Tender5",
      tenderDescription: "Tender5",
      tenderAmount: "Tender5",
      tenderDate: "Tender5",
    },
    {
      tenderId: "Tender6",
      tenderName: "Tender6",
      tenderDescription: "Tender6",
      tenderAmount: "Tender6",
      tenderDate: "Tender6",
    },
    {
      tenderId: "Tender6",
      tenderName: "Tender6",
      tenderDescription: "Tender6",
      tenderAmount: "Tender6",
      tenderDate: "Tender6",
    },
    {
      tenderId: "Tender6",
      tenderName: "Tender6",
      tenderDescription: "Tender6",
      tenderAmount: "Tender6",
      tenderDate: "Tender6",
    },
    {
      tenderId: "Tender6",
      tenderName: "Tender6",
      tenderDescription: "Tender6",
      tenderAmount: "Tender6",
      tenderDate: "Tender6",
    },
    {
      tenderId: "Tender6",
      tenderName: "Tender6",
      tenderDescription: "Tender6",
      tenderAmount: "Tender6",
      tenderDate: "Tender6",
    },
    {
      tenderId: "Tender6",
      tenderName: "Tender6",
      tenderDescription: "Tender6",
      tenderAmount: "Tender6",
      tenderDate: "Tender6",
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
          <TextField
            id="outlined-basic"
            label="Search"
            variant="standard"
            style={{ position: "relative", width: "250px" }}
            onChange={(e) => {
              const search = e.target.value;
              const filteredUsers = tempTenders.filter((user) => {
                return user.tenderName.includes(search);
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
                <Grid item>
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
