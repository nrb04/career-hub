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
Props are immutable but state is mutable. Props are normally passed from parent component to its child component. But,
state is maintained in each component. Using props, we can change the state of a parent component.</div>
<div className='shadow-md px-4 py-4 my-5'><b className='text-2xl'>What is Custom Hook ?</b><br />
create a functional component and throw some React hook at it that tracks state, can also update it, and it just works.</div>
<div className='shadow-md px-4 py-4 my-5'><b className='text-2xl'>What is useRef ?</b><br />
useEffect can be used to set up a timer that updates the component state after a certain amount of time has passed. It
can also be used to subscribe to events, such as keyboard or mouse events, and perform actions based on those events</div>
<div className='shadow-md px-4 py-4 my-5'><b className='text-2xl'>What is useMemo ?</b> <br />
React works by creating a virtual DOM in memory, which is a lightweight representation of the actual DOM. Instead of
manipulating the browser's DOM directly, React manipulates the virtual DOM, where it does all the necessary changes
before making the changes in the browser DOM. React only changes what needs to be changed, which makes it more efficient
than traditional DOM manipulation</div>


        </div>

        </div>
        
    );
};

export default Blog;