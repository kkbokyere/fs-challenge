import React from 'react';
import { render, screen, fireEvent } from '../src/test/helper'
import App from './App';
import {GET_DEVICES, ADD_DEVICE} from "./queries/devices";
import {GET_USER_BY_USERNAME} from "./queries/users";
import devicesResponse from './test/__mocks__/devicesResponse'
import getByUsernameResponse from './test/__mocks__/getByUsernameResponse'
import plantsResponse from './test/__mocks__/plantsResponse'
import {GET_PLANTS} from "./queries/plants";
export const mocks = [
    {
        request: {
            query: GET_USER_BY_USERNAME,
            variables: {
                username: 'Tom Cruise',
            }
        },
        result: () => getByUsernameResponse,
    },
    {
        request: {
            query: GET_DEVICES
        },
        result: () => devicesResponse
    },
    {
        request: {
            query: GET_PLANTS
        },
        result: () => plantsResponse
    }
];

describe('App Tests', () => {
    const setup = (componentProps = {}, renderProps = { mocks }) => {
        return render(<App {...componentProps}/>, renderProps);
    };
    it('should render initial App', async () => {
        const { asFragment } = setup();

        const addDeviceButton = await screen.findByText('Add Device');
        const username = await screen.findByText('You\'re logged in as: Tom Cruise');

        expect(asFragment()).toMatchSnapshot();
        expect(addDeviceButton).toBeInTheDocument();
        expect(username).toBeInTheDocument();
    });

    it('should open new device form when click add device', async () => {
        const { getByTestId } = setup({}, { mocks });
        const addDeviceButton = await screen.findByText('Add Device');
        fireEvent.click(addDeviceButton);
        const deviceModal = await getByTestId('new-device-modal');
        expect(deviceModal).toBeVisible()
    });

    it('should add devices when form is filled', async () => {
        const { getByTestId, getByText } = setup();
        await new Promise(resolve => setTimeout(resolve, 0)); // wait for response

        //Open form
        const addDeviceButton = await screen.findByText('Add Device');
        fireEvent.click(addDeviceButton);

        // input device details
        const newDeviceForm = await getByTestId('new-device-form');
        const labelInput = await getByTestId('label-input');
        const typeSelect = await getByTestId('type-select');
        const plantSelect = await getByTestId('plant-select');
        const submitBtn = await getByTestId('submit-btn');
        labelInput.value = "My Label";
        console.log(labelInput)
        fireEvent.change(labelInput)
        fireEvent.submit(newDeviceForm)

    });
});

