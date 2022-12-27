import styled from "@emotion/styled";

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  color?: Color | "currentColor";
  width?: string | number;
  height?: string | number;
}

export const BaseIcon = styled.svg<BaseIconProps>`
  color: ${({ color, theme }) =>
    color ? theme.colors[color as Color] || color : "currentColor"};
  vertical-align: middle;
`;

BaseIcon.defaultProps = {
  color: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
};
