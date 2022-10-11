import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions = useLoaderData();
    // console.log(questions.data.questions)
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold text-orange-600'>Let's Begin the Quiz of {questions.data.name}</h1>
            <div className='mt-9 grid grid-cols-1 mx-5 md:mx-32 lg:mx-56 gap-6'>
                {
                questions.data.questions.map(ques => <Question
                    key={ques.id}
                    ques={ques}
                ></Question>)
            }
            </div>
        </div>
    );
};

export default Questions;