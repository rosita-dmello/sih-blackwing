import React,{useEffect} from 'react'
import { Grid,Button } from '@mui/material'
import { viewAllStaffGet } from '../../api/department'

const BidOpeners = (props) => {
    useEffect(() => {
      viewAllStaffGet()
    }, [])
    
    return (
        <>BidOpeners
            <Grid container>
                <Grid item>
                    <Button onClick={props.prevStep}>previous</Button>
                </Grid>
                <Grid item>
                    <Button onClick={props.nextStep}>next</Button>
                </Grid>
            </Grid></>
    )
}

export default BidOpeners