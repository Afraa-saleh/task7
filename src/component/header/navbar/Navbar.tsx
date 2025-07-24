'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Login from '@/component/login/Login';
import SignUp from '@/component/signup/SignUp';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Tour Packages', path: '/tours' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [language, setLanguage] = useState('EN');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <nav className={`w-lvw fixed top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-textc' : 'bg-white/20'}`}>
        <div className='max-w-7xl mx-auto flex items-center justify-between py-4 sm:px-6 px-4'>

          <div>
            <img src='/images/logo/logo.png' alt='logo'  className='w-[80px] h-[70px]' />
          </div>


          <div className='hidden md:flex gap-4 font-semibold'>
            {navLinks.map((link) => {
               const isActive = pathname === link.path;
              return(

                <Link key={link.label} href={link.path}
                  className={`font-OpenSans hover:text-mainBg transition relative ${isActive ? 'text-mainBg after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-mainBg' : 'text-white'}`}>
                  {link.label}</Link>

              );
            })}
          </div>


          <div className='flex items-center gap-3'>

            <div className='hidden md:flex items-center justify-center md:gap-3 lg:gap-8'>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}  className='bg-transparent text-white focus:outline-none'>

                <option value='EN'>EN</option>
                <option value='AR'>AR</option>
              </select>


              <Link href='#' passHref>
                <button onClick={() => setShowLogin(true)} className='text-white hover:text-mainBg  '>Log In</button>
              </Link>


              <Link href='#' passHref>
                <button onClick={() => setShowSignup(true)} className='text-white bg-mainBg w-fit px-4 py-2 lg:px-8 lg:py-3 rounded-4xl cursor-pointer hover:bg-tran hover:border hover:border-white'>Sign Up</button>
              </Link>         

        
                 </div>


            <button onClick={() => setMenuOpen(true)}  className='text-white text-2xl md:hidden'> &#9776;</button>

          </div>
        </div>
      </nav>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
        
              {showLogin && <Login onClose={() => setShowLogin(false)} />}

      {showSignup && <SignUp onClose={() => setShowSignup(false)} />}

    </>
  );
}
