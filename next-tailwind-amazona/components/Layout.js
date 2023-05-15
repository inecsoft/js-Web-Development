import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Inecsoft' : 'Inecsoft'}</title>
        <meta
          name='description'
          content='Inecsoft web development company that creates Ecommerce Websites'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex min-h-screen flex-col justify-between '>
        <header>
          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            <Link href='/' className='text-lg font-bold'>
              Inecsoft
            </Link>
            <div>
              <Link href='/cart' className='p-2'>
                Cart
              </Link>
              <Link href='/login' className='p-2'>
                login
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
