import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Layout from "../components/DepartmentLayout";
import { Box, Button, Grid } from "@mui/material";
import Select from "react-select";
import { getDepartmentTenderByFilter } from "../api/tender";
import TenderView from "../components/TenderView";
import Spinner from "../utils/chakra.gif";

const columns = [
  { id: "reference_id", label: "Reference ID", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 100 },
  {
    id: "bidopener",
    label: "Bid Openers",
    minWidth: 170,
    align: "right",
  },
  {
    id: "category",
    label: "Category",
    minWidth: 170,
    align: "right",
  },
  {
    id: "accounttype",
    label: "Account Type",
    minWidth: 170,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  reference_id,
  type,
  bidopener,
  category,
  accounttype,
  status
) {
  return { reference_id, type, bidopener, category, accounttype, status };
}

export default function DepartmentSideTender({ setTender }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [tenders, setTenders] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const types = [
    { value: "None", label: "None" },
    { value: "EOI", label: "EOI" },
    { value: "Open Limited", label: "Open Limited" },
    { value: "Limited", label: "Limited" },
    { value: "Open Tender", label: "Open Tender" },
    { value: "Single", label: "Single" },
    { value: "Test", label: "Test" },
  ];

  const categories = [
    { value: "None", label: "None" },
    { value: "Goods", label: "Goods" },
    { value: "Services", label: "Services" },
    { value: "Works", label: "Works" },
  ];

  const mstatus = [
    { value: "None", label: "None" },
    { value: "UNPUBLISHED", label: "UNPUBLISHED" },
    { value: "PUBLISHED", label: "PUBLISHED" },
    { value: "TECHNICAL_BID", label: "TECHNICAL_BID" },
    { value: "FINANCIAL_BID", label: "FINANCIAL_BID" },
    { value: "IN_PROGRESS", label: "IN_PROGRESS" },
    { value: "CLOSED", label: "CLOSED" },
    { value: "EXPIRED", label: "EXPIRED" },
  ];

  const [type, setType] = React.useState(types[0].value);
  const [category, setCategory] = React.useState(categories[0].value);
  const [status, setStatus] = React.useState(mstatus[0].value);

  const rows = tenders.map((tender) => {
    return createData(
      tender.tenderreferenceno,
      tender.tendertype,
      tender.noofbidopeners,
      tender.tendercategory,
      tender.accounttypehead,
      tender.tendervalue
    );
  });

  React.useEffect(() => {
    getDepartmentTenderByFilter(type, category, status)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type, category, status]);

  const [selectedTender, setSelectedTender] = React.useState(null);

  if (selectedTender) {
    return (
      <Layout>
        <TenderView tender={selectedTender} set={setTender} />
      </Layout>
    );
  } else if (loading) {
    return (
      <>
        <Box
          className="spinner"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 10,
            backgroundColor: "white",
            padding: "50rem",
          }}
        >
          <img src={Spinner} alt="Loading..." />
        </Box>
      </>
    );
  }

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
        sx={{marginTop: "25px"}}
      >
        <Grid item style={{ textAlign: "center" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <div>Filter by Type:</div>
              <Select
                options={types}
                onChange={(e) => {
                  setType(e.value);
                }}
                className="select-adj"
              />
            </Grid>
            <Grid item>
              <div>Filter by Category:</div>
              <Select
                options={categories}
                onChange={(e) => {
                  setCategory(e.value);
                }}
                className="select-adj"
              />
            </Grid>
            <Grid item>
            <div>Filter by Status:</div>
            <Select
              options={mstatus}
              onChange={(e) => {
                setStatus(e.value);
              }}
              className="select-adj"
            />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="tender-table">
          <Paper sx={{ width: "100%", overflow: "hidden", padding: "20px" }}>
            <TableContainer
              sx={{
                maxHeight: 440,
                border: "2px solid black",
                borderRadius: "15px",
                margin: "10px",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#243665",
                          color: "white",
                        }}
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
                          compnent={Button}
                          onClick={() => {
                            setSelectedTender(
                              tenders.find(
                                (tender) =>
                                  tender.tenderreferenceno === row.reference_id
                              )
                            );
                          }}
                        >
                          {columns.map((column) => {
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
                  {tenders.length === 0 && (
                    <div style={{ textAlign: "center" }}>No Tenders Found</div>
                  )}
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
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
