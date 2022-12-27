/** create text component use emotion with props:
 * - color: theme color
 * - size: xs, sm, md, lg, xl
 */
// Path: src/components/Text/Text.tsx
import styled from "@emotion/styled";
import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: Color;
  size?: FontSize;
  weight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  transform?: "uppercase" | "lowercase" | "capitalize" | "none";
}

export const Text: React.FC<TextProps> = ({
  color,
  size,
  children,
  ...props
}) => {
  return (
    <StyledText color={color} size={size} {...props}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.span<TextProps>(
  ({ size, theme, color, weight, transform }) => ({
    ...(size ? { fontSize: theme.fontSizes[size] } : {}),
    ...(weight ? { fontWeight: weight } : {}),
    ...(transform ? { textTransform: transform } : {}),
    ...(color ? { color: theme.colors[color] } : {}),
  })
);
