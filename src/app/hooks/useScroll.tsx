'use client';
import { useEffect, useState } from 'react';

export const useScroll = () => {
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

  return isScrolled;
};
