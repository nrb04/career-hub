import React from 'react';

const LazyHome = () => {
    return (
        <div>
            <div className="header1">
                <section className="bg-halkakala ">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Start Career or
				<span className="text-purple"> JOB  </span>from today
			</h1>
			<p className="mt-6 mb-8 text-lg  sm:mb-12"> employment opportunities and help employers find suitable candidates to fill their job openings. 
				<br className="hidden bg-batam md:inline lg:hidden"/>Employers can also create an account, post job listings, and search for qualified candidates using various search
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg  font-semibold rounded border border-purple ">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-purple">Malesuada</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/assets/Images/big.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/>
		</div>
	</div>
</section>
            </div>
            <div className="container">
                
                <div className='font-sans text-center text-5xl font-semibold mt-20'>Job Category List</div>
                <div className='font-sans text-center text-base font-normal'>Explore thousands of job opportunities with all the information you need. Its your future</div>

                <div><div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="grid gap-10 mx-auto sm:grid-cols-2  lg:grid-cols-4 lg:max-w-screen-lg">
    <div className='box-border bg-hobina shadow-lg px-5 py-5'>
      <img className="object-cover w-26 h-24 rounded shadow" src="/public/assets/Icons/accounts1.png" alt="Person" />
      <div className="flex flex-col  mt-2">
        <p className="text-lg text-left font-bold">Account & Finance</p>
        <p className="mb-4 text-sm text-left text-gray-800">300+  Jobs Available</p>
        
                            </div>
                            
                            
                        </div>
                        <div className='box-border bg-hobina shadow-lg px-5 py-5'>
      <img className="object-cover w-26 h-24 rounded shadow" src="/public/assets/Icons/business1.png" alt="Person" />
      <div className="flex flex-col  mt-2">
        <p className="text-lg text-left font-bold">Creative Design</p>
        <p className="mb-4 text-sm text-left text-gray-800">100+ Jobs Available </p>
        
                            </div>
                            
                            
                        </div><div className='box-border bg-hobina shadow-lg px-5 py-5'>
      <img className="object-cover w-26 h-24 rounded shadow" src="/assets/Icons/accounts1.png" alt="Person" />
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg font-bold">Marketing & Sales</p>
        <p className="mb-4 text-xs text-gray-800">150+ Jobs Available</p>
        
                            </div>
                            
                            
                        </div><div className='box-border bg-hobina shadow-lg px-5 py-5'>
      <img className="object-cover w-26 h-24 rounded shadow" src="/assets/Icons/accounts1.png" alt="Person" />
      <div className="flex flex-col justify-center mt-2">
        <p className="text-lg font-bold">Engineering Job</p>
        <p className="mb-4 text-xs text-gray-800">224+ Jobs Available</p>
        
                            </div>
                            
                            
                        </div>
                        
   
 
 
                         </div>
                </div>
                </div>
            </div>
           <div className="container">
                
                <div className='font-sans text-center text-5xl font-semibold mt-20'>Featured Jobs</div>
                <div className='font-sans text-center text-base font-normal'>Explore thousands of job opportunities with all the information you need. Its your future</div>
                </div>

        </div>
    );
};

export default LazyHome;