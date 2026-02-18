'use client';
import { type FC } from "react";
import { Provider } from "react-redux";
import { type ProvidedWithChildren } from "../types/providers";
import { store } from "../store";

export const StoreProvider: FC<ProvidedWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};