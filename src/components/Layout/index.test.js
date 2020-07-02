import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from './index';

describe('Layout', () => {
  it('should render correctly', () => {
    const component = shallow(<Layout disabled className="center">Layout</Layout>);

    expect(component.prop('children')).toEqual('Layout');
    expect(component).toMatchSnapshot();
  });
});
