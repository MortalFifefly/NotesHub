import React from 'react';
const ChPop = (props) => {
    return (
        <div className='flex h-screen w-screen bg-black/50 fixed top-0 items-center'>
            <div className='pupop flex '>
                <button>
                    <img src="https://i.ibb.co/84gn7dt/cancel.png" alt="" className='h-full'/>
                </button>
                {props.children}
            </div>
        </div>
    );
}

export default ChPop;
