'use client';
import { Heading, HeadingLevel, HeadingSize } from "@/components/typography";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui";
import { UserCircle2 } from "lucide-react";
import { MenuItems } from "./menu-items";
import { useDispatch, useSelector } from "react-redux";
import { mobileMenuDrawerOpenedSelector, toggleMobileMenuDrawerState } from "@/lib/store";
import { MobileMenuButton } from "@/components/header";

export const MenuDrawer = () => {
  const isMobileMenuOpened = useSelector(mobileMenuDrawerOpenedSelector);
  const dispatch = useDispatch();

  const handleToggleHeaderButton = () => {
    dispatch(toggleMobileMenuDrawerState({ shouldOpen: false }));
  };

  const menuItems = [
    {
      title: 'Profile',
      url: '/profile',
      icon: UserCircle2
    }
  ];

  return (
    <Drawer
      direction="left"
      open={isMobileMenuOpened}
      onClose={handleToggleHeaderButton}
    >
      <DrawerContent>
        <DrawerHeader className="px-2.5">
          <div className="flex items-center">
            <MobileMenuButton shouldOpen={false} />
            <DrawerTitle>
              <Heading level={HeadingLevel.h1} size={HeadingSize.md}>Social Media</Heading>
            </DrawerTitle>
          </div>
          {/* <DrawerDescription className="px-4">
            Description
          </DrawerDescription> */}
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          <MenuItems items={menuItems} />
        </div>
        {/* <DrawerFooter className="border-t">
          Footer
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};


