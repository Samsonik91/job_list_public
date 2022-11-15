import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquare} from "@fortawesome/free-solid-svg-icons"
import {faStar} from "@fortawesome/free-regular-svg-icons"
import moment from "moment"
import Map from "../Map/Map"
import share from '../../icons/share.png'
import marker from "../../icons/gmaps_marker.png"

const JobDetailsMobile = ({job}) => {

    const salary = job.salary.replace(/k/g, ' 000 ').replace('-', '- ')
    const time = moment(job.createdAt).startOf('day').fromNow()
    const text = job.description.split('Responsopilities:')
    const secondText = text[1].split('Compensation & Benefits:')

    return (
        <div className='w-full flex flex-col '>
            <h1 className='font-Proxima700 text-[#3A4562] tracking-[0.041px] text-3xl mb-2'>
                Job Details
            </h1>
            <div className='w-full h-[1px] bg-[#3A4562] opacity-25 mb-6'></div>
            <div className='flex justify-start items-center text-[#38415D] mb-8'>
                <FontAwesomeIcon icon={faStar} size='lg' className='mb-1 mr-2 text-[#3A4562]'/>
                <div className='font-Proxima400 mr-9 text-[#38415DD1] -tracking-[0.5px] leading-6'>
                    Save to my list
                </div>
                <img src={share} className='text-[20px] mr-2 text-[#38415D]'/>
                <div className='font-Proxima400 text-[#38415DD1] -tracking-[0.5px] leading-6'>Share</div>
            </div>
            <div className='font-Proxima700 font-bold -tracking-[0.75px] leading-[30px] text-[#3A4562] text-2xl mb-4'>
                {job.title}
            </div>
            <div className='flex justify-between items-center mb-[14px]'>
                <div className='font-Proxima300 text-[13px] text-[#38415D9A] leading-6 tracking-[0.5px]'>
                    {`Posted ${time}`}
                </div>
                <div className='flex-col justify-between items-end'>
                    <div className='font-Proxima400 text-[18px] leading-6 text-[#38415DD1] text-end mb-1'>
                        Brutto,per year
                    </div>
                    <div className='font-Proxima700 text-[#3A4562] text-xl leading-6 tracking-tighter'>
                        {`\u20AC ${salary}`}
                    </div>
                </div>
            </div>
            <div className='mb-[43px] font-Proxima400 text-[#38415DD1] text-[18px] leading-6 -tracking-[0.56px]'>
                {text[0]}
            </div>
            <div className='font-Proxima700 text-[#3A4562] text-xl leading-6 -tracking-[0.63px] mb-1'>
                Responsopilities:
            </div>
            <div className='mb-5 font-Proxima400 text-[#38415DD1] text-[18px] leading-6 -tracking-[0.56px]'>
                {secondText[0]}
            </div>
            <div className='font-Proxima700 tracking-tighter text-[#3A4562] text-xl mb-5'>
                Compensation & Benefits
            </div>
            <div className='mb-4 font-Proxima400 text-[#38415DD1] text-[18px] leading-6 -tracking-[0.56px]'>
                {secondText[1]}
            </div>
            <div className='flex-col mb-4'>
                {job.benefits.map((b,i)=>
                    <div
                        key={i + Math.random()}
                        className='flex items-center gap-4'
                    >
                        <FontAwesomeIcon
                            size='xs'
                            icon={faSquare}
                            className='text-[#384564A1]'
                        />
                        <div className='font-Proxima400 text-[#38415DD1] text-[18px] leading-6 -tracking-[0.56px]'>{b}</div>
                    </div>
                )}
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-[#384564] text-white py-[18px] px-[30px] rounded-lg font-titleFont font-bold
                    text-[12px] font-Proxima700 mt-4 mb-36'>
                    APPLY NOW
                </button>
            </div>
            <div className='font-Proxima700 text-[#3A4562] font-bold tracking-[0.41px] text-[28px] leading-[34px] mb-2'>
                Attached Images
            </div>
            <div className='w-full h-[1px] bg-[#3A4562] opacity-25 mb-3'></div>
            <div className='overflow-x-scroll mb-[55px]'>
                <div className='flex items-center gap-2 w-[calc(600px+1rem)]'>
                    {job.pictures.map((p,i)=>
                        <div
                            key={i + Math.random()}
                            className='w-[200px] h-[133px]'
                        >
                            <img src={p} className='w-full h-full rounded-md object-cover'/>
                        </div>
                    )}
                </div>
            </div>
            <div className='font-Proxima700 text-[#3A4562] font-bold tracking-[0.41px] text-[28px] leading-[34px] mb-2'>
                Additional Info
            </div>
            <div className='w-3/4 h-[1px] bg-[#3A4562] opacity-25 mb-3'></div>
            <div className='font-Proxima400 text-[#38415DD1] text-[18px] leading-6 -tracking-[0.56px] mb-[10px]'>
                Employment Type
            </div>
            <div className='flex items-start flex-wrap gap-2 mb-[22px]'>
                {job.employment_type.map((j,i)=>
                    <div
                        key={i + Math.random()}
                        className='flex justify-center items-center border rounded-md border-[#55699E]
                            font-Proxima700 text-[16px] text-[#55699E] bg-[#d0daf2] -tracking-[0.46px] py-4 px-6'
                    >{j}</div>
                )}
            </div>
            <div className='font-Proxima400 text-[#38415DD1] text-[18px] leading-6 -tracking-[0.56px] mb-[10px]'>
                Benefits
            </div>
            <div className='flex items-start flex-wrap gap-2 mb-[63px]'>
                {job.benefits.map((j,i)=>
                    <div
                        key={i + Math.random()}
                        className='flex justify-center items-center border rounded-md border-[#FFCF00]
                            font-Proxima700 text-[16px] text-[#988B49] bg-[#f7eab5] py-4 px-4'
                    >{j}</div>
                )}
            </div>
            <div className='font-Proxima700 text-[#3A4562] font-bold tracking-[0.41px] text-[28px] leading-[34px] mb-2'>
                Contacts
            </div>
            <div className='w-full h-[1px] bg-[#3A4562] opacity-25 mb-[21px]'></div>
            <div className='w-full sm:w-2/3 flex flex-col mb-8'>
                <div className='w-full h-48 p-8 pl-15 bg-[#2A3047] rounded-t-[0.5rem]'>
                    <div className='text-[#E7EAF0] mb-4 font-Proxima700 text-[16px] leading-[19px] tracking-[0.24px]'>
                        <div className='mb-[-0.1rem]'>
                            Department name.
                        </div>
                        <div>
                            {job.name}.
                        </div>
                    </div>
                    <div className='mb-2'>
                        <img src={marker} className='text-[#D8D8D8] float-left mr-1 pb-[6px] h-6'/>
                        <div className='text-[#E7EAF0] font-Proxima400 text-[16px] leading-[23px] -tracking-[0.5px]'>
                            {job.address}
                        </div>
                    </div>
                    <div className='text-[#FFFFFFAB] font-Proxima400 text-[16px] leading-[23px] -tracking-[0.5px]'>
                        {job.phone}
                    </div>
                    <div className='text-[#FFFFFFAB] font-Proxima400 text-[16px] leading-[23px] -tracking-[0.5px]'>
                        {job.email}
                    </div>
                </div>
                <div className='h-48'>
                    <Map location={job.location}/>
                </div>
            </div>
        </div>
    )
}

export default JobDetailsMobile