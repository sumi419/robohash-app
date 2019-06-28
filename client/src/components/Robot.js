import React from 'react';

export default function Robot({ image }) {
  return image && <img src={image} alt='robot' />;
}
