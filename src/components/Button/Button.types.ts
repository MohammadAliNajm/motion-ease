import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  textColor: string;
  color?: string;
  disabled?: boolean;
  isLoading?: boolean;
  success?: boolean;
  fail?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
