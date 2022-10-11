import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ques}) => {
    // console.log(ques)
    const {question, options, correctAnswer} = ques;
    // console.log(id)
    const notify = () =>{
        toast.info(`Answer: ${correctAnswer}`);
    }
    
    const newQuestion = question.replace(/(<([^>]+)>)/gi, "");
    
    return (
        <div className='shadow-lg p-6 rounded-lg w-full my-5 bg-sky-100'>
            <div className='flex'>
                <h2 className='text-xl font-semibold mr-auto text-start'>{newQuestion}</h2>
                <button onClick={notify} className='hover:text-orange-600 ml-auto'><EyeIcon className='w-6 h-6 ml-1'/></button>
                <ToastContainer />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 gap-4'>
                {
                options.map((option,index) => <Options
                    key={index}
                    option={option}
                    correctAnswer={correctAnswer}
                ></Options>)
                }
                
            </div>
        </div>
    );

};

export default Question;