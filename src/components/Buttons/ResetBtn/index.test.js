import React from 'react';
import { shallow } from 'enzyme';
import { ResetBtn } from './index';

describe('ResetBtn', () => {
  it('should render correctly', () => {
    const component = shallow(<ResetBtn disabled className="center">Reset</ResetBtn>);

    expect(component.prop('disabled')).toEqual(true);
    expect(component.prop('className')).toEqual('center');
    expect(component.prop('children')).toEqual('Reset');
    expect(component).toMatchSnapshot();
  });
});
