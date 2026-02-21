export enum OVERLAY {
  commentsDrawer = 'commentsDrawer'
}

export type OverlayVisibleState = {
  opened: boolean
};

export type CommentsDrawerOverlay = {
  postId: string;
} & OverlayVisibleState;

export type OverlayInitialState = {
  [OVERLAY.commentsDrawer]: CommentsDrawerOverlay
}
