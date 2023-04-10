import React from 'react';
import JobDetails from '../jobdetails/Jobdetails';
import { Link } from 'react-router-dom';



const JobCard = ({jobcard}) => {
    const { id, job_title, company_name, location, remote_or_onsite } = jobcard;
    return (
        <div
  className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
>
  <a className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
    <div className="mt-16">
      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
        {company_name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
            </p>
            
             <h2>{job_title}</h2>
            <h3>{company_name}</h3>
            <p>{location}</p>
            <p>{remote_or_onsite}</p>
            <Link key={id} to={`/jobs/${id}`}>View details</Link>
    </div>
  </a>
</div>

    );
};

export default JobCard;