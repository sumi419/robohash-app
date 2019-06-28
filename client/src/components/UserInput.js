import React, { useState } from 'react';

import Robot from './Robot';

import css from '../styles/UserInput.module.css';

export default function UserInput() {
  const [userInput, setUserInput] = useState({ value: '', image: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput({ image: `https://robohash.org/${userInput}.png` });
  };

  const handleChange = (event) => {
    setUserInput({ value: event.target.value });
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
        <form onSubmit={handleSubmit}>
          <input type='text' value={userInput.value} onChange={handleChange} />
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Robot userInput={userInput} />
    </div>
  );
}
