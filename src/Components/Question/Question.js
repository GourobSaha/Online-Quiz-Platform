import React from 'react';
import {ArrowRightCircleIcon, EyeIcon } from '@heroicons/react/24/solid'
import Options from '../Options/Options';

const Question = ({ques}) => {
    // console.log(ques)
    const {question, options, id, correctAnswer} = ques;
    

    
    return (
        <div className='shadow-lg p-6 rounded-lg'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>{question}</h2>
                <button className='hover:text-orange-600'><EyeIcon className='w-6 h-6 ml-1'/></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {
                options.map(option => <Options
                    key={id}
                    option={option}
                ></Options>)
                }
            </div>
        </div>
    );

};

export default Question;