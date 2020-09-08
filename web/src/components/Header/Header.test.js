import React from 'react';
import { render, waitForElement } from '../../test/helper'
import Header from './Header';
import {GET_USER_BY_USERNAME} from "../../queries/users";
import getByUsernameResponse from '../../test/__mocks__/getByUsernameResponse'
export const mocks = [
    {
        request: {
            query: GET_USER_BY_USERNAME,
            variables: {
                username: 'Tom Cruise',
            }
        },
        result: () => getByUsernameResponse,
    }
];

describe('Header Tests', () => {
    const setup = (componentProps = {}, renderProps = { mocks }) => {
        return render(<Header {...componentProps}/>, renderProps);
    };
    it('should render initial loading Header', async () => {
        const { asFragment, getByTestId } = setup();

        const loadingSpinner = await waitForElement(() => getByTestId('loading-spinner'));
        expect(asFragment()).toMatchSnapshot();
        expect(loadingSpinner).toBeInTheDocument();
    });

    it('should render full Header', async () => {
        const { getByText } = setup();
        await new Promise(resolve => setTimeout(resolve, 0)); // wait for response

        const deviceLabel = await getByText('You\'re logged in as: Tom Cruise');
        expect(deviceLabel).toBeInTheDocument();
    });

});

