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
    );
};

export default Statistics;







