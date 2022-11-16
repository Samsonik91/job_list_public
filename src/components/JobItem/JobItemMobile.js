import React, {useEffect, useState} from 'react'
import moment from "moment"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircle, faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import getJobItemCartAddress from "../../utilits/getJobItemCartAddress"

const JobItemMobile = ({job}) => {

    const [address, setAddress] = useState(null)

    const picture = job.pictures[0]
    const stars = Array(5).fill(1)
    const time = moment(job.createdAt).startOf('day').fromNow()

    const getAddress = async() => {
        const data = await getJobItemCartAddress(job.location)
        setAddress(data)
    }

    useEffect(()=>{
        getAddress()
    },[])

    return (
        <div className='w-full flex justify-between bg-[#EFF0F5] rounded-[8px] p-4 pt-3 pb-7 mb-2'>
                <div className='w-[66px] h-full mr-[19px] pt-[34px]'>
                    <img src={picture} className='w-full h-[66px] object-cover rounded-full'/>
                </div>
                <div className='w-[calc(100%-85px)] flex flex-col items-start'>
                    <div className='w-full flex justify-between items-baseline text-[#878D9D] mb-[14px]'>
                        <div className='flex'>
                            {stars.map(s=>
                                <FontAwesomeIcon
                                    icon={faStar}
                                    key={Math.random() + s}
                                    className='w-[10px] h-[10px] text-[#384564]'
                                />
                            )}
                        </div>
                        <div className='font-Proxima300 text-[14px] leading-4 tracking-[0.21px] text-[#878D9D]'>
                            {`Posted ${time}`}
                        </div>
                    </div>
                    <div className='h-40 flex flex-col justify-between items-start'>
                        <div className='flex flex-col items-start'>
                            <Link to={`/${job.id}`}>
                                <h3 className='font-Proxima400 text-[18px] leading-6 -tracking-[0.56px]
                                 text-[#3A4562] cursor-pointer'>
                                    {job.title}
                                </h3>
                            </Link>
                            <div className='flex items-center text-[#878D9D] font-Proxima400 text-[16px] mt-1
                             leading-6 tracking-[0.23px]'>
                                <div className='mr-1'>
                                    Department name
                                </div>
                                <FontAwesomeIcon icon={faCircle} className='text-[0.25rem] mr-1'></FontAwesomeIcon>
                                <div>
                                    {job.name}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-baseline text-[#878D9D]'>
                            <div>
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className='w-[13px] h-[18px] mr-2'
                                />
                            </div>
                            <div className='text-[#878D9D] font-Proxima400 text-[16px] leading-6 tracking-[0.23px]'>
                                {address && address}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default JobItemMobile
