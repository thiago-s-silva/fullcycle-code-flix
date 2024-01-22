'use client';
import { FaSearch } from 'react-icons/fa';
import { UserProfile } from './UserProfile';
import { NavLinks } from './NavLinks';
import { Logo } from './Logo';
import { useScroll } from '../hooks/useScroll';

export default function Header() {
  // This is where we call our custom hook
  const isScrolled = useScroll();

  return (
    <header
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 transition-all md:px-16 ${
        isScrolled && 'bg-black'
      }`}
    >
      <div className='flex items-center space-x-8'>
        <Logo />
        <NavLinks />
      </div>

      <div className='flex items-center space-x-2 md:space-x-4'>
        <button className='hidden md:inline'>
          <FaSearch />
        </button>

        <UserProfile />
      </div>
    </header>
  );
}
