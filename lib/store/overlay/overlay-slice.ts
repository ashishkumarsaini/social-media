import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { OVERLAY_NAMESPACE } from "../constants";
import {  type OverlayInitialState, OVERLAY } from "@/lib/types";

const initialState:OverlayInitialState = {
  [OVERLAY.commentsDrawer]: {
    opened: false,
    postId:''
  },
  [OVERLAY.mobileMenuDrawer]: {
    opened: false,
  }
};

const overlaySlice = createSlice({
  name: OVERLAY_NAMESPACE,
  initialState,
  reducers: {
   toggleCommentsDrawerState: (_state, action:PayloadAction<{shouldOpen: boolean, postId:string}>) =>{
    const {shouldOpen, postId} = action.payload;

    return {
      ...initialState,
      [OVERLAY.commentsDrawer]: {
        opened: shouldOpen,
        postId: shouldOpen ? postId :''
      }
    };
   },
   toggleMobileMenuDrawerState: (_state, action: PayloadAction<{shouldOpen: boolean}>)=>{
    const {shouldOpen} = action.payload;
   return {
      ...initialState,
      [OVERLAY.mobileMenuDrawer]: {
        opened: shouldOpen
      }
    };
   }
  }
});

export const overlayReducers = overlaySlice.reducer;
export const {toggleCommentsDrawerState, toggleMobileMenuDrawerState} = overlaySlice.actions;

