import { Stepper,Step,StepLabel,Box } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../components/DepartmentLayout'
import BasicDetails from '../components/TenderCreationForm/BasicDetails'
import BidOpeners from '../components/TenderCreationForm/BidOpeners'
import CriticalDates from '../components/TenderCreationForm/CriticalDates'
import FeeDetails from '../components/TenderCreationForm/FeeDetails'
import WorkItemDetails from '../components/TenderCreationForm/WorkItemDetails'
import WorkItemDocuments from '../components/TenderCreationForm/WorkItemDocuments'
import BoqDepartment from '../components/TenderCreationForm/BoqDepartment'

const TenderCreation = () => {
    const[step,setStep]=useState(1)
    const stepperSteps = ['Basic Details','BOQ Details', 'Work/Item Details', 'Fee Details','Critical Dates','Bid Openers','Work/Item Documents']
    const [allData,setAllData]=useState({})
    const nextStep=(data)=>{
        setAllData((prev) => {return {...prev, ...data}})
        setStep(step+1)
    }
    const prevStep=()=>{
        setStep(step-1)
    }
    const returnElement=()=>{
        switch (step) {
            case 1:
                return <BasicDetails nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>

            case 2:
                return <BoqDepartment nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>
        
            case 3:
                return <WorkItemDetails nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>

            case 4:
                return <FeeDetails nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>
            
            case 5:
                return <CriticalDates nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>

            case 6:
                return <BidOpeners nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>

            case 7:
                return<WorkItemDocuments prevStep={prevStep} allData={allData} setAllData={setAllData}/>
        }
        if(step>=8){
            
        }
    }
  return (
    <Layout>
        <Box sx={{ width: '95%', margin: '3vh auto' }}>
                <Stepper activeStep={step - 1}>
                    {
                        stepperSteps.map((steps, index) => {
                            return (<Step key={index}>
                                <StepLabel>
                                    {steps}
                                </StepLabel>
                            </Step>)
                        })
                    }
                </Stepper>
            </Box>
            {
                returnElement()
            }
    </Layout>
  )
}

export default TenderCreation