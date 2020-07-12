import React, {FunctionComponent} from "react";
import { useStore } from "../helpers/helpers";
import { AuthenticatedLayout } from "../components/layouts/authenticated";
import {Redirect, RouteComponentProps, RouterProps} from "@reach/router";
import {GuestLayout} from "../components/layouts/guest";

export const PrivateRoute: FunctionComponent<{ component: React.ComponentType } & RouteComponentProps> = ({ component: Component, ...rest }) => {
  const rootStore = useStore();
  const { userStore } = rootStore;
  const { isLoggedIn } = userStore;
  return (
    <div>
      {isLoggedIn ? (
        <AuthenticatedLayout>
          <Component {...rest} />
        </AuthenticatedLayout>
      ) : (
        <Redirect from="" to="/login" noThrow />
      )}
    </div>
  );
};

export const PublicRoute: FunctionComponent<{ component: React.ComponentType } & RouteComponentProps> = ({ component: Component, ...rest }) => {
  return (
      <GuestLayout>
        <Component {...rest} />
      </GuestLayout>
    )
};
