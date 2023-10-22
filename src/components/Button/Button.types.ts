import { MouseEventHandler } from "react";

export interface ButtonProps  {
  successColor: string;
  text?: string;
  primary?: boolean;
  color?: string;
  disabled?: boolean;
  isLoading?: boolean;
  success: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;

}
