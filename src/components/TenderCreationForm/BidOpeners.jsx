import React,{useEffect, useState} from 'react'
import { Grid,Button, CircularProgress, Box } from '@mui/material'
import { viewAllStaffGet } from '../../api/department'
import BidOpenersTable from './BidOpenersTable';

const BidOpeners = (props) => {
    const [users, setUsers] = useState(null);
    const [bidOpeners, setBidOpeners] = React.useState([]);
      const setusersFn = async () => {
        const response = await viewAllStaffGet(localStorage.getItem("token"));
        if (response) {
          setUsers(response.result.data.staffs);
        } else {
        }
      };
      useEffect(() => {
        setusersFn();
      }, []);
    const options = ['', '2 Off 4', '2 Off 3', '3 Off 3', '2 Off 2'];

    return (
        <>
            <Grid container direction="column" sx={{
                padding: "3rem"
            }}>
                <Grid item>
                    {users ? <BidOpenersTable users={users} bidOpeners={bidOpeners} setBidOpeners={setBidOpeners}/> : 
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <CircularProgress/> 
                    </Box>
                    }
                    
                </Grid>
                <Grid item sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Button onClick={props.prevStep}>previous</Button>
                    <Button onClick={()=>props.nextStep({bidopeners:bidOpeners})}>next</Button>
               
                </Grid>
            </Grid></>
    )
}

export default BidOpeners