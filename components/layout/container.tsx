import { cn } from "@/lib/utils";
import { type FC, type ReactNode } from "react";

export const Container: FC<{ className: string, children: ReactNode }> = ({ className, children }) => {
  return (
    <div className={cn('max-w-6xl m-auto px-2.5', className)}>
      {children}
    </div>
  );
};
