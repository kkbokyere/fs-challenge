import * as React from "react";
import {render as rtlRender } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";
import {GET_DEVICES, ADD_DEVICE} from "../queries/devices";

export const mocks = [
    {
        request: {
            query: GET_DEVICES,
        },
        result: () => {

        },
    },
    {
        request: {
            query: ADD_DEVICE,
            variables:{},
        },
        newData: jest.fn(() => ({ data: {} })),
    },
];

function render(
    ui,
    {
        ...renderOptions
    } = {},
) {
    function Wrapper({children}) {
        return (
            <MockedProvider mocks={mocks}>
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
