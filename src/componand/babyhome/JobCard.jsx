import React from 'react';
import JobDetails from '../jobdetails/Jobdetails';
import { Link } from 'react-router-dom';
import {CurrencyBangladeshiIcon, MapPinIcon} from '@heroicons/react/24/outline'



const JobCard = ({jobcard,}) => {
    const { id,company_logo, job_title,fulltime_or_parttime, company_name, location, remote_or_onsite,salary } = jobcard;
    return (
      <div className="shadow-2xl lg:px-4 py-4 my-5">
        <div className='' >
          
          <div className="">


           
              <img className='object-fill rounded-b-lg h-14 w-36  mb-2' src={company_logo} alt="" />
            <h2 className='font-normal '>{job_title}</h2>
             <h3 className='font-semibold  '>{company_name}</h3>
            <span><button className='border-2 border-batam rounded-lg px-3 py-1 my-2 text-batam'>{remote_or_onsite}</button> <button className='border-2 border-batam rounded-lg px-3 py-1 text-batam'>{fulltime_or_parttime}</button></span>
             <h3 className='flex items-center mb-1 space-x-2'>
<MapPinIcon className='h-4 w-4' />{location}<CurrencyBangladeshiIcon className='h-4 w-4' />Salary: {salary}
</h3>
            
            <Link key={id} to={{ pathname: `/jobs/${id}`}}><button className='mt-2 px-4 py-1 bg-batam rounded-md outline-none focus:ring-4 shadow-lg  '>View details</button></Link> 
           </div>
  </div>
        
        
    </div>
  
    );
};

export default JobCard;


