import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

type Props = {
    isAuthenticated?: boolean
    children: React.ReactElement
    path?: string
}

function PrivateRoute({ children, isAuthenticated, ...rest }: Props) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
