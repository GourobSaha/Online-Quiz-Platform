import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Options = ({option, correctAnswer}) => {
    const radioChangeHandler = ({option}) => {
        if(option === correctAnswer){
            toast.success('Yay! Correct Answer.', {position:'top-center', theme:'colored'})
        }
        else{
            toast.error('Oops! Wrong Answer.', {position:'top-center', theme:'colored'})
        }
    };

    return (
         <div>
            <label className="flex text-start bg-white shadow-md p-2 rounded-lg">
                <input
                onClick={() => radioChangeHandler({option})}
                type="radio"
                className="form-radio"
                name="accountType"
                value={option}
                />
                <span className="ml-2">{option}</span>
            </label>
             <ToastContainer />
         </div>
    );
};

export default Options;