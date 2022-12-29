import styled from "@emotion/styled";
import React, { useState } from "react";
import { Text } from "../Text";
import { ArrowDownIcon } from "../_shares/icons/ArrowDownIcon";
import { InfoSection } from "./ProductInfoSection";

export interface ProductDescriptionProps {
  label: string;
  description: string;
}
export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  label,
  description,
}) => {
  const [isFull, setIsFull] = useState(false);
  return (
    <InfoSection label={label}>
      <Description
        dangerouslySetInnerHTML={{ __html: description }}
        isFull={isFull}
      />
      <SeeMore onClick={() => setIsFull(!isFull)}>
        <Text size="sm" color="textSecondary">
          Xem thêm nội dung <ArrowDownIcon color="textSecondary" width={16} />
        </Text>
      </SeeMore>
    </InfoSection>
  );
};

const Description = styled.div<{ isFull?: boolean }>`
  padding: 1rem;
  max-height: ${(props) => (props.isFull ? "auto" : "59rem")};
  transition: max-height 2s ease-in-out;
  overflow: hidden;
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
const SeeMore = styled.div`
  padding: 1em 1rem;
  text-align: center;
  position: relative;
  :after {
    content: " ";
    background: linear-gradient(
      transparent,
      hsla(0, 0%, 100%, 0) 70%,
      #fff 90%
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgb(255, 255, 255)
    );
    position: absolute;
    top: -40px;
    height: 40px;
    left: 0;
    width: 100%;
  }
`;
