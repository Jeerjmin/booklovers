import React from "react";
import { useStore } from "../helpers/helpers";
import { observer } from "mobx-react";

export const Header = observer(() => {
  const rootStore = useStore();
  const { userStore } = rootStore;

  return (
    <div>
      <div>Hello {userStore.name},</div>
      <br />
      <nav>
        <button onClick={() => userStore.logout()}>Log Out</button>
      </nav>
    </div>
  );
});
