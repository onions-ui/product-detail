import { css } from "@emotion/css";
import React from "react";
import { BaseIcon, BaseIconProps } from "./BaseIcon";

export const ArrowLeftIcon: React.FC<BaseIconProps> = ({ ...props }) => {
  return (
    <BaseIcon x="0px" y="0px" viewBox="0 0 512 512" {...props}>
      <polyline
        points="328 112 184 256 328 400"
        className={css`
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 48px;
        `}
      />
    </BaseIcon>
  );
};
