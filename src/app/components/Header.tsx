'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // This is where we set the state of isScrolled
      setIsScrolled(window.scrollY > 0);
    };

    // This is where we listen for the scroll event
    window.addEventListener('scroll', handleScroll);

    // This is a cleanup function that React will run when the component unmounts
    // this is important to prevent memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 transition-all md:px-16 ${
        isScrolled && 'bg-black'
      }`}
    >
      <div className='flex items-center space-x-8'>
        <Image src='/netflix-logo.png' width={100} height={100} alt='Netflix' />
        <ul className='hidden md:flex md:space-x-4'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>

      <div className='flex items-center space-x-2 md:space-x-4'>
        <button className='hidden md:inline'>
          <FaSearch />
        </button>
        <span className='hidden md:inline'>Kids</span>
        <Image src='/netflix-avatar-profile.png' alt='Profile Avatar' height={30} width={30} className='rounded-sm' />
      </div>
    </header>
  );
}
