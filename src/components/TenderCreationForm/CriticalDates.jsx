import React, { useState } from 'react'
import { Grid, Button, Typography, Stack, TextField } from '@mui/material'
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import moment from 'moment';

const CriticalDates = (props) => {
    const today = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    const [publishingDate, setPublishingDate] = useState(new Date())
    const [downloadDoc, setDownloadDoc] = useState(new Date())
    const [seekClarificationStart, setSeekClarificationStart] = useState(new Date())
    const [seekClarificationEnd, setSeekClarificationEnd] = useState(new Date())
    const [preBidMeeting, setPreBidMeeting] = useState(new Date())
    const [bidSubmissionStart, setBidSubmissionStart] = useState(new Date())
    const [bidSubmissionEnd, setBidSubmissionEnd] = useState(new Date())
    const [bidOpeningDate, setBidOpeningDate] = useState(new Date())

    console.log(moment(publishingDate).format("YYYY-MM-DDTHH:mm:00"))
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
                            value={publishingDate}
                            onChange={(newValue) => {
                                setPublishingDate(moment(newValue).format("YYYY-MM-DDTHH:mm:00"))
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', padding: '1%', width: '90%' }}>
                    <Typography sx={{ width: '70%', fontSize: '2.25vh' }}>
                        downloadDoc
                    </Typography>
                
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={3}
                    sx={{'& legend': { display: 'none' },
                        '& fieldset': { top: 0 }}}>
                        <DateTimePicker
                            imputFormat="DD/MM/YYYY HH:mm"
                            renderInput={(params) => <TextField {...params} />}
                            value={downloadDoc}
                            onChange={(newValue) => {
                                setDownloadDoc(moment(newValue).format("YYYY-MM-DDTHH:mm:00"))
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
                            value={seekClarificationStart}
                            onChange={(newValue) => {
                                setSeekClarificationStart(moment(newValue).format("YYYY-MM-DDTHH:mm:00"))
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
                            value={seekClarificationEnd}
                            onChange={(newValue) => {
                                setSeekClarificationEnd(moment(newValue).format("YYYY-MM-DDTHH:mm:00"))
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
                            value={preBidMeeting}
                            onChange={(newValue) => {
                                setPreBidMeeting(moment(newValue).format("YYYY-MM-DDTHH:mm:00"))
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
                            value={bidSubmissionStart}
                            onChange={(newValue) => {
                                setBidSubmissionStart(moment(newValue).format("YYYY-MM-DDTHH:mm:00"))
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
                            value={bidSubmissionEnd}
                            onChange={(newValue) => {
                                setBidSubmissionEnd(moment(newValue).format("YYYY-MM-DDTHH:mm:00"))
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
                            value={bidOpeningDate}
                            onChange={(newValue) => {
                                setBidOpeningDate(moment(newValue).format("YYYY-MM-DDTHH:mm:00"))
                            }}

                        />
                    </Stack>
                </LocalizationProvider>
                </Grid>

            </Grid>

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

export default CriticalDates