import React from 'react';
import { mount } from 'enzyme';
import { BackBtn } from './index';

describe('BackBtn', () => {
  it('should render correctly', () => {
    const component = mount(<BackBtn className="center">Back</BackBtn>);

    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
