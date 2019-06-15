import React from 'react';
import { shallow } from 'enzyme';
import Productview from './productview.jsx'
import ReactImageMagnify from 'react-image-magnify';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Productview />);
  // wrapper.set
});

describe('Product view', () => {
  it('should contain photos', () => {
    expect(wrapper.find(img)).toBeTruthy();
  })

  it('should zoom in on photos', () => {
    expect(wrapper.find(ReactImageMagnify)).toBeTruthy();
  })
})