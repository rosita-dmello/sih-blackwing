import React, { useState } from 'react'
import { Grid, Button, Box, Typography, Checkbox, FormGroup } from '@mui/material'
import CustomSelect from './CustomSelect'
import CustomTextField from './CustomTextField'

const FeeDetails = (props) => {
  const [feeDetails, setFeeDetails] = useState([])
  const paymentMode = [{ value: 'offline', label: 'offline' }, { value: 'online', label: 'online' }, { value: 'Not Applicable', label: 'Not Applicable' }]
  const EMDfee = [{ value: 'fixed', label: 'fixed' }, { value: 'percentage', label: 'percentage' }]
  const extemption = [{ label: 'Yes', value: true }, { label: 'No', value: false }]
  const offlineInstruments=[{label:'DD-Demand Draft',value:false,name:'demandDraft'},]
  console.log(feeDetails)
  const handleChange=(e)=>{
    const name=e.target.name
    console.log(name)
  }
  return (

    <>
      <Box sx={{ width: '85%', margin: '3vh auto' }}>
        <Typography variant='h5'>Tender Fee Details</Typography>
        <hr style={{ width: '100%' }}></hr>
        <Grid container sx={{ width: '100%' }}>
          <Grid item xs={12}>
            <CustomSelect array={paymentMode} value="feepaymentmode" textlabel="Fee Payment Mode" values={feeDetails} setValues={setFeeDetails} />
          </Grid>
          <Grid item xs={12} >
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="Tender Fee(INR)" value="tenderfee" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12}>
              <CustomSelect array={extemption} value="extemptionAllowed" textlabel="Extemption Allowed" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '85%', margin: '3vh auto' }}>
        <Typography variant='h5'>Earnest Money Deposit (EMD) Details</Typography>
        <hr style={{ width: '100%' }}></hr>
        <Grid container sx={{ width: '100%' }}>
          <Grid item xs={12}>
            <CustomSelect array={EMDfee} value="emdfee" textlabel="EMD Fee" values={feeDetails} setValues={setFeeDetails} />
          </Grid>
          <Grid item xs={12} >
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="EMD Amount(INR)" value="emdamount" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="EMD ECV %" value="emdecv" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12}>
              <CustomSelect array={extemption} value="emdextemption" textlabel="EMD Extemption Allowed" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="EMD Fee Payable to" value="emdfeepayableto" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="EMD Fee Payable At" value="emdfeepayableat" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
      <Grid container direction="column" sx={{
                padding: "3rem"
            }}>
        <Grid item sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
          <Button onClick={props.prevStep}>previous</Button>
          <Button onClick={()=>{props.nextStep(feeDetails)}}>next</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default FeeDetails