import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import moment from "moment";
import { Typography } from "@mui/material";
moment().format();

// name: "Mr. Sample User",
// email: "SampleID",
// organisationchain: "Sample Organisation",
// type: "gap",
// status: "gap",
// view: {
//   url: "/sampledoc"
// }
const columns = [
  
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "type",
    label: "Type",
    minWidth: 100,
  },
  {
    id: "email",
    label: "Login ID",
    minWidth: 100,

  },
  {
    id: "organisationchain",
    label: "Organisation Chain",
    minWidth: 100,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
  },
];


export default function DepartmentUsersTable({ users }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  // console.log(moment("2022-08-07T14:07:25.489Z").utcOffset("+05:30").format('DD MMMM YYYY'));
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
    </Paper>
  );
}
