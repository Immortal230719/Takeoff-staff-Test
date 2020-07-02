import React from 'react';
import { mount } from 'enzyme';
import { LoginBtn } from './index';

describe('LoginBtn', () => {
  it('should render correctly', () => {
    const component = mount(<LoginBtn className="center">Login</LoginBtn>);

    expect(component.prop('children')).toEqual('Login');
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
