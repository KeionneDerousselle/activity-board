import {createMediaQueryStyles} from './media';

const createMediaQuery = (breakpoint, properties, queryon = 'min-width')=> {
  const mediaQuery = {
    [`@media (${queryon}: ${breakpoint})`]: properties
  };
  return mediaQuery;
};

describe('createMediaQueryStyles', ()=>{
  it('should return a media query correctly', ()=>{
    const queryValues = {
      lg: 12
    };

    createMediaQueryStyles(queryValues, ['foo-parameter']);
  });
});
