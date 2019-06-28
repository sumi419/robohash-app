import React, { useState } from 'react';

import Robot from './Robot';

import css from '../styles/userInput.module.css';

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
        <input className={css.input} type='text' value={userInput} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      <Robot image={image} />
    </div>
  );
}
