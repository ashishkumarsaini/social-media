import { createSelector } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { OVERLAY_NAMESPACE } from "../constants";
import { OVERLAY } from "@/lib/types";

const getState = (state:RootState)=>state[OVERLAY_NAMESPACE];


export const commentsDrawerSelector = createSelector([getState], (overlay)=>overlay[OVERLAY.commentsDrawer]);
export const commentsDrawerOpenedSelector = createSelector([commentsDrawerSelector], (commentsDrawer)=>Boolean(commentsDrawer && commentsDrawer.opened));

export const mobileMenuDrawerSelector = createSelector([getState], (overlay)=>overlay[OVERLAY.mobileMenuDrawer]);
export const mobileMenuDrawerOpenedSelector = createSelector([mobileMenuDrawerSelector], (mobileMenuDrawer)=>Boolean(mobileMenuDrawer && mobileMenuDrawer.opened));
