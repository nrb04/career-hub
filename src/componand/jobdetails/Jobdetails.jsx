import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Jobdetails = ({jobcard}) => {
  const [applied, setApplied] = useState(false);
 const jobId = useParams().id;
 const job = jobs.find(job => job.id === jobId);

  const handleApply = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    const jobInfo = { id: job.id, title: job.title, company: job.company };
    appliedJobs.push(jobInfo);
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    setApplied(true);
  };

  return (
    <div>
      <h1>{job.id}</h1>
      <h2>{job.company}</h2>
      <p>{job.description}</p>
      <button onClick={handleApply} disabled={applied}>
        {applied ? 'Applied' : 'Apply Now'}
      </button>
    </div>
  );
};

export default Jobdetails;
