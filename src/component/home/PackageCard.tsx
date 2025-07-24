'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';

export type PackageCardProps = {
  image: string;
  title: string;
  price: string;
  date: string;
  destination: string;
  booking: string;
  support: string;
  icons: {
    date: ReactNode;
    destination: ReactNode;
    booking: ReactNode;
    support: ReactNode;
  };
};

export default function PackageCard({image,title,price,date,destination,booking,support,icons,}: PackageCardProps) {

  const cardRef = useRef<HTMLDivElement>(null);
  const [animate,setAnimate] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );


    const currentRef = cardRef.current;
    if (currentRef) observer.observe(currentRef);


    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl overflow-hidden border-gray-400/20 border-1 transition-all duration-700 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          
      <div className='relative h-[220px] w-full'>
        <Image src={image} alt={title} fill className='object-cover' />
      </div>


      <div className='p-5'>
        <h3 className='text-lg font-bold mb-2 text-textc'>{title}</h3>
        <p className='relative text-mainBg font-semibold mb-4 text-3xl'>
          <span className='relative bottom-4 left-0 text-textc text-[16px]'>€</span> {price}
          <span className='text-textc text-[16px]'> / day</span>
        </p>

        <ul className='text-sm text-textc space-y-6 mb-4'>
          <li className='flex items-center gap-2'>
            {icons.date}
            <span>{date}</span>
          </li>
          <li className='flex items-center gap-2'>
            {icons.destination}
            <span>{destination}</span>
          </li>
          <li className='flex items-center gap-2'>
            {icons.booking}
            <span>{booking}</span>
          </li>
          <li className='flex items-center gap-2'>
            {icons.support}
            <span>{support}</span>
          </li>
        </ul>

        <button className='w-full bg-white border-mainBg hover:bg-mainBg hover:text-white text-mainBg border-1 py-2 rounded-4xl font-semibold transition'>Book Now</button>
      </div>
    </div>
  );
}
