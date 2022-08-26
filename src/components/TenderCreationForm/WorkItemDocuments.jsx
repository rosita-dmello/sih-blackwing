import React,{useState} from 'react'
import { Grid,Button,Typography,Table,TableCell,TableBody,TableHead,TableRow,Box,TextField,Input,InputLabel,Checkbox,Modal } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import { postTender } from '../../api/tender';
import {useNavigate} from 'react-router-dom'

const WorkItemDocuments = (props) => {
    const navigate=useNavigate()
    const {allData}=props
    const [checked, setChecked] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [workdocument,setDocs]=useState()
    let token = localStorage.getItem('token')
    if (checked) {
        let result = window.confirm("Do you want to delete the following packet")
        if (result === true) {
            setDocs(undefined)
        }
        setChecked(false)
    }
    const handleSubmit=()=>{
        setProp()
        // postTender(allData,token)
        navigate("/")
    }
    const setProp=()=>{
        props.setAllData((prev) => {
            return {
                ...prev,
                workdocument
            }
        })
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
        borderRadius: '10px',
        width: '70%'
    }
    const handleFile = (e) => {
        setDocs(e.target.files[0])
        handleCloseModal()

    }
    const handleModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return (
        <>
        <Box sx={{ width: '80%', margin: '3vh auto' }}>
                <Typography variant='h5'>Documents</Typography>
                <hr style={{ width: '100%' }}></hr>
                <Grid container>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Document Type
                                </TableCell>
                                <TableCell>
                                    File Name
                                </TableCell>
                                <TableCell>
                                    Delete
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {workdocument === undefined ? "" :
                                <TableRow>
                                    <TableCell>
                                        NIT
                                    </TableCell>
                                    <TableCell>
                                        {workdocument.name}
                                    </TableCell>
                                    <TableCell>
                                        <Checkbox onClick={() => setChecked(!checked)} checked={checked} />
                                    </TableCell>
                                </TableRow>
                            }
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
                    <Grid container rowGap={3}>
                        <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                                <Typography>Document</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <TextField
                                    value={workdocument === undefined ? "" : workdocument.name}
                                    disabled
                                    size="small" sx={{
                                        width: '70%', '& legend': { display: 'none' },
                                        '& fieldset': { top: 0 }
                                    }} />
                            </Grid>
                            <Grid item xs={1}>
                                <InputLabel  >
                                    <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                                        <FolderIcon />
                                    </Grid>
                                    <Input onChange={handleFile} type="file" style={{ position: 'absolute', zIndex: '-1' }} />
                                </InputLabel>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            <Grid container direction="column" sx={{
                padding: "3rem"
            }}>
                <Grid item sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Button onClick={props.prevStep}>previous</Button>
                    <Button onClick={() => {
                       handleSubmit()
                    }
                    }>Create Tender</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default WorkItemDocuments