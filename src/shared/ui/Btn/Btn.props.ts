import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface BtnProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  kind?: "main" | "secondary";
  color?: "white" | "blue";
}
