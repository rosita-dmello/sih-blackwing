import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import moment from "moment";
import { Typography, FormControlLabel, Checkbox } from "@mui/material";
moment().format();

const columns = [
  
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "role",
    label: "Type",
    minWidth: 100,
  },
  {
    id: "email",
    label: "Login ID",
    minWidth: 100,

  },
  {
    id: "organizationname",
    label: "Organisation Chain",
    minWidth: 100,
  },
  {
    id: "designation",
    label: "Designation",
    minWidth: 100,
  },
  {
    id: "secretariatdepartment",
    label: "Secretariat Department",
    minWidth: 100,
  },
];


export default function BidOpenersTable({ users }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [bidOpeners, setBidOpeners] = React.useState([]);
  // console.log(moment("2022-08-07T14:07:25.489Z").utcOffset("+05:30").format('DD MMMM YYYY'));
  const handleCheck = (event, id) => {
    const { name, checked } = event.target;
    if (checked) {
      setBidOpeners((prev) => [...prev, id]);
    } else {
        setBidOpeners((prev) => prev.filter((el) => el !== id));
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = users;
  return (
    <Paper sx={{ width: "100%", overflow: "hidden"}} elevation={1}>
      {users.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5rem"
          }}
        >
          <Typography variant="h5" color="primary">
            
            NO USERS YET!
          </Typography>
        </Box>
      ) : (
        <Box>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                <TableCell
                      style={{ minWidth: 100 }}
                    >
                      Select
                    </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                          <TableCell>
                          <Checkbox
                                    value={row._id}
                                    // checked={}
                                    onChange={(event) => handleCheck(event, row._id)}
                                    color="primary"
                                  />
                              
                            </TableCell>
                        {columns.map((column) => {
                          // if (column.id == "created_at") {
                          //   row[column.id] = row[column.id].split(",")[0];
                          // }
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      )}
      <Button onClick={() => console.log(bidOpeners)}>Submit</Button>
    </Paper>
  );
}
