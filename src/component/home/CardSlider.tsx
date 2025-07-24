'use client';

import { TourCardData } from '@/Data/data';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { PiUsersThree } from 'react-icons/pi';

interface CardSliderProps {
  data: TourCardData[];
}


export default function CardSlider({ data }: CardSliderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const updateCardsPerPage=()=>{
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(4);
    };


    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const nextPage=()=>{

    setSlideDirection('right');
    
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };


  const prevPage=()=>{

    setSlideDirection('left');
    
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };



  const getVisibleCards= () => {
    const start = currentPage * cardsPerPage;
    return data.slice(start, start + cardsPerPage);
  };



  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardsRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, index]);
          } else {
            setVisibleCards((prev) => prev.filter((i) => i !== index));
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(ref);

      observers.push(observer);
    });



    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [currentPage]);



  return (
    <div className='relative max-w-[1200px] mx-auto p-4'>
      <h1 className='text-textc text-3xl font-bold py-8'>Explore Our Popular Destinantions </h1>

      <div className='flex justify-center items-center gap-5 mb-4 lg:justify-end'>
        <button onClick={prevPage} className='text-2xl bg-textc/30  rounded-full w-[50px] h-[50px] flex items-center justify-center text-textc/50 hover:text-white hover:bg-mainBg'><IoIosArrowBack /></button>

        <button onClick={nextPage} className='text-2xl bg-textc/30  rounded-full w-[50px] h-[50px] flex items-center justify-center text-textc/50 hover:text-white hover:bg-mainBg'><IoIosArrowForward /></button>
      </div>


      <div className='overflow-hidden'>
        <div key={currentPage} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-in-out
            ${slideDirection === 'right' ? 'animate-slide-right' : ''}
            ${slideDirection === 'left' ? 'animate-slide-left' : ''}`}>

          {getVisibleCards().map((card, index)=> {

            const globalIndex = currentPage * cardsPerPage + index;
            const isVisible = visibleCards.includes(globalIndex);

            return (
              <div key={card.id} ref={(el) => (cardsRefs.current[globalIndex] = el)}
                className={`bg-white overflow-hidden flex flex-col transform transition-all duration-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>


                <div className='relative w-full h-52 lg:h-72'>
                  <Image src={card.image} alt={card.title}  fill className='object-cover rounded-xl'/>
                </div>


                <div className='p-4 flex flex-col flex-grow gap-1'>
                  <h3 className='text-lg font-semibold mb-1'>{card.title}</h3>
                  <p className='text-mainBg font-bold mb-2'><span className='text-textc/50'>from </span>{card.price}</p>
                  <div className='flex justify-between text-sm text-textc mb-2'>
                    <p className='flex items-center gap-1 text-mainBg/60'>
                      <CgCalendarDates className='w-5 h-5' />{card.date}</p>
                    <p className='flex items-center gap-1 text-mainBg/60'>
                      <PiUsersThree className='w-5 h-5' />{card.time}</p>
                  </div>

                  <p className='text-textc text-sm flex-grow'>{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
