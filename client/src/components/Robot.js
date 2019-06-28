import React from 'react';

import css from '../styles/Robot.module.css';

export default function Robot(props) {
  return (
    <div className={css.container}>
      <img src={props.image} />
    </div>
  );
}
