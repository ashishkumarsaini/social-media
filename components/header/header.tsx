import { Container } from "../layout";
import { Link } from "../link";
import { Heading, HeadingLevel, HeadingSize, Text } from "../typography";
import { Button, ButtonVariant } from "../ui";
import { UserCircle, Settings } from 'lucide-react';
import { MobileMenuButton } from "./mobile-menu-button";

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
          <div className="hidden md:block">
            <div className="flex">
              <Link href="/profile" label="Profile">
                <Button variant={ButtonVariant.link} label="Profile" className="flex">
                  <UserCircle />
                  <Text className="block">Profile</Text>
                </Button>
              </Link>
              <Link href="/settings" label="Settings">
                <Button variant={ButtonVariant.link} label="Settings" className="flex">
                  <Settings />
                  <Text className="block">Settings</Text>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
