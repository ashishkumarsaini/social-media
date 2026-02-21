import { cn } from "@/lib/utils";
import Link from "next/link";
import { type FC, type ReactNode } from "react";

type LinkProps = {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
}

export const LinkComponent: FC<LinkProps> = ({ href, label, className, children }) => {
  return (
    <Link href={href} aria-label={label} className={cn('cursor-pointer', className)}>
      {children}
    </Link>
  );
};
