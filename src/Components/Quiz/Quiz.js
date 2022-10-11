import React from 'react';
import {ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl bg-slate-500" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl mb-3 text-sky-900">{name}</h2>
                <div className="card-actions flex items-center gap-6">
                    <h3 className='font-semibold text-sky-900'>Total Questions: {total}</h3>
                    <Link to={`/questions/${id}`}><button className="btn bg-orange-600 border-0">Start Quiz <ArrowRightCircleIcon className='w-6 h-6 ml-1'/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;