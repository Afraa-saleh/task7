'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  images:string[];

  title:string;
  subtitle: string;

};



export default function HeroAbout({images, title, subtitle }: Props) {
  const [ currentIndex,setCurrentIndex] =useState(0);
  const [typedTitle,setTypedTitle] =useState('');
  const [typedSubtitle, setTypedSubtitle]  =useState('');

  useEffect(() => {
    let titleIndex = 0;

    let subtitleIndex = 0;


    const typeTitle = () => {
      if (titleIndex < title.length) {

        setTypedTitle(title.substring(0, titleIndex + 1));
        
        titleIndex++;
        setTimeout(typeTitle, 100);
      } else
      {

        setTimeout(typeSubtitle, 300);
      }
    };

    const typeSubtitle =()=>{
      if (subtitleIndex < subtitle.length ) {

        setTypedSubtitle(subtitle.substring(0, subtitleIndex + 1));
        subtitleIndex++;
        
        setTimeout(typeSubtitle, 80);
      }
    };



    typeTitle();
  },  [ title,subtitle]);

  useEffect(()=> {
    const interval=setInterval(() => {

      setCurrentIndex((prev) => (prev + 1) % images.length);
    
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className='relative w-full h-auto pt-10 pb-10 lg:h-[100vh] overflow-x-hidden'>
      {images.map((img, index) => (
        <Image key={index} src={img} alt={`Slide ${index}`} fill className={`absolute inset-0 z-0 object-cover transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} priority={index === 0}/>
      ))}



      <div className='absolute inset-0 bg-black/20 z-10' />

      <div className='relative z-20 flex flex-col items-center justify-center text-center h-full px-4'>

        <h1 className='font-podcast text-4xl md:text-6xl text-white mb-4 pt-26 drop-shadow-lg'>{typedTitle}</h1>

        <p className='text-lg md:text-2xl text-white mb-8 lg:px-64'>{typedSubtitle}</p>

        <button className='bg-transparent border border-white text-xl lg:text-2xl text-white p-2 lg:p-4 rounded-4xl hover:bg-mainBg cursor-pointer'>View our Tour Packages</button>

      </div>
    </section>
  );
}
