import styled from "@emotion/styled";
import React from "react";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  wrap?: "autoing" | "nowrap" | "wrap" | "wrap-reverse";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: Space;
  gapX?: Space;
  gapY?: Space;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "wrap"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${({ gap, theme }) => theme.spacing[gap || "s0"]};
  column-gap: ${({ gapX, theme, gap }) => theme.spacing[gapX || gap || "s0"]};
  row-gap: ${({ gapY, theme, gap }) => theme.spacing[gapY || gap || "s0"]};
`;

Flex.displayName = "Flex";

Flex.defaultProps = {
  wrap: "wrap",
  direction: "row",
  justify: "flex-start",
  align: "stretch",
};
