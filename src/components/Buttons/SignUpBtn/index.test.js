import React from 'react';
import { shallow } from 'enzyme';
import { SignUpBtn } from './index';

describe('SignUpBtn', () => {
  it('should render correctly', () => {
    const onClick = jest.fn();
    const component = shallow(<SignUpBtn onClick={onClick} className="center">SignUp</SignUpBtn>);

    expect(component.prop('children')).toEqual('SignUp');
    expect(component).toMatchSnapshot();
  });
});
