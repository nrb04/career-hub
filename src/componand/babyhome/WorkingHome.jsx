import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';
import './workingHome.css'

const WorkingHome = () => {
  const jobcards = useLoaderData();

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
  
      <div className="container  mx-auto shadow-md lg:px-4 py-4 my-5">
       <div className='md:flex PlexContainer md:justify-center mx-auto '>{
        (showAll
          ? jobcards.map((jobcard) => (
                <JobCard key={jobcard.id} jobcard={jobcard} />
           
            ))
          : jobcards.slice(0, 4).map((jobcard) => (
                <JobCard key={jobcard.id} jobcard={jobcard} />
             
          )))}</div>
      <div>{!showAll && jobcards.length > 4 && (
        <button className='mt-7 px-4 py-3 bg-batam rounded-md outline-none focus:ring-4  mx-5 ' onClick={handleShowAll}>Show All</button>
      )}</div>
      </div>
   
  );
};

export default WorkingHome;

//Array.isArray(jobcards) &&
