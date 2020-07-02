import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import { CustomBackdrop } from './index';

describe('Backdrop', () => {
  it('should render correctly', () => {
    const component = shallow(<CustomBackdrop show />);

    expect(component).toMatchSnapshot();
  });

  it("shouldn't render", () => {
    const component = shallow(<CustomBackdrop show={false} />);

    expect(component).toMatchSnapshot();
  });
});
