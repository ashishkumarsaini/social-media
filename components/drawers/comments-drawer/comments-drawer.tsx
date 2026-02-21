'use client';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui";
import { commentsDrawerSelector, toggleCommentsDrawerState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { CommentSection } from "./comments-section";
import { type PostComment } from "@/lib/types";
import commentsData from '../../../mocks/comments.json';
import { CommentsDrawerFooter } from "./comment-drawer-footer";

export const CommentsDrawer = () => {
  const { opened } = useSelector(commentsDrawerSelector);
  const comments: PostComment[] = commentsData.comments;

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleCommentsDrawerState({ shouldOpen: false, postId: '' }));
  };

  return (
    <Drawer
      key="bottom"
      direction="bottom"
      open={opened}
      onClose={handleClose}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Comments</DrawerTitle>
          {/* <DrawerDescription>
            Set your daily activity goal.
          </DrawerDescription> */}
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          <CommentSection comments={comments} />
        </div>
        <DrawerFooter className="border-t">
          <CommentsDrawerFooter />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};


