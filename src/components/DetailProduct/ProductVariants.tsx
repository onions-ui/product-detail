import styled from "@emotion/styled";
import React, { ComponentProps } from "react";
import { Flex } from "../Flex";

export interface ProductVariantsProps extends ComponentProps<typeof Wrapper> {
  variants: Variant[];
}

export const ProductVariants: React.FC<ProductVariantsProps> = ({
  variants,
}) => {
  return (
    <Wrapper>
      {variants.map((variant, index) => {
        return (
          <Flex key={index} direction="column" gapY="s8">
            <Label>{variant.label}</Label>
            <Flex gapX="s8">
              {variant.values.map((v, v_index) => (
                <VariantItem key={v_index}>{v}</VariantItem>
              ))}
            </Flex>
          </Flex>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Label = styled.div`
  text-transform: uppercase;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const VariantItem = styled.div`
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.spacing.s4};
  color: black;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  line-height: 1.25;
`;
