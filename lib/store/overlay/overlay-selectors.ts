import { createSelector } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { OVERLAY_NAMESPACE } from "../constants";

const getState = (state:RootState)=>state[OVERLAY_NAMESPACE];


export const commentsDrawerSelector = createSelector([getState], (overlay)=>overlay.commentsDrawer);
export const commentsDrawerOpenedSelector = createSelector([commentsDrawerSelector], (commentsDrawer)=>commentsDrawer.opened);
