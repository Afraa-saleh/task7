'use client';

import { useEffect, useRef, useState } from 'react';
import { FeatureCard } from '@/Data/data';


import Image from 'next/image';

interface Props {
  cards: FeatureCard[];
}

export default function FeatureSection({cards}: Props) {

  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);


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
  }, []);



  return (
    <section className='py-16 bg-white'>
      <div className='container max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {cards.map((card, index) => {
          const isVisible = visibleCards.includes(index);

          return (
            <div  key={index} ref={(el) => (cardsRefs.current[index] = el)}
              className={`bg-white overflow-hidden transition hover:shadow-xl transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}>
              
              <div className='relative w-full h-60'>
                <Image src={card.image} alt={card.title} fill className='object-cover rounded-xl'/>
              </div>

              
              <div className='p-5 space-y-2'>
                <h3 className='text-xl font-bold text-gray-800'>{card.title}</h3>
                <p className='text-sm text-gray-600'>{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
