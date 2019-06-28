import React, { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({ value: '', image: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput({ image: `https://robohash.org/${userInput}.png` });
  };

  const handleChange = (event) => {
    setUserInput({ ...userInput, value: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={userInput.value} onChange={handleChange} />
      </form>
      <img src={userInput.image} />
    </div>
  );
}
