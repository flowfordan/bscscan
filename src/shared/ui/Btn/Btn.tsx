import { BtnProps } from "./Btn.props";
import "./btn.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Btn = forwardRef(function Btn(
  { color = "white", children, className, kind = "main", ...props }: BtnProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      className={cn("btn", {
        ["btn__secondary"]: kind === "secondary",
      })}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});
