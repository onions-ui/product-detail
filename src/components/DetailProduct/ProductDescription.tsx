import styled from "@emotion/styled";
import React from "react";
import { InfoSection } from "./ProductInfoSection";

export interface ProductDescriptionProps {
  label: string;
  description: string;
}
export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  label,
  description,
}) => {
  return (
    <InfoSection label={label}>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </InfoSection>
  );
};

const Description = styled.div`
  padding: 1rem;
  h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  figure {
    all: unset;
  }
`;
