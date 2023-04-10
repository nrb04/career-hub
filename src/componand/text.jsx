import React, { useState } from 'react';
import {Link, useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';


const WorkingHome = () => {
    const jobcards = useLoaderData();
    console.log(jobcards);

    const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

    return (
      
        <div className="data-box-container">
      {showAll
                ? jobcards.map((jobcard) =>
                    <Link key={jobcard.id} to={`/jobs/${jobcard.id}`}>
                    <JobCard jobcard={jobcard} />
             </Link>)
                : jobcards.slice(0, 4).map((jobcard) =>
                    <Link key={jobcard.id} to={`/jobs/${jobcard.id}`}>
                  <JobCard jobcard={jobcard} />
   </Link>)}
      {!showAll && jobcards.length > 4 && (
        <button onClick={handleShowAll}>Show All</button>
      )}
    </div>
        
    );
};

export default WorkingHome;