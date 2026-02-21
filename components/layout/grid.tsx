import { cn } from "@/lib/utils";
// import { type ReactNode, type FC } from "react";

// type GridProps = React.HTMLAttributes<HTMLDivElement> & {
//   cols?: { sm: number, md: number, lg: number };
//   gap?: number;
//   children: ReactNode
// }

// export const Grid: FC<GridProps> = ({
//   cols = { sm: 12, md: 12, lg: 12 },
//   gap = 4,
//   className,
//   ...props
// }) => {

//   return (
//     <div
//       className={cn(
//         "grid w-full",
//         `sm:grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg}`,
//         `gap-${gap}`,
//         className
//       )}
//       {...props}
//     />
//   );
// };

// type ColProps = React.HTMLAttributes<HTMLDivElement> & {
//   span?: number;
//   sm?: ColProps["span"];
//   md?: ColProps["span"];
//   lg?: ColProps["span"];
//   children: ReactNode;
// }

// export function Col({
//   span = 12,
//   sm,
//   md,
//   lg,
//   className,
//   ...props
// }: ColProps) {
//   return (
//     <div
//       className={cn(
//         `col-span-${span}`,
//         sm && `sm:col-span-${sm}`,
//         md && `md:col-span-${md}`,
//         lg && `lg:col-span-${lg}`,
//         className
//       )}
//       {...props}
//     />
//   );
// }

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10
  responsive?: boolean
}

export function Grid({
  cols = 12,
  gap = 4,
  responsive = true,
  className,
  ...props
}: GridProps) {
  const baseCols = `grid-cols-${cols}`;
  const responsiveCols = responsive
    ? `sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12`
    : "";

  return (
    <div
      className={cn(
        "grid w-full",
        baseCols,
        `gap-${gap}`,
        responsiveCols,
        className
      )}
      {...props}
    />
  );
}


type ColProps = React.HTMLAttributes<HTMLDivElement> & {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 9 | 10 | 11 | 12
  sm?: ColProps["span"]
  md?: ColProps["span"]
  lg?: ColProps["span"]
  xl?: ColProps["span"]
}

export function Col({
  span = 12,
  sm,
  md,
  lg,
  xl,
  className,
  ...props
}: ColProps) {
  return (
    <div
      className={cn(
        `col-span-${span}`,

        sm && `sm:col-span-${sm}`,
        md && `md:col-span-${md}`,
        lg && `lg:col-span-${lg}`,
        xl && `xl:col-span-${xl}`,

        className
      )}
      {...props}
    />
  );
}
