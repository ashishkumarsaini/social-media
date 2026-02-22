export enum OVERLAY {
  commentsDrawer = 'commentsDrawer',
  mobileMenuDrawer = 'mobileMenuDrawer',
  createPostDrawer = 'createPostDrawer'
}

export type OverlayVisibleState = {
  opened: boolean
};

export type CommentsDrawerOverlay = {
  postId: string;
} & OverlayVisibleState;

export type MobileMenuDrawerOverlay = OverlayVisibleState;

export type CreatePostDrawerOverlay = OverlayVisibleState;

export type OverlayInitialState = {
  [OVERLAY.commentsDrawer]: CommentsDrawerOverlay
  [OVERLAY.mobileMenuDrawer]: MobileMenuDrawerOverlay,
  [OVERLAY.createPostDrawer]: CreatePostDrawerOverlay
}
