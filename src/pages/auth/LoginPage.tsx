import React from "react";
import {RouteComponentProps} from "@reach/router";
import Login from "components/auth/login/Login";

class LoginPage extends React.Component<RouteComponentProps> {
    render() {
        return (
            <Login />
        );
    }
}

export default LoginPage
