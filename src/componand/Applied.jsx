import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Applied = () => {
  const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredJobs = data.filter(job => appliedJobs.some(appliedJob => appliedJob.id === job.id));
        setJobs(filteredJobs);
      });
  }, [appliedJobs]);



  if (!jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Applied Jobs</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job, index) => (
              <li key={index}>
                  <h3>{job.job_title}</h3>
                <p>{job.company_name}</p>
             <Link to={{ pathname: `/jobs/${job.id}`}}><button className='mt-2 px-4 py-1 bg-batam rounded-md outline-none focus:ring-4 shadow-lg  '>View details</button></Link> 
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs applied yet.</p>
      )}
    </div>
  );
};

export default Applied;
