import React from 'react';
import { render, fireEvent } from '../../test/helper'
import NewDeviceForm from './NewDeviceForm';


import {GET_DEVICES} from "../../queries/devices";
import {GET_USER_BY_USERNAME} from "../../queries/users";
import devicesResponse from '../../test/__mocks__/devicesResponse'
import getByUsernameResponse from '../../test/__mocks__/getByUsernameResponse'
import plantsResponse from '../../test/__mocks__/plantsResponse'
import {GET_PLANTS} from "../../queries/plants";
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

describe('DevicesList Tests', () => {
    const setup = (componentProps = {}, renderProps = { mocks }) => {
        return render(<NewDeviceForm {...componentProps}/>, renderProps);
    };
    it('should render initial loading NewDeviceForm', async () => {
        const { asFragment } = setup();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render full NewDeviceForm', async () => {
        const { getByTestId, getByText } = setup();
        await new Promise(resolve => setTimeout(resolve, 0)); // wait for response
        const newDeviceForm = await getByTestId('new-device-form');
        const labelInput = await getByTestId('label-input');
        const typeSelect = await getByTestId('type-select');
        const plantSelect = await getByTestId('plant-select');
        const submitBtn = await getByTestId('submit-btn');
        expect(plantSelect.children.length).toBe(2);
        expect(typeSelect.children.length).toBe(2)

    });

});

