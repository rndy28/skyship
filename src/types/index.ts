import type { NextSeoProps } from "next-seo";
export type Size = "sm" | "md" | "lg";
export type Variant = "primary" | "secondary" | "neutral";
export type Position = "left" | "right";

export interface IMetaSeo extends NextSeoProps {
  title: string;
}
