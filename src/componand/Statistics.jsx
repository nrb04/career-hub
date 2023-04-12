import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const Statistics = () => {

const data = [
  {
    subject: 'A1',
    A: 57,
    
    fullMark: 60,
  },
  {
    subject: 'A2',
    A: 58,
   
    fullMark: 60,
  },
  {
    subject: 'A3',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'A4',
    A: 52,
    fullMark: 60,
  },
  {
    subject: 'A5',
    A: 51,
    fullMark: 60,
  },
  {
    subject: 'A6',
    A: 57,
 
    fullMark: 60,
  },
{
    subject: 'A7',
  A: 59,
  
 
    fullMark: 60,
  },
];

  return (
  <div>
       <div className="relative z-0" >
           
                <div className='flex flex-row relative items-center  bg-himage bg-opacity-25 pt-8 -mt-8'>
                <div className='basis-1/4'><img src='/assets/Images/Vector.png' alt="" className='absolute bottom-0 ' /></div>
                <div className='basis-2/4'><p className="text-2xl p-28">All Assignment details</p></div>
                <div className='basis-1/4'><img src="/assets/Images/Vector-1.png" alt="" className='absolute top-0 ' /> </div>
            </div>
        </div>
      <RadarChart className="mx-auto"
      
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      </RadarChart>
      
      </div>
    );
};

export default Statistics;







