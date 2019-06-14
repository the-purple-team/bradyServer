import React from 'react';
import { shallow } from 'enzyme';
import Productview from './productview.jsx'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Productview />);
  // wrapper.set
});

describe('Product view', () => {
  it('should contain photos', () => {
    expect(wrapper.find("#all-image-container")).toBeTruthy();
  })
})