import React, { useState } from 'react';

import Robot from './Robot';

import css from '../styles/UserInput.module.css';

export default function UserInput() {
  const [userInput, setUserInput] = useState('');

  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setImage(`https://robohash.org/${userInput}.png`);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
        <form onSubmit={handleSubmit}>
          <input type='text' value={userInput} onChange={handleChange} />
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Robot image={image} />
    </div>
  );
}
