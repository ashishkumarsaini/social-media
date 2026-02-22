import { type LucideProps } from "lucide-react";
import Link from "next/link";
import { type ForwardRefExoticComponent, type RefAttributes, type FC } from "react";

type MenuItemsProps = {
  items: {
    title: string,
    url: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  }[]
};

const renderIcon = (icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>) => {
  const Icon = icon;

  return <Icon className="size-4" />;
};

export const MenuItems: FC<MenuItemsProps> = ({ items }) => {
  return (
    <div>
      {items.map(({ title, url, icon }) => (
        <Link key={title} aria-label={title} href={url} className="flex items-center gap-2 py-3">
          {renderIcon(icon)}
          <p className="text-base">{title}</p>
        </Link>
      ))}
    </div>
  );
};
