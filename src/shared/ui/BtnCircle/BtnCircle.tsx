import { BtnCircleProps } from "./BtnCircle.props";
import "./btnCircle.scss";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const BtnCircle = forwardRef(function Btn(
  {
    color = "white",
    children,
    className,
    size = "36",
    tooltip,
    isActive,
    ...props
  }: BtnCircleProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      className={cn("btnCircle", {
        ["btnCircle__big"]: size === "48",
        ["btnCircle--active"]: isActive,
      })}
      title={tooltip}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});
