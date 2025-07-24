'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ReadyToStart() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer=new IntersectionObserver(
      ([entry]) =>{
        if(entry.isIntersecting)
        {
          setInView(true);
        } 
        else
        {
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );



    if(sectionRef.current) 
    {
      observer.observe(sectionRef.current);
    }

    return () => {
      if(sectionRef.current) 
      {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);



  const animationClass = inView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10';



  return (
    <section ref={sectionRef} className='relative w-full bg-cover bg-center mt-16 transition-all duration-700 ease-out'
      style={{ backgroundImage: "url('/images/another/bg.png')" }}>

      <div className='absolute inset-0' />


      <div className={`relative z-10 pb-8 lg:pb-0 container  max-w-[1200px] mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-10 transform ${animationClass} transition-all duration-700 ease-out`}>


        <div className='bg-white/30 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg text-textc w-full lg:w-1/3 text-center'>
          <h2 className='text-2xl  font-bold mb-4'>Get Special Offers for Organizations</h2>

          <p className='text-sm md:text-base pb-4'>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.          </p>
        
        
          <Link href='/contact'>
            <button className='px-6 py-2 bg-mainBg hover:bg-orange-600 rounded-lg text-white font-semibold transition'>Contact Us</button>
          </Link>

        </div>


        <div className='relative w-full lg:w-[300px] h-[320px]'>

          <div className='hidden lg:block absolute -right-4 -top-25 w-[300px] h-[420px]'>

            <Image src='/images/home/pic.webp' alt='Contact' fill className='object-contain'/>
          </div>


          <div className='absolute -top-21 md:-top-25 block lg:hidden w-full flex justify-center'>
            <Image src='/images/home/pic.webp' alt='Contact' width={300} height={380} className='object-contain'/>
          </div>
          
        </div>
      </div>
    </section>
  );
}
