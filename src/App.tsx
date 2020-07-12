import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { usePrevious, useStore } from "./helpers/helpers";
import Routes from "./routes/all";
import { observer } from "mobx-react";

const App: React.FC = observer(() => {
  const rootStore = useStore();
  const { userStore } = rootStore;
  const { isAuthorized, hasCheckedAuth } = userStore;

  const prevAuthorized = usePrevious(isAuthorized);

  useEffect(() => {
    if (!hasCheckedAuth) {
      userStore.checkLogin();
    } else {
      if (!prevAuthorized && isAuthorized) {
        navigate("/").then();
      } else if (!isAuthorized && prevAuthorized) {
        navigate("/login").then();
      }
    }
  }, [prevAuthorized, isAuthorized, hasCheckedAuth, userStore]);

  return (
    <div>
      <Routes />
    </div>
  );
});

export default App;
