import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Inecsoft' : 'Inecsoft'}</title>
        <meta name='description' content='Ecommerce Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex min-h-screen flex-col justify-between '>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            <Link className='text-lg font-bold' href='/'>
              Inecsoft
            </Link>
            <div>
              <Link className='p-2' href='/cart'>
                Cart
              </Link>
              <Link className='p-2' href='/login'></Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>
          <p>Copyright © 2022 Inecsoft</p>
        </footer>
      </div>
    </>
  );
}
