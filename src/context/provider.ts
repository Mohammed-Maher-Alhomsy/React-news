import { useContext } from "react";

import { AppStore } from "./store";

export const useStateContext = () => {
  const ctx = useContext(AppStore);

  if (ctx === null) {
    throw Error("Error in context");
  }

  return ctx;
};
