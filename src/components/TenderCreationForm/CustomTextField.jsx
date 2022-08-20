import { Grid, Typography, TextField } from '@mui/material'
import React, { useEffect } from 'react'

const CustomTextField = (props) => {
    const handleChange = (e) => {
        props.setValues({ ...props.values, [props.value]: e.target.value })
    }
    useEffect(() => {
        props.setValues({ ...props.values, [props.value]: '' })
    }, [])

    return (<>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>

                <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                    {props.textlabel}
                </Typography>
                <TextField
                    id="outlined-size-small"
                    size="small"
                    placeholder={props.textlabel}
                    value={props.values.value}
                    rows={props.rows === undefined ? 1 : props.rows}
                    disabled={props.disabled===true?true:false}
                    multiline={props.multiline===undefined?false:true}
                    sx={{
                        '& legend': { display: 'none' },
                        '& fieldset': { top: 0 },
                        width: '100%'
                    }}
                    onChange={handleChange}
                />
            </Grid>

        </Grid>
    </>
    )
}

export default CustomTextField