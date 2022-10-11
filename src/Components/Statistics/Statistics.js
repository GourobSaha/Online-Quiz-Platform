import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';


const Statistics = () => {
  const questions = useLoaderData();
//   console.log(questions)

  return (
    <div>
      <div className="w-full">
        <div className="w-full h-96 mb-8">
          <h1 className="text-center text-3xl font-bold text-sky-900 mb-9">Total Questions of Different Topics</h1>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={600} height={300} data={questions.data}>
                <XAxis dataKey="name" stroke="#075985" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total" fill="#ea580c" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;