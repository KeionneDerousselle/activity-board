import Activity from './Activity';
import React from 'react';
import { shallow } from 'enzyme';

let wrapper;
const title = 'foo title';
const description = 'foo description';
const rating = 3.5;
const tags = ['foo-tag-1', 'foo-tag-2', 'foo-tag-3', 'foo-tag-4']
const price = 100;

beforeEach(()=>{
  wrapper = shallow(<Activity 
    title={title}
    description={description}
    rating={rating}
    tags={tags}
    price={price}
  />);
});

test('Activity Snapshot', ()=>{
  expect(wrapper).toMatchSnapshot();
});
