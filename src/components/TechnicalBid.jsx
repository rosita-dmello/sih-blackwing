import React from 'react'
import { Box, Typography, Grid, TableRow, TableCell,Table,TableHead } from '@mui/material'

const TechnicalBid = ({ tender }) => {
  console.log(tender)
  return (
    <>


      <Box sx={{ width: '85%', margin: '3vh auto' }}>
        <Typography variant='h5'>Technical Bid</Typography>
        <hr style={{ width: '100%' }}></hr>
        <Grid container sx={{ width: '100%' }}>
        </Grid>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
Sr No.
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      {
        tender.coverDetails((cover)=>{
          return <>

          </>
        })
      }
    </>
  )
}

export default TechnicalBid