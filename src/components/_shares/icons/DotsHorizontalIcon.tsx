import { css } from "@emotion/css";
import React from "react";
import { BaseIcon, BaseIconProps } from "./BaseIcon";

export const DotsHorizontalIcon: React.FC<BaseIconProps> = ({ ...props }) => {
  return (
    <BaseIcon
      fill="#848788"
      x="0px"
      y="0px"
      viewBox="0 0 426.667 426.667"
      {...props}
    >
      <g>
        <g>
          <circle cx="42.667" cy="213.333" r="42.667" />
        </g>
      </g>
      <g>
        <g>
          <circle cx="213.333" cy="213.333" r="42.667" />
        </g>
      </g>
      <g>
        <g>
          <circle cx="384" cy="213.333" r="42.667" />
        </g>
      </g>
    </BaseIcon>
  );
};
