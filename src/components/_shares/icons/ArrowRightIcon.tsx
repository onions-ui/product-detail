/**
 * <svg fill="none" viewBox="0 0 24 24" class="css-9w5ue6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>
 */

import { css } from "@emotion/css";
import React from "react";
import { BaseIcon, BaseIconProps } from "./BaseIcon";

export const ArrowRightIcon: React.FC<BaseIconProps> = ({ ...props }) => {
  return (
    <BaseIcon x="0px" y="0px" viewBox="0 0 24 24" {...props} fill="none">
      <path
        d="M8.49976 19.0001L15.4998 12.0001L8.49976 5.00012"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </BaseIcon>
  );
};
