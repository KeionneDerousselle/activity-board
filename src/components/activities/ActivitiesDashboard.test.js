import React from 'react';
import {shallow} from 'enzyme';
import ActivitiesDashboard from './ActivitiesDashboard';
import activities from '../../api/data/activities';

let wrapper;

beforeEach(()=>{
  wrapper = shallow(<ActivitiesDashboard activites={activities}/>);
});

test('ActivitiesDashboard shallow render', ()=> {
  expect(wrapper).toMatchSnapshot();
});

test('loads when activities are missing', ()=>{
  wrapper = shallow(<ActivitiesDashboard/>);
  expect(wrapper.props().isContentLoading).toBeTruthy();
});
