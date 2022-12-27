import styled from "@emotion/styled";
import React from "react";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { FreeShipIcon } from "../_shares/icons/FreeShipIcon";

export const ProductShipping = () => {
  return (
    <Wrapper>
      <Flex gapX="s8" align="center">
        <FreeShipIcon />
        <Text size="sm" color="success">
          {" "}
          Sản phẩm đươc miễn phí giao hàng
        </Text>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
`;
