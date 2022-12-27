import styled from "@emotion/styled";
import React from "react";
import { Text } from "../Text";
import { InfoSection } from "./ProductInfoSection";

export interface InfoProductProps {
  label: string;
  attributes: Array<{
    label?: string;
    value?: string;
  }>;
}
export const InfoProduct: React.FC<InfoProductProps> = ({
  label,
  attributes,
}) => {
  return (
    <InfoSection label={label}>
      {attributes.map(({ label, value }, index) => (
        <AttributeWrapper gray={index % 2 === 1} key={index}>
          <ItemLabel>{label}</ItemLabel>
          <ItemValue>{value}</ItemValue>
        </AttributeWrapper>
      ))}
      <SeeMore>
        <Text size="sm" color="textSecondary">
          Xem thêm nội dung
        </Text>
      </SeeMore>
    </InfoSection>
  );
};

const AttributeWrapper = styled.div<{ gray?: boolean }>(({ gray, theme }) => ({
  ...(gray && { backgroundColor: theme.colors.secondary }),
  display: "flex",
  flexWrap: "nowrap",
  padding: "0.75rem 1rem",
  fontSize: "0.875rem",
}));

const ItemLabel = styled.div`
  width: 40%;
`;
const ItemValue = styled.div`
  width: 60%;
`;

const SeeMore = styled.div`
  padding: 0.25em 1rem;
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
