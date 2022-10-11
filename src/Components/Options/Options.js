import React, { useState } from 'react';

const Options = ({option}) => {
    // console.log(option)
const [answer, setAnswer] = useState('');
const radioChangeHandler = (e) => {
    setAnswer(e.target.value);
  };
    return (
         <div>
            <label className="flex">
                <input
                type="radio"
                className="form-radio"
                name="accountType"
                value={option}
                />
                <span class="ml-2">{option}</span>
            </label>
         </div>
    );
};

export default Options;