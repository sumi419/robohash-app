import React, { useState } from 'react';

import Robot from './Robot';

import css from '../styles/robots.module.css';

export default function Robots() {
  const [userInput, set] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setImage(`https://robohash.org/${userInput}.png`);
    set('');
  };

  const handleChange = e => set(e.target.value);

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            type='text'
            placeholder='Search for Robot 🤖'
            value={userInput}
            onChange={handleChange}
          />
        </div>
        <button className={css.button} type='submit'>
          Search
        </button>
      </form>
      <Robot image={image} />
    </div>
  );
}
