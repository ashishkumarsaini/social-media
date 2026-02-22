'use client';
import { userStateSelector } from "@/lib/store";
import { useSelector } from "react-redux";
import { Link } from "../link";
import { UserAvatar } from "../ui";
import { Text } from "../typography";
import { UserCircle } from "lucide-react";

export const HeaderUserAvatar = () => {
  const user = useSelector(userStateSelector);

  if (user._id) {
    return (
      <Link href="/profile" label="Profile">
        <UserAvatar user={user} />
      </Link>
    );
  }


  return (
    <Link href="/signin" label="Profile" className="flex items-center gap-2">
      <UserCircle className="size-5 md:size-4" />
      <Text className="hidden md:block text-sm">Profile</Text>
    </Link>
  );
};
