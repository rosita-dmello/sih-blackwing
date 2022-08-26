import React, { useState } from 'react'
import { Grid, Button, Typography, Stack, TextField } from '@mui/material'
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import moment from 'moment';

const CriticalDates = (props) => {
    const [criticalDates,setCriticalDates]=useState({})

    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                        Publishing Date and Time
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={criticalDates.publishingDate}
                            onChange={(newValue) => {
                                setCriticalDates((prev)=> {return{...prev,publishingdate:`${moment(newValue).format("YYYY-MM-DDTHH:mm:00")}`}})
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                        Document Download
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={criticalDates.downloadDoc}
                            onChange={(newValue) => {
                                setCriticalDates((prev)=> {return{...prev,documentdownloaddate:`${moment(newValue).format("YYYY-MM-DDTHH:mm:00")}`}})
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                        Seek Clarification Start
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={criticalDates.seekClarificationStart}
                            onChange={(newValue) => {
                                setCriticalDates((prev)=> {return{...prev,seekclarificationstartdate:`${moment(newValue).format("YYYY-MM-DDTHH:mm:00")}`}})
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                        Seek Clarification End
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={criticalDates.seekClarificationEnd}
                            onChange={(newValue) => {
                                setCriticalDates((prev)=> {return{...prev,seekclarificationenddate:`${moment(newValue).format("YYYY-MM-DDTHH:mm:00")}`}})
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                        Pre Bid Meeting
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={criticalDates.preBidMeeting}
                            onChange={(newValue) => {
                                setCriticalDates((prev)=> {return{...prev,prebidmeetingdate:`${moment(newValue).format("YYYY-MM-DDTHH:mm:00")}`}})
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                        Bid Submission Start
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={criticalDates.bidSubmissionStart}
                            onChange={(newValue) => {
                                setCriticalDates((prev)=> {return{...prev,bidsubmissionstartdate:`${moment(newValue).format("YYYY-MM-DDTHH:mm:00")}`}})
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                       Bid Submission End
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={criticalDates.bidSubmissionEnd}
                            onChange={(newValue) => {
                                setCriticalDates((prev)=> {return{...prev,bidsubmissionenddate:`${moment(newValue).format("YYYY-MM-DDTHH:mm:00")}`}})
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                        Bid Opening
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={criticalDates.bidOpeningDate}
                            onChange={(newValue) => {
                                setCriticalDates((prev)=> {return{...prev,bidopeningdate:`${moment(newValue).format("YYYY-MM-DDTHH:mm:00")}`}})
                            }}
                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

            </Grid>
            

            <Grid container direction="column" sx={{
                padding: "3rem"
            }}>
                <Grid item sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Button onClick={props.prevStep}>previous</Button>
                    <Button onClick={()=>{props.nextStep(criticalDates)}}>next</Button>
                </Grid>
            </Grid></>
    )
}

export default CriticalDates