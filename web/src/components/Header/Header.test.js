import React from 'react';
import { render, waitForElement, fireEvent } from '../../test/helper'
import Header from './Header';

describe('Header Tests', () => {
    const setup = (componentProps = {}, renderProps) => {
        return render(<Header {...componentProps}/>, renderProps);
    };
    it('should render initial loading Header', async () => {
        const { asFragment, getByTestId } = setup({ user: { username: 'Tom Cruise'}});

        const loadingSpinner = await waitForElement(() => getByTestId('loading-spinner'));
        expect(asFragment()).toMatchSnapshot();
        expect(loadingSpinner).toBeInTheDocument();
    });

    it('should render full Header', async () => {
        const { getByText } = setup({ user: { username: 'Tom Cruise'}});
        await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
        
        const deviceLabel = await getByText('You\'re logged in as: Tom Cruise');
        const logoutBtn = await getByText('Logout');
        expect(logoutBtn).toBeInTheDocument();
        expect(deviceLabel).toBeInTheDocument();
    });


    it('should logout user', async () => {
        const logoutSpy = jest.fn();
        const { getByText } = setup({
            user: { username: 'Tom Cruise'},
            handleLogout: logoutSpy
        });
        await new Promise(resolve => setTimeout(resolve, 0)); // wait for response

        const logoutBtn = await getByText('Logout');
        fireEvent.click(logoutBtn);
        expect(logoutSpy).toHaveBeenCalled()
    });

});

