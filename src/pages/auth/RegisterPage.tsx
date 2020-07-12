import React from "react";
import { RouteComponentProps} from "@reach/router";
import Register from "../../components/auth/register/Register";

class RegisterPage extends React.Component<RouteComponentProps> {
    render() {
        return (
            <Register />
        );
    }
}

export default RegisterPage
