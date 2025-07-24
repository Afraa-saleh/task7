'use client';

import { useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { FaCar } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { PiFlagPennantFill, PiUsersThree } from "react-icons/pi";



export default function HeroTabs() {
    const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');

    return (
        <div className='w-full flex-wrap max-w-[1100px] mx-auto bg-white/20 rounded-[16px] p-8 shadow-lg overflow-hidden'>

            <div className='w-fit bg-white/40 flex rounded-t-[16px] overflow-hidden '>
                <button onClick={() => setActiveTab('public')} className={`px-6 py-3 font-medium transition ${activeTab === 'public'? 'text-mainBg bg-white' : 'text-white bg-transparent'}`} >Public Tours</button>

                <button onClick={() => setActiveTab('private')} className={`px-6 py-3 font-medium transition ${activeTab === 'private'? 'text-mainBg bg-white' : 'text-white bg-transparent'}`} >Private Tours</button>

            </div>

            <div className='bg-white p-5 flex flex-wrap items-center justify-center gap-3 lg:justify-between lg:gap-0 grid-cols-2 md:grid-cols-6 rounded-b-[16px]'>

                <div>
                    <label className='flex items-center justify-center gap-1 text-sm text-textc mb-1'><PiUsersThree className='w-[24px] h-[24px]' /> Number of people</label>
                   
                    <select className='w-full rounded px-3 py-2 focus:outline-none'><option>Choose number</option></select>
                </div>

                
                <div className='w-[120px] h-[1px] lg:w-[1px] lg:h-[50px] md:hidden bg-gray-400'></div>

                <div className='  pl-4' >
                    <label className='flex items-center justify-center gap-1 text-sm text-textc mb-1'><CgCalendarDates className='w-[24px] h-[24px]' />Date</label>

                    <input type='date' className='w-full rounded px-3 py-2 focus:outline-none'/>
                </div>

                <div className='w-[120px] h-[1px] lg:w-[1px] lg:h-[50px] md:hidden bg-gray-400'></div>


                <div className='  pl-4'>
                    <label className='flex items-center justify-center gap-1 text-sm text-textc mb-1'><IoMdTime className='w-[24px] h-[24px]' /> Time</label>

                    <select className='w-full rounded px-3 py-2 focus:outline-none'><option>Choose Time</option></select>

                </div>

                <div className='w-[120px] h-[1px] lg:w-[1px] lg:h-[50px] md:hidden bg-gray-400'></div>


                <div className='  pl-4'>
                    <label className='flex items-center justify-center gap-1 text-sm text-textc mb-1'><PiFlagPennantFill className='w-[24px] h-[24px]' /> Tour</label>

                    <select className='w-full rounded px-3 py-2 focus:outline-none'><option>Select Tour</option></select>

                </div>

                <div className='w-[120px] h-[1px] lg:w-[1px] lg:h-[50px] md:hidden bg-gray-400'></div>


                <div className='  pl-4'>
                    <label className='flex items-center justify-center gap-1 text-sm text-textc mb-1'><FaCar className='w-[24px] h-[24px]' /> Transportation</label>
                    
                    <select className='w-full rounded px-3 py-2 focus:outline-none'><option>Select Transportation</option></select>

                </div>


                <div className='flex items-end justify-end'>
                    <button className='w-[80px] h-[80px] bg-mainBg hover:bg-orange-600 cursor-pointer text-white font-bold py-2 rounded flex justify-center items-center transition'>
                        <FiSearch className='w-[32px] h-[32px]' /></button>
                </div>

            </div>

        </div>
    )
}
