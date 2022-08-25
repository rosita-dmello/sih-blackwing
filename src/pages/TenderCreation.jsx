import { Stepper,Step,StepLabel,Box } from '@mui/material'
import { set } from 'lodash'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import BasicDetails from '../components/TenderCreationForm/BasicDetails'
import BidOpeners from '../components/TenderCreationForm/BidOpeners'
import CriticalDates from '../components/TenderCreationForm/CriticalDates'
import FeeDetails from '../components/TenderCreationForm/FeeDetails'
import WorkItemDetails from '../components/TenderCreationForm/WorkItemDetails'
import WorkItemDocuments from '../components/TenderCreationForm/WorkItemDocuments'

const TenderCreation = () => {
    const[step,setStep]=useState(1)
    const stepperSteps = ['Basic Details', 'Work/Item Details', 'Fee Details','Critical Dates','Bid Openers','Work/Item Documents']
    const [allData,setAllData]=useState({})
    console.log(allData)
    const nextStep=(data)=>{
        setAllData({...allData,...data})
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
                return <WorkItemDetails nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>

            case 3:
                return <FeeDetails nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>
            
            case 4:
                return <CriticalDates nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>

            case 5:
                return <BidOpeners nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>

            case 6:
                return<WorkItemDocuments nextStep={nextStep} prevStep={prevStep} allData={allData} setAllData={setAllData}/>
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