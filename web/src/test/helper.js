import * as React from "react";
import {render as rtlRender } from '@testing-library/react'
import { MockedProvider } from "@apollo/client/testing";

function render(
    ui,
    {
        ...renderOptions
    } = {},
) {
    function Wrapper({children}) {
        return (
            <MockedProvider {...renderOptions}>
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