import { MouseEventHandler } from "react";

export interface ButtonProps  {
  text?: string;
  primary?: boolean;
  color?: string;
  disabled?: boolean;
  isLoading?: boolean;
  success?: boolean;
  fail?:boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;

}
