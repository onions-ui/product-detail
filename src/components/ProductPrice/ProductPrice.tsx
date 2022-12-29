import styled from "@emotion/styled";
import React from "react";
import { FormatNumber } from "../FormatNumber";
import { Text } from "../Text";

export interface ProductPriceProps
  extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  discount?: number;
  currency?: string;
}

export const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  discount = 0,
  currency,
}) => {
  const sellPrice = price * (1 - discount / 100);
  return (
    <Wrapper>
      <StyledSellPriceWrapper>
        <Text color="primary" size="md" weight="700">
          <FormatNumber value={sellPrice} />
        </Text>
      </StyledSellPriceWrapper>
      <Text size="xs" style={{lineHeight: 0.875}}>
        <StyledListedPrice color="textSecondary">
          <FormatNumber value={price} />
        </StyledListedPrice>
        &nbsp;
        <Text color="primary"> -{discount}%</Text>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0.25rem;
`;

const StyledSellPriceWrapper = styled.div`
  margin-bottom: 2px;
`;

const StyledListedPrice = styled(Text)`
  text-decoration: line-through;
`;

ProductPrice.defaultProps = {
  discount: 0,
  currency: "đ",
};
