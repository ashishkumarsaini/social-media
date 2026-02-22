import { Container } from "../layout";
import { Link } from "../link";
import { Heading, HeadingLevel, HeadingSize } from "../typography";
// import { Settings } from 'lucide-react';
import { MobileMenuButton } from "./mobile-menu-button";
import { HeaderUserAvatar } from "./header-user-avatar";
import { HeaderCreatePost } from "./header-create-post";

export const Header = () => {
  return (
    <header className="border-b fixed w-full z-49 bg-white">
      <Container className="py-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MobileMenuButton shouldOpen />
            <Link href="/" label="Home">
              <Heading level={HeadingLevel.h1} size={HeadingSize.md}>Social Media</Heading>
            </Link>
          </div>
          <div className="flex gap-4">
            <HeaderUserAvatar />
            {/* <Link href="/settings" label="Settings" className="hidden md:block">
              <div className="flex items-center justify-center gap-2">
                <Settings className="size-4" />
                <Text className="block text-sm">Settings</Text>
              </div>
            </Link> */}
            <HeaderCreatePost />
          </div>
        </div>
      </Container >
    </header >
  );
};
