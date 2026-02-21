import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { OVERLAY_NAMESPACE } from "../constants";
import {  type OverlayInitialState, OVERLAY } from "@/lib/types";

const initialState:OverlayInitialState = {
  [OVERLAY.commentsDrawer]: {
    opened: false,
    postId:''
  }
};

const overlaySlice = createSlice({
  name: OVERLAY_NAMESPACE,
  initialState,
  reducers: {
   toggleCommentsDrawerState: (state, action:PayloadAction<{shouldOpen: boolean, postId:string}>) =>{
    const updatedState = Object.entries(state).map(([overlayName, values])=>({[overlayName]: {...values, opened: false}}));
    const {shouldOpen, postId} = action.payload;

    return {
      ...updatedState,
      [OVERLAY.commentsDrawer]: {
        opened: shouldOpen,
        postId: shouldOpen ? postId :''
      }
    };
   }
  }
});

export const overlayReducers = overlaySlice.reducer;
export const {toggleCommentsDrawerState} = overlaySlice.actions;

