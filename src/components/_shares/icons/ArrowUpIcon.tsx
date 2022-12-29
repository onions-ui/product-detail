import { css } from "@emotion/css";
import React from "react";
import { BaseIcon, BaseIconProps } from "./BaseIcon";

export const ArrowUpIcon: React.FC<BaseIconProps> = ({ ...props }) => {
  return (
    <BaseIcon x="0px" y="0px" viewBox="0 0 512 512" {...props} fill="none">
      <polyline
        points="112 328 256 184 400 328"
        className={css`
          fill: none;
          stroke: #000;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: "1.5";
        `}
      />
    </BaseIcon>
  );
};
