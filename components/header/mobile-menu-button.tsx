'use client';
import { toggleMobileMenuDrawerState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { LucideMenu } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button, ButtonVariant } from "../ui";
import { type FC } from "react";

export const MobileMenuButton: FC<{ shouldOpen: boolean }> = ({ shouldOpen }) => {
  const dispatch = useDispatch();

  const handleToggleHeaderButton = () => {
    dispatch(toggleMobileMenuDrawerState({ shouldOpen }));
  };

  return (
    <Button variant={ButtonVariant.ghost} className="md:hidden" label="Close Menu" onClick={handleToggleHeaderButton}>
      <LucideMenu className={cn("size-5 color-primary")} />
    </Button>
  );
};
