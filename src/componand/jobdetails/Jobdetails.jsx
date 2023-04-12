import React, { useState,useEffect } from 'react';
import { useParams} from 'react-router-dom';


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
    const jobInfo = { id: job.id, title: job.job_title, company: job.company_name };
    appliedJobs.push(jobInfo);
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    setApplied(true);
  };

  return (
    <div>
       <div className="relative z-0" >
           
                <div className='flex flex-row relative items-center  bg-himage bg-opacity-25 pt-8 -mt-8'>
                <div className='basis-1/4'><img src='/assets/Images/Vector.png' alt="" className='absolute bottom-0 ' /></div>
                <div className='basis-2/4'><p className="text-2xl p-28">Job Details</p></div>
                <div className='basis-1/4'><img src="/assets/Images/Vector-1.png" alt="" className='absolute top-0 ' /> </div>
        </div>
           
        <div> 

  <div className='flex flex-row   mx-24  bg-himage  bg-opacity-75 '>
            <div className='basis-2/3 flex-col text-left text-2xl  '>
              <h2> <b>Job Description: </b></h2>
              <h2><b>Job Responsibility:</b> </h2>
              <h2><b>Educational Requirments:</b></h2>
              <h2><b>Experiences:</b></h2>
            
            </div>
            <div className='basis-1/3 flex-col box-content h-96 w-96 p-4 border-2 '>
            
            
            </div>
            </div>



        </div>











        












      </div>
         

  </div>
  );
};

export default Jobdetails;

  // <div>
    
  // <div>
  //       <h1>{job.id}</h1>
  //     <h2>{job.company}</h2>
  //     <p>{job.description}</p>
  //     <button onClick={handleApply} disabled={applied}>
  //       {applied ? 'Applied' : 'Apply Now'}
  //     </button>
  //      <h1>{job.job_title}</h1>
  //     <p>{job.company_name}</p>
  //     <p>{job.location}</p>
  //     <p>{job.remote_or_onsite}</p>
  //     </div>
  // //   </div>