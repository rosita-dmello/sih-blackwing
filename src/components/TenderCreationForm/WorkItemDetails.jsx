import React, { useState } from 'react'
import { Grid, Button, Box } from '@mui/material'
import CustomTextField from './CustomTextField'
import CustomDropDown from './CustomDropDown'
import CustomSelect from './CustomSelect'

const WorkItemDetails = (props) => {
  const [workItemDetails, setWorkItemDetails] = useState({})
  console.log(workItemDetails)
  const preBid = [{ label: 'Yes', value: true }, { label: 'No', value: false }]
  const productCategories = ['Computer- Data Processing', 'Computer- H/W', 'Computer- Man Power', 'Computer- S/W', 'Crop Products', 'Electrical Work/Equipment', 'Electronics Equipment', 'Food Products', 'Furniture/Fixture', 'Medical Equipments/Waste', 'Medicines', 'Metal Makes', 'Miscellaneous', 'Pesticide', 'Publishing/Printing']
  return (
    <>
      <Box sx={{ width: '80%', margin: '3vh auto' }}>
        <Grid container sx={{ width: '100%' }}>
          <Grid item xs={6} sx={{ width: '100%' }} >
            <CustomTextField textlabel="Work/Item Title" value="workitemtitle" values={workItemDetails} setValues={setWorkItemDetails} />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField textlabel="Location Detail" value="locationDetails" values={workItemDetails} setValues={setWorkItemDetails} />
          </Grid>
          <Grid item xs={6} sx={{ width: '100%' }} >
            <CustomTextField textlabel="Work/Item Description" multiline rows={2} value="workitemdesc" values={workItemDetails} setValues={setWorkItemDetails} />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField textlabel="Pincode" value="pincode" values={workItemDetails} setValues={setWorkItemDetails} />
          </Grid>
          <Grid item xs={6} sx={{ width: '100%' }} >
            <CustomTextField textlabel="Pre Qualification Details" multiline rows={2} value="preQualDetails" values={workItemDetails} setValues={setWorkItemDetails} />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField textlabel="Pre Bid Meeting" value="locationDetails" values={workItemDetails} setValues={setWorkItemDetails} />
          </Grid>
          <Grid item xs={6} sx={{ width: '100%' }} >
            <CustomDropDown textlabel="Product Category" value="productCategory" array={productCategories} values={workItemDetails} setValues={setWorkItemDetails} />
          </Grid>
          <Grid item xs={6} >
            <Grid item sx={{marginLeft:'5%'}}>
              <CustomSelect textlabel="Pre Bid Meeting" array={preBid} value="preBidMeeting" values={workItemDetails} setValues={setWorkItemDetails} />
            </Grid>
            <CustomTextField disable={workItemDetails.preBidMeeting} textlabel="Location Detail" value="locationDetails" values={workItemDetails} setValues={setWorkItemDetails} />
          </Grid>
        </Grid>

      </Box>
      <Grid container>
        <Grid item>
          <Button onClick={props.prevStep}>previous</Button>
        </Grid>
        <Grid item>
          <Button onClick={()=>{props.nextStep(WorkItemDetails)}}>next</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default WorkItemDetails