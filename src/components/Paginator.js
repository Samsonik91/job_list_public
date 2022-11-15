import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faChevronLeft,
    faChevronRight,
    faEllipsis,
    faLineChart,
    faPills,
    faRightLong
} from "@fortawesome/free-solid-svg-icons"
import arrow from '../icons/arrow.png'

const Paginator = () => {

    const [items, setItems] = useState([1, 2, 3, 4, 5])
    const [current, setCurrent] = useState(1)
    const [rightShow, setRightShow] = useState(false)
    const [leftShow, setLeftShow] = useState(true)

    const toForward = () => {
        const newItems = []
        let item

        //setCurrent(items[0]+5)

        for(let i=0; i<items.length; i++){
            if(items[i]-5 < 0) return true
            item = items[i]-5
            if(item-5 < 0) {
                if(rightShow) setRightShow(false)
            }
            if(!leftShow) setLeftShow(true)
            newItems.push(item)
        }

        setItems(newItems)
    }

    const toBack = () => {
        const newItems = []
        let item

        for(let i=0; i<items.length; i++) {
            if (items[i] / 5 > 18 / 5) return true
            if (items[i] + 5 > 18) {
                if (leftShow) setLeftShow(false)
            }
            item = items[i] + 5
            if (!rightShow) setRightShow(true)
            newItems.push(item)
        }

        setItems(newItems)
        setCurrent(items[4])
    }

    const toStart = () => {
        setItems([1,2,3,4,5])
        if(rightShow) setRightShow(false)
        if(!leftShow) setLeftShow(true)
        setCurrent(1)
    }

    const toEnd = () => {
        setItems([16,17,18,19,20])
        if(!rightShow) setRightShow(true)
        if(leftShow) setLeftShow(false)
        setCurrent(18)
    }

    return (
        <div className='w-full sm:w-2/3 md:w-auto flex justify-between items-center bg-white rounded-[8px]
         md:rounded-[10px] p-[10px] px-4 md:px-6 shadow-sm shadow-[#3A4562] text-[#70778B]'>
            <img
                src={arrow}
                onClick={toForward}
                className='mb-[2px] mr-2 md:mr-7 cursor-pointer hover:scale-125 rotate-90'
            />
            <div className='md:mr-[3.4rem] w-[1.5px] h-[31px] bg-[#DEE3EF]'></div>
            <div className='flex items-center gap-3'>
                <div
                    style={{display: rightShow ? 'block' : 'none'}}
                    className='font-Proxima700 text-[16px] md:text-[21px] text-[#38415D9A] text-[#70778B]
                     leading-[19px] md:leading-6 tracking-[1.33px] md:tracking-[1.73px] cursor-pointer
                      hover:scale-125'
                    onClick={toStart}
                >1</div>
                <div style={{display: rightShow ? 'block' : 'none'}}>
                    <FontAwesomeIcon icon={faEllipsis} className='-mb-[2px] md:-mb-1 text-[#70778B]'/>
                </div>
                {items.map(i=>
                    i <= 18 &&
                    <div
                        key={i}
                        className='font-Proxima700 text-[16px] md:text-[21px] text-[#38415D9A] md:text-[#70778B]
                         leading-[19px] md:leading-6 tracking-[1.33px] md:tracking-[1.73px] cursor-pointer
                          hover:scale-125'
                        style={{color: current === i ? '#1568ed' : '#70778B'}}
                        onClick={()=> setCurrent(i)}
                    >{i}</div>
                )}
                <div style={{display: leftShow ? 'block' : 'none'}}>
                    <FontAwesomeIcon
                        icon={faEllipsis}
                        className='-mb-[2px] md:-mb-1 text-[#70778B]'
                    />
                </div>
                <div
                    style={{display: leftShow ? 'block' : 'none'}}
                    className='font-Proxima700 text-[16px] md:text-[21px] text-[#38415D9A] text-[#70778B]
                     leading-[19px] md:leading-6 tracking-[1.33px] md:tracking-[1.73px] cursor-pointer
                     hover:scale-125'
                    onClick={toEnd}
                >18</div>
            </div>
            <div className='mr-2 md:ml-[3.4rem] md:mr-7 w-[1.5px] h-[31px] bg-[#DEE3EF]'></div>
            <img
                src={arrow}
                onClick={toBack}
                className='mb-[2px] cursor-pointer hover:scale-125 hover:text-[#1568ed] -rotate-90'
            />
        </div>
    )
}

export default Paginator