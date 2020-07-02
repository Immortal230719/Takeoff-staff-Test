import React from 'react';
import { shallow } from 'enzyme';
import { SubmitBtn } from './index';

describe('SubmitBtn', () => {
  const component = shallow(<SubmitBtn>Submit</SubmitBtn>);
  it('should render correctly', () => {

    expect(component.prop('children')).toEqual('Submit');
    expect(component).toMatchSnapshot();
  });
});
