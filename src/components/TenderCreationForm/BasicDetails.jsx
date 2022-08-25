import React, { useState } from 'react'
import { Box, Grid, Table, TableCell, TableHead, TableRow, Typography, Input, InputLabel, TableBody, Button, Modal, TextField, MenuItem, Select, FormControl } from '@mui/material'
import CustomTextField from './CustomTextField'
import CustomDropDown from './CustomDropDown'
import FolderIcon from '@mui/icons-material/Folder';
import { CleaningServices } from '@mui/icons-material';

const BasicDetails = (props) => {
    const tenderType = ['EOI', 'Limited', 'Open Limited', 'Open Tender', 'Single', 'Test']
    const formOfContract = ['Fixed Rate', 'Item Rate', 'Lump-sum', 'Multi-stage', 'Percentage', 'Piece-work', 'QCBS', 'Service', 'Supply', 'Tender cum Auction', 'Turn-key']
    const noOfCovers = [1, 2, 3, 4]
    const tenderCategory = ['Goods', 'Services', 'Works']
    const accountTypeHead = ['Central Govt Funded', 'Others', 'new account head', 'State Govt Funded']
    const noOfBidOpeners = ['', '2 Off 4', '2 Off 3', '3 Off 3', '2 Off 2']
    const [basicDetails, setBasicDetails] = useState({ noofcover: 1 })
    const [files, setFiles] = useState([[], [], [], []])
    const [desc, setDesc] = useState('')
    const [coverDetails, setCoverDetails] = useState({ docDesc: '', docType: '' })
    const [open, setOpen] = useState(false)
    const [number, setNumber] = useState(0)
    const [nitDoc, setNitDoc] = useState()
    const [openModal, setOpenModal] = useState(false)
    const handleModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const uploadBtn = {
        background: 'rgba(108, 25, 116, 0.6)',
        boxSizing: 'border - box',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
        borderRadius: '13.963px',
        margin: 0,
        "&:hover": { color: 'white', background: '#6C197499' },
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px'
    }
    console.log(basicDetails)
    const handleClose = () => {

        setOpen(false)
    }
    const handleOpen = (number) => {
        setOpen(true)
        setNumber(number)
    }
    const handleChange = (e, number) => {
        let name = e.target.name
        let value = e.target.value
        setCoverDetails({ ...coverDetails, [name]: value })
    }
    const handleClick = () => {
        let array = [...files]
        array[number - 1] = [...files[number - 1], coverDetails]
        setFiles(array)
        setCoverDetails({ docDesc: '', docType: '' })
    }

    console.log(number)
    console.log(files)
    console.log(coverDetails)
    const renderElement = () => {
        if (basicDetails.noofcover === 1) {
            return <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Fee/PreQual/Technical/Financial</TableCell>
                <TableCell>
                    {files[0].length}
                </TableCell>
                <TableCell>
                    <Button onClick={() => handleOpen(1)}><FolderIcon /></Button>
                </TableCell>
            </TableRow>
        }
        else if (basicDetails.noofcover === 2) {
            return <>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Fee/PreQual/Technical</TableCell>
                    <TableCell>
                        {files[0].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(1)}><FolderIcon /></Button>
                    </TableCell>
                </TableRow><TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Financial</TableCell>
                    <TableCell>
                        {files[1].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(2)}><FolderIcon /></Button>
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
                        {files[0].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(1)}><FolderIcon /></Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>PreQual/Technical</TableCell>
                    <TableCell>
                        {files[1].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(2)}><FolderIcon /></Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Financial</TableCell>
                    <TableCell>
                        {files[2].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(3)}><FolderIcon /></Button>
                    </TableCell>
                </TableRow>
            </>
        }
        else {
            return <>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Fee</TableCell>
                    <TableCell>
                        {files[0].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(1)}><FolderIcon /></Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>PreQual</TableCell>
                    <TableCell>
                        {files[1].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(2)}><FolderIcon /></Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Technical</TableCell>
                    <TableCell>
                        {files[2].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(3)}><FolderIcon /></Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>Financial</TableCell>
                    <TableCell>
                        {files[3].length}
                    </TableCell>
                    <TableCell>
                        <Button onClick={() => handleOpen(4)}><FolderIcon /></Button>
                    </TableCell>
                </TableRow>
            </>
        }
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', marginBottom: '7%' }}>
                            <Typography >
                                Document description
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField size='small' sx={{
                                '& legend': { display: 'none' },
                                '& fieldset': { top: 0 },
                                width: '100%',
                                marginBottom: '7%'
                            }}
                                value={coverDetails.docDesc}
                                name="docDesc"
                                onChange={handleChange} multiline rows={3} />
                        </Grid>
                        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography >
                                Document Type
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl sx={{
                                '& legend': { display: 'none' },
                                '& fieldset': { top: 0 },
                                width: '100%'
                            }}
                                size="small">

                                <Select
                                    name="docType"
                                    defaultValue=''
                                    value={coverDetails.docType}
                                    onChange={handleChange}
                                >
                                    <MenuItem value=".pdf">.pdf</MenuItem>
                                    <MenuItem value=".jpg">.jpg</MenuItem>
                                    <MenuItem value=".rar">.rar</MenuItem>
                                    <MenuItem value=".xls">.xls</MenuItem>
                                    <MenuItem value=".xlsx">.xlsx</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Button>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={handleClick}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
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
                                {files[number] !== 0 ? files[number].map((file, index) => {
                                    return <TableRow>
                                        <TableCell>
                                            {index}
                                        </TableCell>
                                        <TableCell>
                                            {file.docType}
                                        </TableCell>
                                        <TableCell>
                                            {file.docDesc}
                                        </TableCell>
                                        <TableCell>
                                            edit
                                        </TableCell>
                                        <TableCell>
                                            delete
                                        </TableCell>
                                    </TableRow>
                                }) : ""}
                            </TableBody>
                        </Table>
                    </Grid>
                </Box>
            </Modal>
            <Box sx={{ width: '80%', margin: '3vh auto' }}>
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
                        <CustomDropDown textlabel="Number of Covers" array={noOfCovers} props2={{ defaultValue: 1 }} value='noofcover' values={basicDetails} setValues={setBasicDetails} />
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
            <Box sx={{ width: '80%', margin: '3vh auto' }}>
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
            <Box sx={{ width: '80%', margin: '3vh auto' }}>
                <Typography variant='h5'>NIT Documents</Typography>
                <hr style={{ width: '100%' }}></hr>
                <Grid container>
                    <Table>
                        <TableHead>
                            Tender Documents
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Document Type
                                </TableCell>
                                <TableCell>
                                    Uploaded date
                                </TableCell>
                                <TableCell>
                                    Verified By
                                </TableCell>
                                <TableCell>
                                    Delete
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                    <Button onClick={handleModal}>Upload Document</Button>
                </Grid>
            </Box>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>Tender Reference Number</Typography>
                </Box>
            </Modal>
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