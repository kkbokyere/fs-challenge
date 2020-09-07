import React from 'react';
import { render } from '@tests/helper'

import Layout from '@components/Layout';
describe('Layout Tests', () => {

  const setup = (props) => {
    return render(<Layout {...props}/>);
  };
  it('should render Layout', async () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});
