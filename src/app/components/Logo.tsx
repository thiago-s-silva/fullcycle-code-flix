import Image from 'next/image';

export const Logo = () => (
  <Image src='/netflix-logo.png' width={100} height={100} alt='Netflix' className='cursor-pointer' />
);
