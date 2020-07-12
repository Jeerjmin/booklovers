import { useContext, useRef, useEffect } from "react";
import { StoreContext } from "./store-provider";
import { RootStore } from "../stores/root";

export const useStore = (): RootStore => useContext(StoreContext);

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
