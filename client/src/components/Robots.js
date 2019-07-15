import React, { useState } from 'react';
// import axios from 'axios';

import Robot from './Robot';
import { svg } from '../services/svgURL';

import css from '../styles/robots.module.css';

export default function Robots() {
  const [name, setName] = useState('');
  const [userInput, set] = useState('');
  const [image, setImage] = useState('');
  const [button, setButton] = useState('Generate');

  const handleSubmit = e => {
    e.preventDefault();
    setImage(svg);
    setButton('Generating...');
    // axios.get(`https://robohash.org/${userInput}.png`).then(() =>
    // convert to a buffer/blob that can be converted to the image
    setTimeout(() => {
      setImage(`https://robohash.org/${userInput}.png`);
      setName(userInput);
      setButton('Generate');
    }, 1000);
    // );
    set('');
  };

  const handleChange = e => {
    set(e.target.value);
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.input}
            type='text'
            placeholder='Type in your name 🤖...'
            value={userInput}
            onChange={handleChange}
            required
          />
        </div>
        <button className={css.button} type='submit'>
          {button}
        </button>
      </form>
      <h1>{name}</h1>
      <Robot image={image} />
    </div>
  );
}
