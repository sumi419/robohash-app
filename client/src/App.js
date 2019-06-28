import React from 'react';

import UserInput from './components/UserInput';

import css from './styles/app.module.css';

export default function App() {
  return (
    <>
      <div className={css.container}>
        <UserInput />
      </div>
    </>
  );
}
