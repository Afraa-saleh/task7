'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { whatwedocards } from '@/Data/data';



export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);


  useEffect(()=>{

    const observer=new IntersectionObserver(
      ([entry])=>setVisible(entry.isIntersecting),
      
      { threshold: 0.2 }

    );


    if (sectionRef.current) observer.observe(sectionRef.current);
    return() =>{
      
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    
    };

  }, []);




  return (
    <section ref={sectionRef}  className='relative py-20 px-4 overflow-hidden'>

      <Image src='/images/another/bg.png' alt='Background' fill  className='absolute inset-0 object-cover -z-10'/>

      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

   {whatwedocards.map((card,index)=> (
          <div key={index} className={`bg-white/30  p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg transform transition-all duration-700
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
      
      
            <div className='mb-4'>
      
              <Image src={card.icon} alt={card.title} width={50}  height={50}   className='object-contain'/>
            </div>


            <h3 className='font-semibold text-lg text-textc'>{card.title}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}
