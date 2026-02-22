'use client';
import { useDispatch } from "react-redux";
import { Button, ButtonVariant } from "../ui";
import { PlusIcon } from "lucide-react";
import { toggleCreatePostDrawerState } from "@/lib/store";

export const HeaderCreatePost = () => {
  const dispatch = useDispatch();

  const handleOpenDrawer = () => {
    dispatch(toggleCreatePostDrawerState({ shouldOpen: true }));
  };

  return (
    <Button variant={ButtonVariant.default} label="Create Post" onClick={handleOpenDrawer}>
      <PlusIcon />
      <p className="hidden md:block">Create Post</p>
    </Button>
  );
};
