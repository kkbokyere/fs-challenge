import * as React from "react";
import { createMemoryHistory } from 'history'

import {render as rtlRender } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";
import {GET_USER_BY_USERNAME, LOGIN_USER} from "../queries/users";
import getByUsernameResponse from "./__mocks__/getByUsernameResponse";
import {ADD_DEVICE, GET_DEVICES} from "../queries/devices";
import devicesResponse from "./__mocks__/devicesResponse";
import {GET_PLANTS} from "../queries/plants";
import plantsResponse from "./__mocks__/plantsResponse";
import loginUserResponse from "./__mocks__/loginUserResponse";

export const mocks = [
    {
        request: {
            query: ADD_DEVICE,
            variables: {
                label: 'My test Label',
                type: 'SENSOR',
                plantId: '1',
            }
        },
        newData: jest.fn(() => ({
            data: {
                addDevice: {
                    "id": "32322",
                    "plantId": "1",
                    "type": "SENSOR",
                    "label": "My test Label",
                    "plant": {
                        "name": "Chilli",
                        "id": "1"
                    }
                },
            },
        }))
    },
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
    },
    {
        request: {
            query: LOGIN_USER,
            variables: {
                username: 'Tom Cruise',
                password: 'thisappwillselfdistruct',
            }
        },
        result: () => loginUserResponse
    }
];

function render(
    ui,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
        ...renderOptions
    } = {},
) {
    function Wrapper({children}) {
        return (
            <MockedProvider {...renderOptions} mocks={mocks}>
                {children}
            </MockedProvider>
        )
    }
    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}
// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
