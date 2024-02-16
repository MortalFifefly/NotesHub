import React from 'react';
import Link from 'next/link';

const Body = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-row subHeight'>
        <Link href={'/maths'} id='maths' style={{backgroundImage: 'url("https://i.ibb.co/pJCvQGK/math.jpg")', backgroundRepeat: "no-repeat"}} className='tgl text-opacity-0 hover:text-opacity-100 flex text-4xl overflow-hidden font-Teko justify-center items-center transition-all hover:drop-shadow-gl bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-red-500 font-extrabold rounded-xl'>Mathematics</Link>
        <Link href={'/phy'} id='phy' style={{backgroundImage: 'url("https://i.ibb.co/VSGRxVG/phy.jpg")', backgroundRepeat: "no-repeat"}}  className='tgl text-opacity-0 hover:text-opacity-100 flex text-4xl overflow-hidden font-Teko justify-center items-center transition-all hover:drop-shadow-gl bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-red-500 font-extrabold rounded-xl'>Physics</Link>
        <Link href={'/cs'} id='cs' style={{backgroundImage: 'url("https://i.ibb.co/ZWKG8rR/cs.jpg")', backgroundRepeat: "no-repeat"}}  className='tgl text-opacity-0 hover:text-opacity-100 text-center flex text-4xl overflow-hidden font-Teko justify-center items-center transition-all hover:drop-shadow-gl bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-red-500 font-extrabold rounded-xl'>Computer <br/> Science</Link>
        <Link href={'ee'} id='ee' style={{backgroundImage: 'url("https://i.ibb.co/8dcXTh1/ee.png")', backgroundRepeat: "no-repeat"}}  className='tgl text-opacity-0 hover:text-opacity-100 text-center flex text-4xl overflow-hidden font-Teko justify-center items-center transition-all hover:drop-shadow-gl bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-red-500 font-extrabold rounded-xl'>Electrical <br/> Engineering</Link>
        <Link href={'/me'} id='me' style={{backgroundImage: 'url("https://i.ibb.co/tCQ6Bkd/me.jpg")', backgroundRepeat: "no-repeat"}}  className='tgl text-opacity-0 hover:text-opacity-100 flex text-4xl overflow-hidden font-Teko justify-center items-center transition-all hover:drop-shadow-gl bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-red-500 font-extrabold rounded-xl'>Worshop</Link>
      </div>
    </div>
  );
}

export default Body;

