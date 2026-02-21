import { Container } from "../layout";
import { Link } from "../link";
import { Heading, HeadingLevel, HeadingSize, Text } from "../typography";
import { Button, ButtonVariant } from "../ui";
import { UserCircle, Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b fixed w-full z-100 backdrop-blur-2xl">
      <Container className="py-3.5">
        <div className="flex items-center justify-between">
          <Link href="/" label="Home">
            <Heading level={HeadingLevel.h1} size={HeadingSize.md}>Social Media</Heading>
          </Link>
          <div className="flex">
            <Link href="/profile" label="Profile">
              <Button variant={ButtonVariant.link} label="Profile" className="flex">
                <UserCircle />
                <Text className="hidden md:block">Profile</Text>
              </Button>
            </Link>
            <Link href="/settings" label="Settings">
              <Button variant={ButtonVariant.link} label="Settings" className="flex">
                <Settings />
                <Text className="hidden md:block">Settings</Text>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
