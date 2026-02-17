import { type FC } from "react";
import { type ProvidedWithChildren } from "../types/providers";
import { StoreProvider } from "./store-provider";

export const RootProvider:FC<ProvidedWithChildren> = ({children})=>{
  return <StoreProvider>{children}</StoreProvider>
}