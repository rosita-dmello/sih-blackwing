import React, { useState } from 'react'
import { Box, Grid, Table, TableCell, TableHead, TableRow, Typography, Input, InputLabel, TableBody,Button } from '@mui/material'
import CustomTextField from './CustomTextField'
import CustomDropDown from './CustomDropDown'

const BasicDetails = (props) => {
    const tenderType = ['EOI', 'Limited', 'Open Limited', 'Open Tender', 'Single', 'Test']
    const formOfContract = ['Fixed Rate', 'Item Rate', 'Lump-sum', 'Multi-stage', 'Percentage', 'Piece-work', 'QCBS', 'Service', 'Supply', 'Tender cum Auction', 'Turn-key']
    const noOfCovers = [1, 2, 3, 4]
    const tenderCategory = ['Goods', 'Services', 'Works']
    const accountTypeHead = ['Central Govt Funded', 'Others', 'new account head', 'State Govt Funded']
    const noOfBidOpeners = ['', '2 Off 4', '2 Off 3', '3 Off 3', '2 Off 2']
    const [basicDetails, setBasicDetails] = useState({noofcover:1})
    let coverDoc = []
    const [desc,setDesc]=useState('')
    const [stage1,setStage1]=useState([])
    const [stage2,setStage2]=useState([])
    const [stage3,setStage3]=useState([])
    const [stage4,setStage4]=useState([])
    const uploadBtn = {
        background: 'rgba(108, 25, 116, 0.6)',
        boxSizing: 'border - box',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '13.963px',
        margin: 0,
        "&:hover": { color: 'white', background: '#6C197499' },
    }
    console.log(basicDetails)
    const renderElement = () => {
        if (basicDetails.noofcover === 1) {
            return <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Fee/PreQual/Technical/Financial</TableCell>
                <TableCell>
                    {coverDoc.length}
                </TableCell>
                <TableCell>
                    <InputLabel sx={uploadBtn} >
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                        </Grid>
                        <Input type="file" onChange={(e)=>setStage1((prev)=>[...prev,{file:e.target.files[0],desc:desc}])} sx={{ position: 'absolute', zIndex: '-1' }} />
                    </InputLabel>
                </TableCell>
            </TableRow>
        }
        else if (basicDetails.noofcover === 2) {
            return <>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Fee/PreQual/Technical</TableCell>
                    <TableCell>
                        {coverDoc.length}
                    </TableCell>
                    <TableCell>
                        <InputLabel sx={uploadBtn} >
                            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                            </Grid>
                            <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                        </InputLabel>
                    </TableCell>
                </TableRow><TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Financial</TableCell>
                    <TableCell>
                        {coverDoc.length}
                    </TableCell>
                    <TableCell>
                        <InputLabel sx={uploadBtn} >
                            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                            </Grid>
                            <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                        </InputLabel>
                    </TableCell>
                </TableRow>
            </>
        }
        else if (basicDetails.noofcover === 3) {
            return <>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Fee</TableCell>
                    <TableCell>
                        {coverDoc.length}
                    </TableCell>
                    <TableCell>
                        <InputLabel sx={uploadBtn} >
                            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                            </Grid>
                            <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                        </InputLabel>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>PreQual/Technical</TableCell>
                    <TableCell>
                        {coverDoc.length}
                    </TableCell>
                    <TableCell>
                        <InputLabel sx={uploadBtn} >
                            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                            </Grid>
                            <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                        </InputLabel>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Financial</TableCell>
                    <TableCell>
                        {coverDoc.length}
                    </TableCell>
                    <TableCell>
                        <InputLabel sx={uploadBtn} >
                            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                            </Grid>
                            <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                        </InputLabel>
                    </TableCell>
                </TableRow>
            </>
        }
        else{
            return <>
            <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Fee</TableCell>
                <TableCell>
                    {coverDoc.length}
                </TableCell>
                <TableCell>
                    <InputLabel sx={uploadBtn} >
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                        </Grid>
                        <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                    </InputLabel>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>2</TableCell>
                <TableCell>PreQual</TableCell>
                <TableCell>
                    {coverDoc.length}
                </TableCell>
                <TableCell>
                    <InputLabel sx={uploadBtn} >
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                        </Grid>
                        <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                    </InputLabel>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Technical</TableCell>
                <TableCell>
                    {coverDoc.length}
                </TableCell>
                <TableCell>
                    <InputLabel sx={uploadBtn} >
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                        </Grid>
                        <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                    </InputLabel>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>4</TableCell>
                <TableCell>Financial</TableCell>
                <TableCell>
                    {coverDoc.length}
                </TableCell>
                <TableCell>
                    <InputLabel sx={uploadBtn} >
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant='h6' sx={{ fontSize: '100%' }}>Upload Banner</Typography>
                        </Grid>
                        <Input type="file" sx={{ position: 'absolute', zIndex: '-1' }} />
                    </InputLabel>
                </TableCell>
            </TableRow>
        </>
        }
    }
    return (
        <>
            <Box sx={{ width: '85%', margin: '3vh auto' }}>
                <Typography variant='h5'>Basic Details</Typography>
                <hr style={{ width: '100%' }}></hr>
                <Grid container>
                    <Grid item xs={12}>
                        <CustomTextField textlabel="Tender Reference Number" value='tenderreferenceno' values={basicDetails} setValues={setBasicDetails} />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomDropDown textlabel="Tender Type" array={tenderType} value='tendertype' values={basicDetails} setValues={setBasicDetails} />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomDropDown textlabel="Form of Contract" array={formOfContract} value='formofcontract' values={basicDetails} setValues={setBasicDetails} />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomDropDown textlabel="Number of Covers" array={noOfCovers} props2={{defaultValue:1}} value='noofcover' values={basicDetails} setValues={setBasicDetails} />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomDropDown textlabel="Tender Category" array={tenderCategory} value='tendercategory' values={basicDetails} setValues={setBasicDetails} />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomDropDown textlabel="Account Type Head" array={accountTypeHead} value='accounttypehead' values={basicDetails} setValues={setBasicDetails} />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomDropDown textlabel="Number Of Bid Openers" array={noOfBidOpeners} value='noOfBidOpeners' values={basicDetails} setValues={setBasicDetails} />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '85%', margin: '3vh auto' }}>
                <Typography variant='h5'>Cover Details</Typography>
                <hr style={{ width: '100%' }}></hr>
                <Grid container>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Sr No.</TableCell>
                                <TableCell>Cover Name</TableCell>
                                <TableCell>Cover Type</TableCell>
                                <TableCell>Add Content(s)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            renderElement()
                        }
                        </TableBody>
                    </Table>
                </Grid>
            </Box>
            <Box sx={{ width: '85%', margin: '3vh auto' }}>
                <Typography variant='h5'>NIT Documents</Typography>
                <hr style={{ width: '100%' }}></hr>
                <Grid container>
                    
                </Grid>
            </Box>
            <Grid container>
                <Grid item>
                    <Button onClick={props.prevStep}>previous</Button>
                </Grid>
                <Grid item>
                    <Button onClick={props.nextStep}>next</Button>
                </Grid>
            </Grid>
        </>

    )
}

export default BasicDetails