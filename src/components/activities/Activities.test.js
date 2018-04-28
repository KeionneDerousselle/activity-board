import {shallow} from 'enzyme';
import React from 'react';
import Activities from './Activities';
import testActivites from '../../api/data/activities';
import Activity from './Activity';

let wrapper;

beforeEach(()=>{
  wrapper = shallow(<Activities activities={testActivites}/>);
});

test('Activites Snapshot', ()=> {
  wrapper = shallow(<Activities activities={testActivites}/>);
  expect(wrapper).toMatchSnapshot();
});

test('maps activities to Activity components', ()=>{
  expect(wrapper.find(Activity)).toHaveLength(testActivites.length);
});
