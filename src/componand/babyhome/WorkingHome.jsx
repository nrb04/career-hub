import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from './JobCard';

const WorkingHome = () => {
    const jobcards = useLoaderData();
    console.log(jobcards);

    return (
        <div>
            
            {  
                jobcards.map(jobcard => <JobCard
                    key={jobcard.id}
                jobcard={jobcard}></JobCard>
                
            )
                

              } 

        </div>
    );
};

export default WorkingHome;