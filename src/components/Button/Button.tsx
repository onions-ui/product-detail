import { css } from "@emotion/css";
import styled from "@emotion/styled";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  block?: boolean;
  variant?: "contained" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
}

export const Button = styled.button<ButtonProps>(
  ({ theme, block }) => `
  border-radius: ${theme.spacing.s4};
  color: white;
  border: none;
  display: ${block ? "block" : "inline-block"};
  width: ${block ? "100%" : "auto"};
`,
  ({ variant = "contained", color = "primary", theme }) => `
    background-color: ${
      variant === "contained" ? theme.colors[color] : "transparent"
    };
    border: ${
      variant === "outlined" ? `0.5px solid ${theme.colors[color]}` : "none"
    };
    color: ${variant === "outlined" ? theme.colors[color] : "white"};
`,
  ({ size }) => `
    font-size: ${size === "sm" ? "0.875rem" : "15px"};
    padding: ${
      size === "sm" ? "8px 8px" : size === "md" ? "12px 16px" : "20px 24px"
    };  
  `
);

Button.defaultProps = {
  color: "primary",
  variant: "contained",
  size: "md",
};
