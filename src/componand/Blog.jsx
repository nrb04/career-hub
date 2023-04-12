import React from 'react';

const Blog = () => {
    return (
        <div className="relative z-0" >
           
                <div className='flex flex-row relative items-center  bg-himage bg-opacity-25 pt-8 -mt-8'>
                <div className='basis-1/4'><img src='/assets/Images/Vector.png' alt="" className='absolute bottom-0 ' /></div>
                <div className='basis-2/4'><p className="text-2xl p-28">The quick brown fox ...</p></div>
                <div className='basis-1/4'><img src="/assets/Images/Vector-1.png" alt="" className='absolute top-0 ' /> </div>
            </div>
        </div>
        
    );
};

export default Blog;