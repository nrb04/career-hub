import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
      <h2>Applied Jobs</h2>
      <div>
        <label htmlFor="filter">Filter by Remote/Onsite:</label>
        <select id="filter" value={filterValue} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <h3><Link to={{ pathname: `/jobs/${job.id}`}}>{job.job_title}</Link></h3>
              <p>{job.company_name}</p>
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
