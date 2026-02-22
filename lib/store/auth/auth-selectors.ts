import { createSelector } from "@reduxjs/toolkit";
import { AUTH_NAMESPACE } from "../constants";
import { type RootState } from "../store";

const getState = (state: RootState) => state[AUTH_NAMESPACE];

export const userStateSelector = createSelector([getState], (auth) => auth.user);
