import React from 'react';
import math from '@/public/math.jpg';
import phy from '@/public/phy.jpg';
import cs from '@/public/cs.jpg';
import ee from '@/public/ee.jpg';
import me from '@/public/me.jpg';
const Body = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-row subHeight texts-white'>
        <div style={{backgroundImage: 'url("https://i.ibb.co/pJCvQGK/math.jpg")', backgroundRepeat: "no-repeat"}} className='bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-white rounded'>Mathematics</div>
        <div style={{backgroundImage: 'url("https://i.ibb.co/VSGRxVG/phy.jpg")', backgroundRepeat: "no-repeat"}}  className='bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-white'>Physics</div>
        <div style={{backgroundImage: 'url("https://i.ibb.co/ZWKG8rR/cs.jpg")', backgroundRepeat: "no-repeat"}}  className='bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-white'>Computer Science</div>
        <div style={{backgroundImage: 'url("https://i.ibb.co/8dcXTh1/ee.png")', backgroundRepeat: "no-repeat"}}  className='bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-white'>Electrical Engineering</div>
        <div style={{backgroundImage: 'url("https://i.ibb.co/tCQ6Bkd/me.jpg")', backgroundRepeat: "no-repeat"}}  className='bg-cover bg-center opacity-50 hover:opacity-100 h-full mx-3 basis-1/5 hover:basis-2/6 text-white'>Worshop</div>
      </div>
    </div>
  );
};

export default Body;
