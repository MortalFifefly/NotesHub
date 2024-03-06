'use client';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Header from '@/Components/Header';
import { wrapGrid } from 'animate-css-grid'
const Page1 = () => {
    let ref = useRef();
    let gridItem = useRef();
    let gridItem1 = useRef();
    let gridItem2 = useRef();
    let gridItem3 = useRef();
    let gridItem4 = useRef();
    let gridItem5 = useRef();
    let gridItem6 = useRef();
    let gridItem7 = useRef();
    let gridItem8 = useRef();
    let gridItem9 = useRef();
    let gridItem10 = useRef();
    let container = null;
    useEffect(() => {
            container = ref.current;
            console.log(container);
    }, []);
    
    const gridUpdate = (el) => {
        el.target.classList.toggle("col-span-2");
        el.target.classList.toggle("row-span-2");
    
    }
    useEffect(() => {
        const gridAnConfig = {
            duration: 400,
            easing: 'backOut',
        }
        wrapGrid(container, gridAnConfig);
    }, []);
    return (
        <div>
            <div className='flex flex-col m-0'>
                <Header />;
                <h1 className='font-Comfortaa mt-5 flex justify-center items-center text-3xl text-sky-200 font-extrabold'>Mathematics:</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='*:text-white grid grid-cols-5 gap-4 chap' ref={ref}>
                    <button ref={gridItem1} className='bg-purple-400' onClick={gridUpdate.bind(gridItem1.current)} >1</button>
                    <button ref={gridItem2} className='bg-purple-400' onClick={gridUpdate.bind(gridItem2.current)}>2</button>
                    <button ref={gridItem3} className='bg-purple-400' onClick={gridUpdate.bind(gridItem3.current)}>3</button>
                    <button ref={gridItem4} className='bg-purple-400' onClick={gridUpdate.bind(gridItem4.current)}>4</button>
                    <button ref={gridItem5} className='bg-purple-400' onClick={gridUpdate.bind(gridItem5.current)}>5</button>
                    <button ref={gridItem6} className='bg-purple-400' onClick={gridUpdate.bind(gridItem6.current)}>1</button>
                    <button ref={gridItem7} className='bg-purple-400' onClick={gridUpdate.bind(gridItem7.current)}>2</button>
                    <button ref={gridItem8} className='bg-purple-400' onClick={gridUpdate.bind(gridItem8.current)}>3</button>
                    <button ref={gridItem9} className='bg-purple-400' onClick={gridUpdate.bind(gridItem9.current)}>4</button>
                    <button ref={gridItem10} className='bg-purple-400' onClick={gridUpdate.bind(gridItem10.current)}>5</button>
                </div>
            </div>
        </div>
    );
}
export default Page1;

