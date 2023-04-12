import React from 'react';

const Blog = () => {
    return (
        <div className="relative z-0" >
           
                <div className='flex flex-row relative items-center  bg-himage  bg-opacity-25 pt-8 -mt-8'>
                <div className='basis-1/4'><img src='/assets/Images/Vector.png' alt="" className='absolute bottom-0 invisible md:visible ' /></div>
                <div className='basis-2/4'><p className="text-3xl p-28 font-extrabold">Blog qustion seation</p></div>
                <div className='basis-1/4'><img src="/assets/Images/Vector-1.png" alt="" className='absolute top-0 invisible md:visible' /> </div>
            </div>

  <div className=' lg:flex-row justify-center text-xl md:container md:mx-auto lg:p-12 mx-8 box-border '>
            <div className='text-5xl font-extrabold'>QA Saction</div>
<div className='shadow-md px-4 py-4 my-5'> <b className='text-2xl'> When To Use Context API</b><br />
Context API is a feature in React that enables sharing data among components without passing the data down manually at every level of the component tree. </div>
<div className='shadow-md px-4 py-4 my-5'><b className='text-2xl'>What is Custom Hook ?</b><br />
custom hook is a JavaScript function that starts with the prefix "use" and follows the conventions of the built-in React hooks. Custom hooks allow you to extract repeated logic from components and reuse it in a composable way</div>
<div className='shadow-md px-4 py-4 my-5'><b className='text-2xl'>What is useRef ?</b><br />
useRef is a hook provided by React that creates a mutable reference object, which can be used to persist a value across re-renders of a functional component.
The useRef hook is used to access the DOM node(s) and/or store any mutable value that needs to persist across component renders. When useRef is used to store a value, the value can be updated without causing a re-render of the component</div>
<div className='shadow-md px-4 py-4 my-5'><b className='text-2xl'>What is useMemo ?</b> <br />
                    useMemo is a hook provided by React that is used for memoization, which is the process of caching the
                    result of an expensive calculation and reusing it when the inputs to that calculation have not changed.
                    useMemo takes two arguments: a function that computes the value to be memoized, and an array of dependencies
                    that indicate when the memoized value should be recalculated.

</div>


        </div>

        </div>
        
    );
};

export default Blog;