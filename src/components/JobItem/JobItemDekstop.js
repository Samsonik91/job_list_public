import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircle, faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import moment from "moment"
import getJobItemCartAddress from "../../utilits/getJobItemCartAddress"
import bookMark from '../../icons/bookmark.png'

const JobItemDekstop = ({job, rate}) => {

    const [address, setAddress] = useState(null)
    const allStars = Array(5).fill(1)
    const stars = rate ? [0,1,2,3,4] : null

    const picture = job.pictures[0]
    const time = moment(job.createdAt).startOf('day').fromNow()

    const getAddress = async() => {
        const data = await getJobItemCartAddress(job.location)
        setAddress(data)
    }

    useEffect(()=>{
        getAddress()
    },[])

    return (
        <div className='w-full h-52 flex justify-between bg-white rounded-2xl py-6 px-4 shadow-sm shadow-[#3A4562]'>
            <div className='w-3/5 flex gap-4 lg:gap-6'>
            <div className='flex flex-shrink-0 justify-center items-start'>
                <img src={picture} className='w-[85px] h-[85px] object-cover rounded-full'/>
            </div>
            <div className='flex flex-col justify-between items-start'>
                <div className=' flex flex-col gap-1'>
                    <Link to={`/${job.id}`}>
                        <h2 className='text-[#3A4562] cursor-pointer -tracking-[0.63px] font-Proxima700
                               text-[20px] leading-6 hover:text-blue-800 hover:underline underline-offset-1'>
                            {job.title}
                        </h2>
                    </Link>
                    <div className='flex items-center gap-[5px] text-[#878D9D] font-Proxima400 text-[16px]
                     leading-6 tracking-[0.24px]'>
                        <div>
                            Department name
                        </div>
                        <FontAwesomeIcon icon={faCircle} className='text-[0.25rem]'></FontAwesomeIcon>
                        <div>
                            {job.name}
                        </div>
                    </div>
                </div>
                <div className='flex items-baseline gap-2 text-[#878D9D]'>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} className='text-[18px]'/>
                    </div>
                    <div className='font-Proxima400 text-[16px] leading-6 tracking-[0.24px]'>
                        {address && address}
                    </div>
                </div>
            </div>
            </div>
            <div className='flex justify-center items-center'>
                {allStars.map((a,i)=>{
                    if(stars && stars.includes(i)){
                        return <FontAwesomeIcon icon={faStar} className='text-[18px] text-[#38415D]'/>
                    }else{
                        return <div className='invisible w-4 h-4'></div>
                    }
                })}
            </div>
            <div className='flex flex-col items-end justify-between'>
                <div>
                    <img src={bookMark}/>
                </div>
                <div className='font-Proxima400 text-[16px] leading-6 tracking-[0.24px] text-[#878D9D]'>
                    {`Posted ${time}`}
                </div>
            </div>
        </div>
    )
}

export default JobItemDekstop