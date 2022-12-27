import styled from "@emotion/styled";
import { ComponentProps } from "react";

export interface LinkProps {
  decoration?: "underline" | "none";
  color?: Color;
}

export const Link = styled.a<LinkProps>(({ theme, decoration, color }) => ({
  color: theme.colors[color || "primary"],
  textDecoration: decoration || "none",
}));
