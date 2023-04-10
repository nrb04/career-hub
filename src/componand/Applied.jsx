import React from 'react';

const Applied = () => {
  const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

  return (
    <div>
      <h2>Applied Jobs</h2>
      {appliedJobs.length > 0 ? (
        <ul>
          {appliedJobs.map((jobcard, index) => (
            <li key={index}>
              <h3>{jobcard.title}</h3>
              <p>{jobcard.company}</p>
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