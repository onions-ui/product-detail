import styled from "@emotion/styled";
import React from "react";
import { Flex } from "../Flex";
import { Link } from "../Link";
import { ProductCard } from "../ProductCard/ProductCard";
import { Text } from "../Text";
import { ArrowRightIcon } from "../_shares/icons";

export interface SameBrandProductProps {
  brandId: string;
  products: SameBrandProduct[];
}
export const SameBrandProduct: React.FC<SameBrandProductProps> = ({
  brandId,
  products,
}) => {
  return (
    <Wrapper>
      <SectionHeader justify="space-between" align="center">
        <SectionName>Sản phẩm cùng thương hiệu</SectionName>
        <Link href={brandId}>
          <Flex>
            <Text color="textSecondary" size="sm">
              Xem tất cả
              <ArrowRightIcon width={16} />
            </Text>
          </Flex>
        </Link>
      </SectionHeader>
      <ProductList wrap="nowrap" gap="s8">
        {products.map((product) => (
          <ProductItem>
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={console.log}
            />
          </ProductItem>
        ))}
      </ProductList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0.5rem;
  background-color: #fff;
`;

const SectionHeader = styled(Flex)`
  padding: 1rem 1rem;
`;

const SectionName = styled.h4`
  margin: 0;
  font-weight: 500;
`;

const ProductList = styled(Flex)`
  overflow-x: auto;
  padding-bottom: 1rem;
`;

const ProductItem = styled.div`
  min-width: 40%;
  max-width: 40%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
`;
