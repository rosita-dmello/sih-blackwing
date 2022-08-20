import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup, Grid, Typography } from '@mui/material'

const CustomSelect = (props) => {

    const handleChange = (e) => {
        props.setValues({ ...props.values, [props.value]: e.target.value })
    }

    return (<>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item sx={{ display: 'flex', justifyContent: 'center',alignItems:'center', padding: '1%', width: '100%' }}>

                <Typography sx={{ width: {md:'64%',sm:'50%',xs:'40%'}, fontSize: '2.25vh' }}>
                    {props.textlabel}
                </Typography>
                <FormControl >
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        onChange={handleChange}
                        sx={{width:'100%'}}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>

        </Grid>
    </>
    )
}

export default CustomSelect