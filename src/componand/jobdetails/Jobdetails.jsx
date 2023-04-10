import React, { useState,useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';


const Jobdetails = () => {
  const [applied, setApplied] = useState(false);
  const { id } = useParams();
  const [jobs, setJobs] = useState(null);
  
  useEffect(() => {
    fetch(`/data.json`)
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, [id])
 
     if (!jobs) {
    return <div>Loading...</div>;
  }

  const job = jobs.find((job) => job.id === id);


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
       <h1>{job.job_title}</h1>
      <p>{job.company_name}</p>
      <p>{job.location}</p>
      <p>{job.remote_or_onsite}</p>
    </div>
  );
};

export default Jobdetails;