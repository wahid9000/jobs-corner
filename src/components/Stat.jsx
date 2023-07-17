import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const assignmentMarksArray = [
    { id: 1, name: 'Work-1', marks: 56 },
    { id: 2, name: 'Work-1', marks: 60 },
    { id: 3, name: 'Work-3', marks: 60 },
    { id: 4, name: 'Work-4', marks: 35 },
    { id: 5, name: 'Work-5', marks: 59 },
    { id: 6, name: 'Work-6', marks: 50 },
    { id: 7, name: 'Work-7', marks: 60 },
    { id: 8, name: 'Work-8', marks: 60 }
  ]


const Stat = () => {
    return (
        <div className='w-full'>
            <div className='py-12 bg-gray-100'>
               <h2 className='font-bold text-2xl'> Area Chart is drawn using Recharts</h2> 
            </div>

            <div className='py-10 w-full'>
                <AreaChart
                    width={1000}
                    height={300}
                    data={assignmentMarksArray}

                >
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Area dataKey="marks" stroke="#8884d8"></Area>
                </AreaChart>
            </div>
            
        </div>
    );
};

export default Stat;