'use client';

import { stats } from '@/Data/data';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


type Props = {
  imageSrc: string;
  intro: string;
  heading: string;
  description: string;
};



function useCounterAnimation(startCounting: boolean, target: number, duration = 1500) {
  
  const [count, setCount]=useState(0);

  useEffect(() => {
    if(!startCounting) return;


    let start = 0;
    
    const step = Math.ceil(target/ (duration / 16)) ;

    const interval =setInterval(() => {
      start += step;

      if (start >= target) {
        start = target;
      
        clearInterval(interval);
      }


      setCount(start);
    }, 16);

    return () => clearInterval(interval);
  }, [startCounting, target, duration]);


  return count;
}



export default function StatWithImageSection({imageSrc,intro, heading,description }: Props) {


  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [startCounting, setStartCounting] = useState(false);


  useEffect(() => {
  
  const observer = new IntersectionObserver(
      (entries) => {
                entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setInView(true);
            setStartCounting(false);

            setTimeout(() => setStartCounting(true), 50);
          } 
          else 
          {

            setInView(false);
          }
        });
      },

      {threshold: 0.3}
    );



     if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);

    };
  }, []);

  const animatedStats = stats.map((stat) => useCounterAnimation(startCounting, stat.value));

  const animationClass = inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <section ref={sectionRef}  className='w-full py-10 lg:py-24 bg-white overflow-hidden'>

      <div className='container max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <div className={`flex justify-center order-1 lg:order-none transform transition-all duration-700 ease-out ${animationClass}`}>

          <div className='relative w-[200px] h-[300px] md:w-[300px] md:h-[400px] lg:h-[500px] lg:w-[350px]'>
            <Image src={imageSrc}  alt='Section Image' fill className='object-cover rounded-xl'/>


          </div>
        </div>


        <div className={`space-y-6 text-center lg:text-left order-2 lg:order-none transform transition-all duration-700 delay-200 ease-out ${animationClass}`}>
          <p className='text-sm text-textc/50 font-medium uppercase'>{intro}</p>
          <h2 className='text-2xl md:text-4xl font-bold text-textc'>{heading}</h2>
          <p className='text-textc text-base'>{description}</p>


          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-6'>
            {stats.map((stat, index) => (
              <div  key={stat.label} className={`flex flex-col items-center text-center transform transition-all duration-700 delay-${index * 100} ease-out ${animationClass}`}>

                <h3 className='text-3xl md:text-4xl font-bold text-mainBg'>+{animatedStats[index]}</h3>
                <p className='text-sm text-textc/50 mt-1'>{stat.label}</p>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
