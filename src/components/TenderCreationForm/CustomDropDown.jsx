import { FormControl, MenuItem, Select, Grid, Typography } from '@mui/material'
import React from 'react'

const CustomDropDown = (props) => {
  const handleChange = (e) => {
    props.setValues({ ...props.values, [props.value]: e.target.value })
  }
  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>

          <Typography sx={{ width: '100%', fontSize: '2.25vh' }}>
            {props.textlabel}
          </Typography>
          <FormControl size='small'

            sx={{
              '& legend': { display: 'none' },
              '& fieldset': { top: 0 },
              width: '100%'
            }}
            label={props.textlabel}>
            <Select // eslint-disable-next-line
              defaultValue=''
              value={props.values.value} onChange={handleChange}>
              {
                props.array.map((item, index) => {
                  return <MenuItem key={index} value={item}>{item}</MenuItem>
                })
              }
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  )
}

export default CustomDropDown