import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface PropertyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  value: string;
  valueType?: "txt" | "walletLink" | "email";
}
