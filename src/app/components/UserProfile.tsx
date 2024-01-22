import Image from 'next/image';

export const UserProfile = () => (
  <div className='flex space-x-4'>
    <span className='hidden md:inline'>Kids</span>
    <Image src='/netflix-avatar-profile.png' alt='Profile Avatar' height={30} width={30} className='rounded-sm' />
  </div>
);
