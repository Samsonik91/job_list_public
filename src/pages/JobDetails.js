import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import JobDetailsDekstop from "../components/JobDetails/JobDetaisDekstop"
import JobDetailsMobile from "../components/JobDetails/JobDetailsMobile"
import {getAllJobs} from "../thunks/jobThunks"
import Spinner from "../utilits/Spinner/Spinner"

const JobDetails = () => {

    const dispatch = useDispatch()

    const [job, setJob] = useState(null)

    const {jobs} = useSelector(({job})=> job)

    const {id} = useParams()

    useEffect(()=>{
        if(jobs){
            setJob(jobs.find(job=> job.id === id))
        }else{
            dispatch(getAllJobs())
        }
    },[jobs])

    if(!jobs) return <div className='w-full h-full flex justify-center items-center'><Spinner/></div>

    return (
        <>
            <div className='hidden md:block bg-white h-full p-10'>
                {job && <JobDetailsDekstop job={job}/>}
            </div>
            <div className='block md:hidden bg-white h-full p-4'>
                {job && <JobDetailsMobile job={job}/>}
            </div>
        </>

    )
}

export default JobDetails