'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Login from '@/component/login/Login';
import SignUp from '@/component/signup/SignUp';

type Props = {
  onClose: () => void;
};

const navLinks =[
  { label: 'Home',path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Tour Packages', path: '/tours' },
  { label: 'Contact Us', path: '/contact' },
];


export default function MobileMenu({onClose}: Props) {

  const [selectedLang, setSelectedLang] = useState('English');
  const pathname = usePathname();


  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
  };

  return (
    <>
      <div className='fixed inset-0 z-50 bg-textc/60'>
        <div className='w-64 bg-textc h-full p-6 flex flex-col justify-between text-white animate-slide-in fixed right-0 top-0'>

          <div>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-lg font-bold'>Menu</span>

              <button onClick={onClose} className='text-white text-2xl'>&times;</button>
            </div>


            <nav className='flex flex-col gap-4'>
              {navLinks.map((link)=>{
                const isActive = pathname === link.path;
                return (

                  <Link key={link.label} href={link.path}
                  
                    onClick={onClose}
                    className={`hover:text-mainBg transition relative ${isActive ? 'text-mainBg after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-mainBg' : ''}`}>
                    {link.label}</Link>
                );
              })}
            </nav>
          </div>


          <div className='flex flex-col gap-8'>
            <div className='flex gap-3'>

              <Link href='#' passHref>
                <button onClick={() => setShowLogin(true)}  className=' border text-mainBg border-mainBg rounded-xl  w-fit px-4 py-2 cursor-pointer hover:bg-tran hover:border hover:border-white'>Log In</button>
              </Link>

              <Link href='#' passHref>
                <button onClick={() => setShowSignup(true)}  className='text-white rounded-xl bg-mainBg w-fit px-4 py-2 cursor-pointer hover:bg-tran hover:border hover:border-white'>Sign Up</button>
              </Link>
            </div>


            <div>
              <label className='block text-sm mb-4'>Language</label>
              <select value={selectedLang} onChange={(e) => handleLanguageChange(e.target.value)}
                className='w-full px-3 py-6 rounded bg-transparent text-mainBg focus:outline-none'>

                <option value='English'>English</option>
                <option value='Arabic'>العربية</option>

              </select>
            </div>
          </div>
        </div>

      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}

      {showSignup && <SignUp onClose={() => setShowSignup(false)} />}

    </>
  );
}
