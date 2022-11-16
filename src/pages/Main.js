import React, {useEffect} from 'react'
import JobItemDekstop from "../components/JobItem/JobItemDekstop"
import {useDispatch, useSelector} from "react-redux"
import {getAllJobs} from "../thunks/jobThunks"
import Paginator from "../components/Paginator"
import JobItemMobile from "../components/JobItem/JobItemMobile"
import Spinner from "../utilits/Spinner/Spinner"

const Main = () => {
    const dispatch = useDispatch()

    const {jobs} = useSelector(({job})=> job)

    useEffect(()=>{
        dispatch(getAllJobs())
    },[])

    if(!jobs) return <div className='w-full h-full flex justify-center items-center'><Spinner/></div>

    return (
        <div className='w-full m-2 px-2 mx-auto lg:w-10/12 xl:w-4/5 xxl:w-3/5 mb-4 md:px-6 md:mt-6 md:mb-6
         flex flex-col items-center'>
            <div className='hidden md:flex w-full flex-col items-center max-w-screen-lg gap-2 mb-12'>
                {jobs.map((job,i)=> <JobItemDekstop key={job.id} job={job} rate={i%2 === 0 ? true : false}/>)}
            </div>
            <div className='flex md:hidden w-full flex flex-col items-center mb-[26px]'>
                {jobs.map(job=> <JobItemMobile key={job.id} job={job}/>)}
            </div>
            <Paginator/>
        </div>
    )
}

export default Main
