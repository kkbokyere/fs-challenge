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

        const userInput = await screen.findByTestId('login-username');
        const passwordInput = await screen.findByTestId('login-password');
        const loginForm = await screen.findByTestId('login-form');

        fireEvent.change(userInput, { target: { value: "Tom Cruise"}});
        fireEvent.change(passwordInput, { target: { value: "thisappwillselfdistruct" }});
        fireEvent.submit(loginForm);
        await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
        const userLabel = await screen.findByText('You\'re logged in as: Tom Cruise');

        expect(asFragment()).toMatchSnapshot();
        expect(userLabel).toBeInTheDocument();
    });
});

