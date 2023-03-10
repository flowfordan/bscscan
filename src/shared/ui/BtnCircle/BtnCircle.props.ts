import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface BtnCircleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  color?: "white" | "blue";
  size?: "36" | "48";
  tooltip?: string;
  isActive: boolean;
}
