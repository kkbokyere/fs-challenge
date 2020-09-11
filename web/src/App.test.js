import React from 'react';

import { render, screen, fireEvent } from '../src/test/helper'
import App from './App';

describe('App Tests', () => {
    const setup = (componentProps = {}, renderProps = { }) => {
        return render(<App {...componentProps}/>, renderProps);
    };

    it('should render initial App', async () => {
        const { asFragment } = setup();

        const loginBtn = await screen.findByText('Log in');

        expect(asFragment()).toMatchSnapshot();
        expect(loginBtn).toBeInTheDocument();
    });


    it('should login user', async () => {
        const { asFragment } = setup();

        const loginBtn = await screen.findByText('Log in');

        expect(asFragment()).toMatchSnapshot();
        expect(loginBtn).toBeInTheDocument();
    });
});

