import { configureStore } from "@reduxjs/toolkit";
import { AUTH_NAMESPACE, OVERLAY_NAMESPACE } from "./constants";
import { authReducers } from "./auth";
import { overlayReducers } from "./overlay";

export const store = configureStore({
  reducer: {
    [AUTH_NAMESPACE]: authReducers,
    [OVERLAY_NAMESPACE]: overlayReducers,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
