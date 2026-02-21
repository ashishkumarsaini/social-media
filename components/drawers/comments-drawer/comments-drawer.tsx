'use client';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,

  Input
} from "@/components/ui";
import { commentsDrawerSelector, toggleCommentsDrawerState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { CommentSection } from "./comments-section";
import commentsData from '../../../mocks/comments.json';
import { SendHorizonal } from "lucide-react";
import { CommentsDrawerFooter } from "./comment-drawer-footer";

export const CommentsDrawer = () => {
  const { opened, postId } = useSelector(commentsDrawerSelector);
  const comments = commentsData.comments;

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


