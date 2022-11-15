import React from 'react'
import {useNavigate} from 'react-router-dom'
import {faChevronLeft, faSquare} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import moment from "moment"
import Map from "../Map/Map"
import marker from '../../icons/gmaps_marker.png'
import bookmark from '../../icons/bookmark.png'
import share from '../../icons/share.png'

const JobDetailsDekstop = ({job}) => {

    const salary = job.salary.replace(/k/g, ' 000 ').replace('-', '- ')
    const time = moment(job.createdAt).startOf('day').fromNow()
    const text = job.description.split('Responsopilities:')
    const secondText = text[1].split('Compensation & Benefits:')

    const navigate = useNavigate()

    return (
        <div className='grid w-full xl:w-11/12 xxl:w-10/12 mx-auto grid-cols-5 lg:grid-cols-3 gap-8 lg:gap-16'>
            <div className='col-span-3 lg:col-span-2 flex flex-col items-start'>
                <div className='flex justify-between items-center w-full mb-2'>
                    <h1 className='font-Proxima700 text-[#3A4562] lg:tracking-[0.41px] text-[28px] leading-[34px]'>
                        Job Details
                    </h1>
                    <div className='flex items-center mt-[2px]'>
                        <img src={bookmark} className='h-[20px] mr-2 lg:mr-4 text-[#70778B]'/>
                        <div className='font-Roboto400 mr-4 lg:mr-8 text-[#3A4562]
                         text-[18px] leading-6 -tracking-[0.56px]'>Save to my list</div>
                        <img src={share} className='h-[20px] mr-2 lg:mr-4 text-[#70778B]'/>
                        <div className='font-Roboto400 text-[#3A4562] text-[18px] leading-6 -tracking-[0.56px]'>
                            Share
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#3A4562] mb-[39px] opacity-20'></div>
                <button className='font-Proxima600 bg-[#384564] text-white text-[12px] leading-4 py-[18px] px-[30px]
                 rounded-lg mb-8'>
                    APPLY NOW
                </button>
                <div className='w-full flex flex-col lg:flex-row items-start lg:justify-between mb-2'>
                    <div className='w-3/5 font-Proxima700 -tracking-[0.75px] leading-[30px] text-[#3A4562] text-2xl
                     mb-4 lg:mb-0'>
                        {job.title}
                    </div>
                    <div className='flex flex-col pt-[2px]'>
                        <div className='font-Proxima700 text-[#3A4562] text-[20px] leading-6 -tracking-[0.63px]'>
                            {`\u20AC ${salary}`}
                        </div>
                        <div className='font-Roboto400 text-[#3A4562] text-[18px] leading-6 -tracking-[0.56px]'>
                            Brutto,per year
                        </div>
                    </div>
                </div>
                <div className='font-Roboto400 text-[18px] leading-6 text-[#38415D5B] -tracking-[0.56px] mb-2'>
                    {`Posted ${time}`}
                </div>
                <div className='w-full font-Roboto400 text-[18px] leading-6 text-[#3A4562] -tracking-[0.56px] mb-6'>
                    {text[0]}
                </div>
                <div className='font-Proxima700 text-[20px] leading-6 -tracking-[0.63px] text-[#3A4562] mb-2'>
                    Responsopilities:
                </div>
                <div className='w-full font-Roboto400 text-[18px] leading-6 text-[#3A4562] -tracking-[0.56px] mb-8'>
                    {secondText[0]}
                </div>
                <div className='font-Proxima700 tracking-tighter text-[#3A4562] text-xl mb-2'>
                    Compensation & Benefits
                </div>
                <div className='w-full font-Roboto400 text-[18px] leading-6 text-[#3A4562] -tracking-[0.56px] mb-2'>
                    {secondText[1]}
                </div>
                <div className='flex-col items-start mb-8'>
                    {job.benefits.map((b,i)=>
                        <div className='flex items-center gap-[10px]'>
                            <div className='w-[9px] h-[9px] overflow-hidden flex justify-center items-center'>
                                <FontAwesomeIcon icon={faSquare} className='text-[#384564A1]'/>
                            </div>
                            <div
                                key={i + Math.random()}
                                className='font-Roboto400 text-[18px] leading-6 text-[#3A4562] -tracking-[0.56px]'
                            >{b}</div>
                        </div>
                    )}
                </div>
                <button className=' font-Proxima600 bg-[#384564] text-white text-[12px] leading-4 py-[18px] px-[30px]
                 rounded-lg mb-20'>
                    APPLY NOW
                </button>
                <div className='font-Proxima700 text-[#3A4562] lg:tracking-[0.41px] text-[28px] leading-[34px] mb-2'>
                    Additional info
                </div>
                <div className='w-full h-[1px] bg-[#3A4562] mb-[15px] opacity-20'></div>
                <div className='font-Roboto400 text-[18px] -tracking-[0.56] leading-6 text-[#3A4562] mb-[10px]'>
                    Employment Type
                </div>
                <div className='w-full flex [790px]:flex-wrap items-start gap-2 mb-6'>
                    {job.employment_type.map((j,i)=>
                        <div
                            key={i + Math.random()}
                            className='flex justify-center items-center border rounded-md border-[#55699E]
                            font-Proxima700 text-[16px] leading-6 text-[16px] text-[#55699E] bg-[#d0daf2] py-4 w-48'
                        >{j}</div>
                    )}
                </div>
                <div className='font-Roboto400 text-[18px] -tracking-[0.56] leading-6 text-[#3A4562] mb-[10px]'>
                    Benefits
                </div>
                <div className='w-full flex [790px]:flex-wrap items-start gap-2 mb-16'>
                    {job.benefits.map((b,i)=>
                        <div
                            key={i + Math.random()}
                            className='flex justify-center items-center border rounded-md border-[#FFCF00] font-Proxima700
                             text-[16px] leading-6 text-[#988B49] -tracking-[0.46px] bg-[#f7eab5] py-4 w-48'
                        >{b}</div>
                    )}
                </div>
                <div className='font-Proxima700 text-[#3A4562] lg:tracking-[0.41px] text-[28px] leading-[34px] mb-2'>
                    Attached Images
                </div>
                <div className='w-full h-[1px] bg-[#3A4562] mb-4 opacity-20'></div>
                <div className='w-full overflow-auto items-center mb-[5.5rem]'>
                    <div className='w-[calc(600px+1rem)] flex items-center gap-2'>
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
                <button
                    onClick={()=> navigate('/')}
                    className='flex items-center font-titleFont bg-[#55699E4D] py-4 px-6 gap-5 rounded-md mb-[10rem]
                     cursor-pointer'
                >
                    <FontAwesomeIcon icon={faChevronLeft} className='h-[18px] text-[#384564] hover:text-sky-900'/>
                    <div className='font-Proxima600 text-[12px] leading-4 text-[#3A4562] hover:text-sky-900'>
                        RETURN TO JOB BOARD
                    </div>
                </button>
            </div>
            <div className='col-span-2 lg:col-span-1'>
                <div className='w-full h-[12rem]'>
                    <div className='w-full bg-[#2A3047] flex flex-col justify-start py-6 pl-8 pr-4 rounded-t-[0.5rem]'>
                        <h2 className='text-start text-[#E7EAF0] font-Proxima700 text-[20px] -tracking[0.63px] leading-6'>
                            Department name.
                        </h2>
                        <h2 className='text-[#E7EAF0] font-Proxima700 text-[20px] -tracking[0.63px] leading-6 mb-2'>
                            {job.name}.
                        </h2>
                        <div className='mb-[6px]'>
                            <img src={marker} className='text-[#D8D8D8] float-left mr-1 pb-1 h-6'/>
                            <div className='text-[#E8EBF3] font-Roboto400 text-[18px] leading-6 -tracking-[0.56px]'>
                                {job.address}
                            </div>
                        </div>
                        <div className='text-[#E8EBF3] font-Roboto400 text-[18px] leading-6 -tracking-[0.56px] items-stretch'>
                            <div>{job.phone}</div>
                            <div>{job.email}</div>
                        </div>
                    </div>
                    <Map location={job.location}/>
                </div>
            </div>
        </div>
    )
}

export default JobDetailsDekstop