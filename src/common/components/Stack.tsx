import { PropsWithChildren } from "react";

type P = PropsWithChildren<{
  gap?: Sizes;
}>;

const SIZES = {
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-5",
};
type Sizes = keyof typeof SIZES;

export const VStack = ({ children, gap }: P) => {
  const g = SIZES[gap || "md"];

  return (
    <>
      <div className={"grid " + g}>{children}</div>
    </>
  );
};
