import styled from "@emotion/styled";
import React from "react";
import { ProductPrice } from "../ProductPrice";
import { Flex } from "../Flex";
import { Image } from "../Image";
import { Text } from "../Text";
import { FreeShipIcon } from "../_shares/icons";
import { Button } from "../Button";

export interface ProductCardInfo {
  id?: number;
  name?: string;
  price?: Price;
  imageUrl?: string;
  brand?: string;
  freeShipping?: boolean;
  totalAvailable?: number;
}
export interface ProductCardProps {
  product: ProductCardInfo;
  onAddToCart: () => void | Promise<void>;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Wrapper direction="column" justify="space-between">
      <div>
        <div>
          <Image src={product.imageUrl} width="100%" fit="contain" ratio={1} />
        </div>
        <div>
          <ProductName>{product.name}</ProductName>
          <div>
            <Text size="xs" color="secondary">
              Còn {product.totalAvailable} sản phẩm
            </Text>
          </div>
          <Flex justify="space-between">
            <ProductPrice
              price={product.price?.listPrice || 0}
              discount={product.price?.discountPercent}
            />
            <FreeShipIcon />
          </Flex>
        </div>
      </div>

      <div>
        <AddToCartButton variant="outlined" size="sm" block>
          Thêm vào giỏ
        </AddToCartButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  height: 100%;
`;

const ProductName = styled.div`
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

const AddToCartButton = styled(Button)`
  margin-top: 1rem;
`;
