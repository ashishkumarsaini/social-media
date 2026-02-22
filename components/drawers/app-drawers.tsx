import { CommentsDrawer } from "./comments-drawer";
import { MenuDrawer } from "./menu-drawer";
import { CreatePostDrawer } from './create-post-drawer';

export const AppDrawers = () => {
  return (
    <>
      <MenuDrawer />
      <CommentsDrawer />
      <CreatePostDrawer />
    </>
  );
};
