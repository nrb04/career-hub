import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {CurrencyBangladeshiIcon, MapPinIcon} from '@heroicons/react/24/outline'

const Applied = () => {
  const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
  const [jobs, setJobs] = useState(null);
  const [filterValue, setFilterValue] = useState('all');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredJobs = data.filter(job => {
          if (filterValue === 'all') {
            return appliedJobs.some(appliedJob => appliedJob.id === job.id);
          } else {
            return job.remote_or_onsite === filterValue && appliedJobs.some(appliedJob => appliedJob.id === job.id);
          }
        });
        setJobs(filteredJobs);
      });
  }, [appliedJobs, filterValue]);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  }

  if (!jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <div className="relative z-0" >
           
                <div className='flex flex-row relative items-center  bg-himage bg-opacity-25 pt-8 -mt-8'>
                <div className='basis-1/4'><img src='/assets/Images/Vector.png' alt="" className='absolute bottom-0 ' /></div>
                <div className='basis-2/4'><p className="text-2xl p-28">The quick brown fox ...</p></div>
                <div className='basis-1/4'><img src="/assets/Images/Vector-1.png" alt="" className='absolute top-0 ' /> </div>
            </div>
        </div>
      
      <div>
      <div className='mt-12 '>
        <label className='text-2xl font-bold' htmlFor="filter">Filter by Remote/Onsite:</label>
        <select id="filter" value={filterValue} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job, index) => (
            <div class="max-w-4xl px-10 mx-auto my-4 py-6 bg-white rounded-lg shadow-md">
              <div key={index} class="flex justify-between items-center">
                <img className='object-fill rounded-b-lg h-14 w-36  mb-2' src={job.company_logo} alt="" />
                <div >
                  <h2 className='items-left font-normal '>{job.job_title}</h2>
                     <h3 className='font-semibold  '>{job.company_name}</h3>
            <span><button className='border-2 border-batam rounded-lg px-3 py-1 my-2 text-batam'>{job.remote_or_onsite}</button> <button className='border-2 border-batam rounded-lg px-3 py-1 text-batam'>{job.fulltime_or_parttime}</button></span>
             <h3 className='flex items-left mb-1 space-x-2'>
<MapPinIcon className='h-4 w-4' />{job.location}<CurrencyBangladeshiIcon className='h-4 w-4' />Salary: {job.salary}
</h3>
          </div>
              <button className='mt-2 px-4 py-1 bg-batam rounded-md outline-none focus:ring-4 shadow-lg '><Link to={{ pathname: `/jobs/${job.id}`}}> View details</Link></button>

      </div>

   
    </div>
            
          ))}
        </ul>
      ) : (
        <p>No jobs applied yet.</p>
        )}
       </div>
    </div>
  );
};

export default Applied;
