'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MdDateRange } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';


export default function FormSection() {

  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);


  const [showForm, setShowForm] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const formObserver = new IntersectionObserver(
      ([entry]) => setShowForm(entry.isIntersecting),
      { threshold: 0.3 }
    );


    const imageObserver = new IntersectionObserver(
      ([entry]) => setShowImage(entry.isIntersecting),
      { threshold: 0.3 }
    );


    if (formRef.current) formObserver.observe(formRef.current);
    if (imageRef.current) imageObserver.observe(imageRef.current);

    return () => {
      if (formRef.current) formObserver.unobserve(formRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section
      className='relative w-full py-8 bg-cover bg-center'
      style={{ backgroundImage: "url('/images/another/bg.png')" }}>


      <div className='relative z-10 max-w-[1200px] mx-auto px-4 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center'>

        <div ref={formRef} className={`bg-white/30 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg w-full transform transition-all duration-700 ${showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         
          <h2 className='text-2xl font-bold text-textc mb-6 text-center'>Get in Touch</h2>
         
          <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div>
              <label className='block text-sm font-medium text-textc mb-1'>Name and Surname</label>
              <input type='text' className='w-full px-4 py-2 border border-white bg-white rounded-md focus:outline-none' placeholder='Enter your name and surname' />
            </div>

            <div>
              <label className='block text-sm font-medium text-textc mb-1'>Email Address</label>
              <input type='email' className='w-full px-4 py-2 border border-white bg-white rounded-md focus:outline-none' placeholder='Enter your email address' />
            </div>

            <div>
              <label className='block text-sm font-medium text-textc mb-1'>Telephone Number</label>
              <input type='text' className='w-full px-4 py-2 border border-white bg-white rounded-md focus:outline-none' placeholder='Enter your telephone number' />
            </div>

            <div>
              <label className='block text-sm font-medium text-textc mb-1'>Service Type</label>
              <input type='text' className='w-full px-4 py-2 border border-white bg-white rounded-md focus:outline-none' placeholder='Select the service types' />
            </div>


            <div>
              <label className='block text-sm font-medium text-textc mb-1'>Date</label>
              <div className='relative'>
                <input
                  type='text'
                  className='w-full pr-10 pl-4 py-2 border border-white bg-white rounded-md focus:outline-none'
                  placeholder='Select the date'
                />
                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-textc/40 text-lg'>
                  <MdDateRange />
                </span>
              </div>
            </div>


            <div>
              <label className='block text-sm font-medium text-textc mb-1'>Time</label>
              <div className='relative'>
                <input
                  type='text'
                  className='w-full pr-10 pl-4 py-2 border border-white bg-white rounded-md focus:outline-none'
                  placeholder='Select the time'
                />
                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-textc/40 text-lg'>
                  <IoMdTime />
                </span>
              </div>
            </div>
          </form>


          <div className='mt-6 flex justify-center'>
            <button className='px-12 py-2 bg-mainBg hover:bg-orange-600 text-white font-bold rounded-3xl transition cursor-pointer'>Book Now</button>
          </div>
        </div>


        <div
          ref={imageRef}
          className={`relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px] lg:w-[400px] xl:w-[550px] transform transition-all duration-700
            ${showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>


          <div className='hidden lg:block absolute top-12 w-full h-[450px]'>
            <Image src='/images/home/bike.webp' alt='Contact Image' fill className='object-contain'/>
          </div>

          <div className='block lg:hidden relative w-full h-full'>
            <Image src='/images/home/bike.webp' alt='Contact Image' fill className='object-contain'/>
          </div>


        </div>
      </div>
    </section>
  );
}
