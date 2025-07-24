'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export type Testimonial = {
  name: string;
  image: string;
  comment: string;
};


type Props = {
  testimonials: Testimonial[];
};



export default function ClientSlider({ testimonials }: Props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentItems = testimonials.slice(
    pageIndex * itemsPerPage,
    pageIndex * itemsPerPage + itemsPerPage
  );

  const nextPage = () => setPageIndex((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);


  return (
    <section ref={sectionRef} className='bg-white py-20 px-4'>
      <div className='max-w-[1000px] mx-auto'>
        <h2
          className={`text-3xl font-bold text-textc mb-12 transition duration-700 transform${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Happy Customers Says</h2>

        <div className='flex justify-center items-center gap-5 mb-4 lg:justify-end'>
          <button onClick={prevPage} className='text-2xl bg-textc/30  rounded-full w-[50px] h-[50px] flex items-center justify-center text-textc/50 hover:text-white hover:bg-mainBg'>
            <IoIosArrowBack />
          </button>


          <button onClick={nextPage} className='text-2xl bg-textc/30  rounded-full w-[50px] h-[50px] flex items-center justify-center text-textc/50 hover:text-white hover:bg-mainBg'>
            <IoIosArrowForward />
          </button>
        </div>

        <div className='flex justify-center items-center gap-6'>
          <div className='grid sm:grid-cols-2 gap-6 w-full'>
            {currentItems.map((testimonial, i) => (
              <div
                key={i}
                className={`border-1 border-gray-500/20 p-6 rounded-xl shadow transition duration-700 transform
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}>


                <div className='flex items-center gap-4 mb-3'>
                  <Image src={testimonial.image} alt={testimonial.name}  width={50} height={50} className='rounded-full object-cover'/>
                 
                  <h4 className='text-lg font-semibold'>{testimonial.name}</h4>
                
                </div>
                
                <p className='text-gray-600 text-sm'>{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
