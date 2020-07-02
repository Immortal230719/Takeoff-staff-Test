import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './index';

describe('Main', () => {
  const component = shallow(<Main disabled className="center">Layout</Main>);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
