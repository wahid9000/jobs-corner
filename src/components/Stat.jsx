import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const assignmentMarksArray = [
    { id: 1, name: 'Assignment-1', marks: 56 },
    { id: 2, name: 'Assignment-2', marks: 60 },
    { id: 3, name: 'Assignment-3', marks: 60 },
    { id: 4, name: 'Assignment-4', marks: 35 },
    { id: 5, name: 'Assignment-5', marks: 59 },
    { id: 6, name: 'Assignment-6', marks: 50 },
    { id: 7, name: 'Assignment-7', marks: 60 },
    { id: 8, name: 'Assignment-8', marks: 60 }
  ]


const Stat = () => {
    return (
        <div>
            <div className='py-12 bg-gray-100'>
               <h2 className='font-bold text-2xl'>Assignment Marks shown below through an Area Chart:</h2> 
            </div>

            <div className='py-10'>
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