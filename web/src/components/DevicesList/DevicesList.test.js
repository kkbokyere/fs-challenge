import React from 'react';
import { render } from '../../test/helper'
import DevicesList from './DevicesList';


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
        result: () => (getByUsernameResponse)
    },
    {
        request: {
            query: GET_DEVICES
        },
        result: () => (devicesResponse)
    },
    {
        request: {
            query: GET_PLANTS
        },
        result: () => (plantsResponse)
    }
];

describe('DevicesList Tests', () => {
    const setup = (componentProps = {}, renderProps = { mocks }) => {
        return render(<DevicesList {...componentProps}/>, renderProps);
    };
    it('should render initial loading DevicesList', async () => {
        const { asFragment, getByTestId } = setup();
        const loadingSpinner = await getByTestId('loading-spinner');
        expect(asFragment()).toMatchSnapshot();
        expect(loadingSpinner).toBeInTheDocument();
    });

    it('should render full DevicesList', async () => {
        const { getByTestId, getByText } = setup();
        await new Promise(resolve => setTimeout(resolve, 100)); // wait for response

        const devicesList = await getByTestId('devices-list');
        const deviceLabel = await getByText('My chilli plants');
        expect(deviceLabel).toBeInTheDocument();
        expect(devicesList).toBeInTheDocument();
        expect(devicesList.children.length).toBe(2);
    });

});

