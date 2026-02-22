'use client';
import { Button, ButtonVariant, Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, Textarea } from "@/components/ui";
import { toggleCreatePostDrawerState } from "@/lib/store";
import { createPostDrawerOpenedSelector } from "@/lib/store";
import { SendHorizonal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export const CreatePostDrawer = () => {
  const dispatch = useDispatch();
  const createPostDrawerOpened = useSelector(createPostDrawerOpenedSelector);

  const handleCloseDrawer = () => {
    dispatch(toggleCreatePostDrawerState({ shouldOpen: false }));
  };

  return (
    <Drawer
      direction="bottom"
      open={createPostDrawerOpened}
      onClose={handleCloseDrawer}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Write a post</DrawerTitle>
          {/* <DrawerDescription>
            Set your daily activity goal.
          </DrawerDescription> */}
        </DrawerHeader>
        <form>
          <div className="no-scrollbar overflow-y-auto p-4">
            <Textarea placeholder="Type your message here." />
          </div>
          <DrawerFooter className="border-t">
            <div className="flex items-center gap-3">
              <Button variant={ButtonVariant.outline} label="Submit Comment" type="submit" className="flex items-center grow">
                Cancel
              </Button>
              <Button label="Submit Comment" type="submit" className="flex items-center grow">
                Post
                <SendHorizonal className="size-4" />
              </Button>
            </div>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
};
