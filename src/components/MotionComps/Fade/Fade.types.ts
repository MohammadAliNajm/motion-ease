import { ReactNode } from "react";

export interface FadeProps  {
    children: ReactNode;
    fadeOut?:boolean;
    duration?: number;
}