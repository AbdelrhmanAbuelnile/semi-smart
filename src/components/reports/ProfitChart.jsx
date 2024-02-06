import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


function ProfitChart() {
  const data = [
    {
      subject: 'Malfunction',
      A: 120,
      B: 110,
    },
    {
      subject: 'Profits',
      A: 98,
      B: 130,
    },
    {
      subject: 'Losses',
      A: 86,
      B: 130,
    },
    {
      subject: 'New Stores',
      A: 99,
      B: 100,
    },
    {
      subject: 'Stores Closed',
      A: 85,
      B: 90,
    },
    {
      subject: 'Production',
      A: 65,
      B: 85,
    },
  ];
  return (
    <div className="bg-secondary rounded-[20px] p-4 h-[435px] w-full text-center">
<ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} />
          <Radar name="2023" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="2024" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProfitChart