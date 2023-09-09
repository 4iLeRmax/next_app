import Link from 'next/link';

const TheHeader = () => {
  return (
    <div className='flex items-center justify-center w-full gap-5 p-5 text-gray-800 bg-white'>
      <Link href='/'>Home</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/about'>About</Link>
    </div>
  );
};

export default TheHeader;
