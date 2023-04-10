import React from 'react';
import JobDetails from '../jobdetails/Jobdetails';
import { Link } from 'react-router-dom';



const JobCard = ({jobcard,}) => {
    const { id,company_logo, job_title,fulltime_or_parttime, company_name, location, remote_or_onsite,salary } = jobcard;
    return (
      <div className="shadow-2xl lg:px-4 py-4 my-5">
        <div className='' >
          
          <div className="">


           
              <img className='object-cover h-11 w-30' src={company_logo} alt="" />
            <h2>{job_title}</h2>
             <h3>{company_name}</h3>
            <span><button className='border-2 border-batam rounded-lg px-3 py-1 text-batam'>{remote_or_onsite}</button> <button className='border-2 border-batam rounded-lg px-3 py-1 text-batam'>{fulltime_or_parttime}</button></span>
             <span><h3>{location} {salary}</h3></span>
            
            <Link key={id} to={{ pathname: `/jobs/${id}`
          }}><button className='mt-2 px-4 py-1 bg-batam rounded-md outline-none focus:ring-4 shadow-lg  '>View details</button></Link> 
           </div>
  </div>
        
        
    </div>
  
    );
};

export default JobCard;


