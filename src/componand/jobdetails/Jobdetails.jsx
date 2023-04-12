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

  <div className='flex flex-row items-end  mx-24  bg-himage  bg-opacity-75 z-0 '>
            <div className='basis-2/3 flex-col text-left text-2xl p-16  '>
              <h2> <b>Job Description: </b> { job.job_description}</h2>
              <h2><b>Job Responsibility:</b> { job.job_responsibility}</h2>
              <h2><b>Educational Requirments:</b>{ job.educational_requirements}</h2>
              <h2><b>Experiences:</b>{ job.experiences}</h2>
            
            </div>
            <div className='basis-1/3 flex-col box-content text-left h-96 w-96 p-4 border-2 bg-skyblue bg-opacity-50 '>
              <h2 className='text-2xl'><b>Job Details</b></h2>
             <hr className="my-1 h-0.5 border-t-1 bg-neutral-100 opacity-100 dark:opacity-50" />
              <h2><b>salary</b>{job.salary } </h2>
              <h2><b>Job Title</b>{job.job_title}</h2>
              
              <h2 ><b>contact_information</b></h2>
              <hr className="my-2 h-0.5 border-t-1 bg-neutral-100 opacity-100 dark:opacity-50" />
              <h2><b></b>{ job.contact_information.phone}</h2>
              <h2><b></b>{job.contact_information.email} </h2>
              <h2><b>Job Title</b>{job.address}</h2>

                  <button onClick={handleApply} disabled={applied}>
        {applied ? 'Applied' : 'Apply Now'}
      </button>
        
            
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
  
  //      <h1>{job.job_title}</h1>
  //     <p>{job.company_name}</p>
  //     <p>{job.location}</p>
  //     <p>{job.remote_or_onsite}</p>
  //     </div>
  // //   </div>