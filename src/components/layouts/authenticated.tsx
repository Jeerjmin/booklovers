import React, {FunctionComponent, ReactNode} from "react";
import { Header } from "../Header";

// Authenticated pages may be wrapped within this layout (for instance dashboard layout)
export const AuthenticatedLayout: FunctionComponent<ReactNode> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
