

'use client';

import { popularPackages } from '@/Data/data';
import Image from 'next/image';
import { ReactNode } from 'react';
import { BiSolidDiscount } from 'react-icons/bi';
import { CiCalendarDate } from 'react-icons/ci';
import { FaBicycle, FaBus, FaShuttleVan } from 'react-icons/fa';
import { MdOutlineHeadsetMic, MdOutlineLocationOn } from 'react-icons/md';
import { TfiMapAlt } from 'react-icons/tfi';
import PackageCard, { PackageCardProps } from './PackageCard';
import { PiMountainsDuotone } from 'react-icons/pi';
import { GiCornerFlag, GiWaterGallon } from 'react-icons/gi';
import { IoPricetagsOutline } from 'react-icons/io5';
import { SlPeople } from 'react-icons/sl';
import { GrLike, GrUserPolice } from 'react-icons/gr';




type SectionProps = {
  packages: PackageCardProps[];
};



const getIcons = (title: string) => {
  switch (title) {
    case 'BIKE / RICKSHAW':
      return {
        date: <CiCalendarDate className='text-mainBg w-6 h-6' />,
        destination: <FaBicycle className='text-mainBg w-6 h-6' />,
        booking: <BiSolidDiscount className='text-mainBg w-6 h-6' />,
        support: <MdOutlineHeadsetMic className='text-mainBg w-6 h-6' />,
      };

    case 'BIKE TOURS':
      return {
        date: <PiMountainsDuotone  className='text-mainBg w-6 h-6' />,
        destination: <GiCornerFlag className='text-mainBg w-6 h-6' />,
        booking: <GiWaterGallon  className='text-mainBg w-6 h-6' />,
        support: <MdOutlineHeadsetMic className='text-mainBg w-6 h-6' />,
      };

    case 'BUS TRIPS':
      return {
        date: <IoPricetagsOutline className='text-mainBg w-6 h-6' />,
        destination: <FaBus className='text-mainBg w-6 h-6' />,
        booking: <SlPeople className='text-mainBg w-6 h-6' />,
        support: <MdOutlineHeadsetMic className='text-mainBg w-6 h-6' />,
      };

    case 'TRANSFER':
      return {
        date: <GrUserPolice className='text-mainBg w-6 h-6' />,
        destination: <MdOutlineLocationOn className='text-mainBg w-6 h-6' />,
        booking: <GrLike className='text-mainBg w-6 h-6' />,
        support: <MdOutlineHeadsetMic className='text-mainBg w-6 h-6' />,
      };
    default:
      return {
        date: <CiCalendarDate className='text-mainBg w-6 h-6' />,
        destination: <TfiMapAlt className='text-mainBg w-6 h-6' />,
        booking: <BiSolidDiscount className='text-mainBg w-6 h-6' />,
        support: <MdOutlineHeadsetMic className='text-mainBg w-6 h-6' />,
      };
  }
};

export default function PopularPackages() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-[1200px] mx-auto'>
        
        <h2 className='text-3xl md:text-4xl font-bold text-textc mb-12'>The Most Popular Packages</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {popularPackages.map((pkg, index) => (
            <PackageCard
              key={index}
              {...pkg}
              icons={getIcons(pkg.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
