'use client';


import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const observer= new IntersectionObserver(
      ([entry])=>setVisible(entry.isIntersecting),{ threshold: 0.2 });

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
       
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className='lg:px-24  bg-textc text-white overflow-hidden'>
      <div className='py-10 px-4  text-center'>
        <img src='/images/logo/logo.png' alt='Logo' className=' w-24 h-auto ' />
      </div>


      <div className='border-t border-white/30 mx-6' />

          <div  className={`transition-all duration-700 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>

        <div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>

          <div>
            <h3 className='font-semibold text-lg mb-4'>Services</h3>
            <ul className='space-y-2 text-sm text-white'>
              <li>Bike and Rickshaw rental</li>
              <li>Guided Tours of Lucca</li>
              <li>Guided Bike Tour of Lucca</li>
              <li>Trip In The Tuscan Hills</li>
              <li>Transportation With Luxury Cars</li>
              <li>Wine Tours By Bus With Guide</li>
            </ul>
          </div>


          <div>
            <h3 className='font-semibold text-lg mb-4'>Home</h3>

            <ul className='space-y-2 text-sm text-white'>
              <li>Home</li>
              <li>About Us</li>
              <li>Tour Packages</li>
            </ul>
          </div>


          <div>
            <h3 className='font-semibold text-lg mb-4'>Help</h3>
            <ul className='space-y-2 text-sm text-white'>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>


          <div>
            <h3 className='font-semibold text-lg mb-4'>Contact Us</h3>
            <ul className='space-y-4 text-sm text-white'>
              <li className='flex items-start gap-2'><FaMapMarkerAlt className='text-mainBg mt-1' />
              
               <span>Piazza Napoleone, Lucca, Tuscany</span>
              
              </li>

              <li className='flex items-center gap-2'>
            <FaPhoneAlt className='text-mainBg' /> <span>+39 346 368 5708</span>
              </li>
              <li className='flex items-center gap-2'><FaEnvelope className='text-mainBg' /><span>italiainlimo@gmail.com</span>
              </li>
            </ul>
          </div>


          <div>
            <h3 className='font-semibold text-lg mb-4'>Social Media</h3>

            <div className='flex gap-4 text-xl'>
              <a href='#' aria-label='Instagram'  className='w-8 h-8 bg-mainBg rounded-full flex items-center justify-center text-textc hover:bg-transparent hover:text-mainBg'>
                <FaInstagram />
              </a>
     
               <a href='#' aria-label='Facebook'  className='w-8 h-8 bg-mainBg rounded-full flex items-center justify-center text-textc hover:bg-transparent hover:text-mainBg'>
                <FaFacebookF />
              </a>

              <a href='#' aria-label='Twitter'  className='w-8 h-8 bg-mainBg rounded-full flex items-center justify-center text-textc hover:bg-transparent hover:text-mainBg'>
                <FaTwitter />
              </a>

            </div>
          </div>
        </div>

        <div className='border-t border-white/30 mx-6' />


        <div className='text-center py-6 text-sm text-white'>Copyright © 2022. All rights reserved.</div>

      </div>
    </footer>
  );
}
