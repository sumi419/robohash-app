import React from 'react';

import Robots from './components/Robots';

import css from './styles/app.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Robots</h1>
      <Robots />
    </div>
  );
}
