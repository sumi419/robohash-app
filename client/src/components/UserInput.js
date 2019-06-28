import React, { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({ value: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setUserInput({ value: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={userInput.value} onChange={handleChange} />
      </form>
    </div>
  );
}
