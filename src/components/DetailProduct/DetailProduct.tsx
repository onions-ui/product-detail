import styled from "@emotion/styled";
import React from "react";
import { ProductProvider } from "../ProductProvider";
import { InfoProduct } from "./InfoProduct";
import { ProductDescription } from "./ProductDescription";
import { ProductImages } from "./ProductImages";
import { ProductPrice } from "./ProductPrice";
import { ProductShipping } from "./ProductShipping";
import { ProductShortDescription } from "./ProductShortDescription";
import { ProductVariants } from "./ProductVariants";

export interface DetailProductProps {
  product: Product;
}

export const DetailProduct: React.FC<DetailProductProps> = ({ product }) => {
  const { price, provider } = product;
  return (
    <div>
      <ProductImages images={product.images || []} />
      <StyledProductInfo>
        {product.variants && <ProductVariants variants={product.variants} />}
        <ProductName>{product.name}</ProductName>
        <ProductPrice
          currency="đ"
          price={price.listPrice}
          discount={price.discountPercent}
        />
        <ProductShortDescription
          description={product.shortDescription}
          brand={product.brand}
          sku={product.sku}
        />
        <ProductShipping />
      </StyledProductInfo>
      <StyledProvider>
        {provider && (
          <ProductProvider name={provider?.name} avatar={provider?.avatar} />
        )}
      </StyledProvider>

      <StyledContainer>
        <InfoProduct
          label="Chi tiết sản phẩm"
          attributes={product.productInfo || []}
        />
      </StyledContainer>

      <StyledContainer>
        <ProductDescription
          label="Chi tiết sản phẩm"
          description={product.description || ""}
        />
      </StyledContainer>
      {/* InfoProduct */}
    </div>
  );
};

const StyledProductInfo = styled.div`
  background-color: #fff;
  padding: 1rem;
`;

const StyledContainer = styled.div`
  background-color: #fff;
  margin-top: 0.5rem;
`;

const ProductName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};
  text-transform: unset;
  text-align: left;
  margin-top: 1rem;
`;

const StyledProvider = styled.div`
  padding: 1rem;
  background-color: #fff;
  margin-top: 0.5rem;
`;
