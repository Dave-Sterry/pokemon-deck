import React from 'react';
import { animated, interpolate } from 'react-spring';

const Cards = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, age, distance, bio } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: `translate(${x}px ,${y}px,0)`
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
          <div className='card'>
          <h2>{name},</h2>
          <h2>{age}</h2>
          <h5>{distance}</h5>
          <h5>{bio}</h5>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Cards;