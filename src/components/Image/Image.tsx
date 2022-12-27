/**
 * create image component use emotion
 * image props extends from img html element
 * ratio is the ratio of image width and height
 */

import React from "react";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: number;
  radius?: Radius;
  fit?: "cover" | "contain";
}

export const Image = styled.img<ImageProps>`
  max-width: 100%;
  max-height: 100%;
  object-position: center;
  ${({ ratio }) => (ratio ? `aspect-ratio: ${ratio};` : "")}
  ${({ radius, theme }) =>
    radius ? `border-radius: ${theme.radius[radius || "s0"]};` : ""}
 ${({ fit }) => (fit ? `object-fit: ${fit}` : "")};
`;
