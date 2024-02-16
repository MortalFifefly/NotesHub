import React from 'react';
import Header from '@/Components/Header';
import ChPop from '@/Components/chPop';
const Page = () => {
    return (
        <div>
            <div className='flex flex-col m-0'>
                <Header />;
                <h1 className='font-Comfortaa mt-5 flex justify-center items-center text-3xl text-sky-200 font-extrabold'>Mathematics:</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='text-white grid grid-cols-5 gap-4 chap'>
                    <button className=' transition-all bg-purple-400' >1</button>
                    <button className='bg-purple-400'>2</button>
                    <button className='bg-purple-400'>3</button>
                    <button className='bg-purple-400'>4</button>
                    <button className='bg-purple-400'>5</button>
                    <button className='bg-purple-400'>1</button>
                    <button className='bg-purple-400'>2</button>
                    <button className='bg-purple-400'>3</button>
                    <button className='bg-purple-400'>4</button>
                    <button className='bg-purple-400'>5</button>
                </div>
                
            </div>
            <ChPop className='fixed' />
        </div>
    );
};

export default Page;

