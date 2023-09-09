import Link from 'next/link';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className='text-4xl text-center'>About us</h1>
      <ul className='flex items-center justify-center w-full gap-5 mt-5'>
        <li>
          <Link href='/about/contacts'>Contacts</Link>
        </li>
        <li>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
