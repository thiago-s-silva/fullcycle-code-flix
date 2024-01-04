import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header';
import { FaPlay } from 'react-icons/fa';
import { MdInfo } from 'react-icons/md';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden lg:h-[140vh]'>
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </Head>

      <Header />

      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col'>
            <Image
              src='/maid-banner.jpg'
              fill={true}
              alt='MAID'
              className='absolute h-[65vh] object-cover lg:h-[95vh]'
            />
            <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black to-transparent'></div>
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>MAID</h1>

          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Inspired by the powerful New York Times best-selling memoir Maid: Hard Work, Low Pay, and a Mother&apos;s
            Will to Survive by Stephanie Land, Maid will chronicle a single mother who turns to housekeeping to - barely
            - make ends meet as she battles against poverty, homelessness, and bureaucracy. Told primarily through her
            point of view, Maid will be a beautiful, alive, gritty, and inspiring exploration of poverty in America.
          </p>

          <div className='flex space-x-2 md:space-x-4 lg:space-x-4'>
            <button className='rounded-md bg-red-600 px-2 py-1 text-white md:rounded-full md:px-4 md:py-6 lg:rounded-full lg:px-6 lg:py-2'>
              <div className='flex items-center gap-2'>
                <FaPlay />
                Play
              </div>
            </button>

            <button className='rounded-md bg-gray-700 px-2 py-1 text-white md:rounded-full md:px-4 lg:rounded-full lg:px-4'>
              <div className='flex items-center gap-2'>
                <MdInfo />
                More info
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
