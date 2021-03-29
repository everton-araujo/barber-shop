import React from 'react';

import FullStar from '../assets/star.svg';
import HalfStar from '../assets/star_half.svg';
import EmptyStar from '../assets/star_empty.svg';

import { StarArea, StarView, StarText } from './Starts.style';

export default ({ stars, showNumber }) => {
  let starValue = [0, 0, 0, 0, 0];

  let floor = Math.floor(stars);
  let left = stars - floor;

  for (var i = 0; i < floor; i++) {
    starValue[i] = 2;
  }

  if (left > 0) {
    starValue[i] = 1;
  }

  return (
    <StarArea>
      {starValue.map((index, key) => (
        <StarView key={key}>
          {index === 0 && <EmptyStar width="18" height="18" fill="#FF9200" />} 
          {index === 1 && <HalfStar width="18" height="18" fill="#FF9200" />} 
          {index === 2 && <FullStar width="18" height="18" fill="#FF9200" />} 
        </StarView>
      ))}
      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
}
