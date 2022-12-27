import styled from "@emotion/styled";
import React, { ComponentProps } from "react";
import { Image } from "../Image";

export interface ProductImagesProps extends ComponentProps<typeof Wrapper> {
  images: string[];
}
export const ProductImages: React.FC<ProductImagesProps> = ({
  images,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {images.map((image, index) => (
        <Image src={image} key={index} width="100%" ratio={1.4} fit="contain" />
      ))}
      <ImageIndex>1/8</ImageIndex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
`;

const ImageIndex = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 6px 12px;
  border-radius: 1rem;
  font-size: 0.875rem;
`;
