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
            <CustomSelect array={paymentMode} value="feePaymentMode" textlabel="Fee Payment Mode" values={feeDetails} setValues={setFeeDetails} />
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
            <CustomSelect array={EMDfee} value="emdFee" textlabel="EMD Fee" values={feeDetails} setValues={setFeeDetails} />
          </Grid>
          <Grid item xs={12} >
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="EMD Amount(INR)" value="emdAmount" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="EMD ECV %" value="emdECV" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12}>
              <CustomSelect array={extemption} value="emdExtemption" textlabel="EMD Extemption Allowed" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="EMD Fee Payable to" value="emdFeePayTo" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
            <Grid item xs={12} sx={{ marginLeft: '-5%' }}>
              <CustomTextField textlabel="EMD Fee Payable At" value="emdFeePayAt" values={feeDetails} setValues={setFeeDetails} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      
      <Grid container>
        <Grid item>
          <Button onClick={props.prevStep}>previous</Button>
        </Grid>
        <Grid item>
          <Button onClick={()=>{props.nextStep(feeDetails)}}>next</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default FeeDetails