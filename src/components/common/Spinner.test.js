import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('<Spinner/>', ()=> {
  test('uses loading icon', ()=> {
    const spinner = shallow(<Spinner />);
  });
});


