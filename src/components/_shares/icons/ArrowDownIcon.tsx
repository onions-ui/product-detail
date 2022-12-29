import { css } from "@emotion/css";
import React from "react";
import { BaseIcon, BaseIconProps } from "./BaseIcon";

export const ArrowDownIcon: React.FC<BaseIconProps> = ({ ...props }) => {
  return (
    <BaseIcon
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      {...props}
      className={css`
        transform: rotate(180deg);
      `}
    >
      <polyline
        points="112 328 256 184 400 328"
        className={css`
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 40px;
        `}
      />
    </BaseIcon>
  );
};
