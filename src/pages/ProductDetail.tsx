import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { ActionBar, Button } from "../components";
import { DetailProduct } from "../components/DetailProduct";
import { Flex } from "../components/Flex";
import {
  ArrowLeftIcon,
  CartIcon,
  DotsHorizontalIcon,
} from "../components/_shares/icons";
import { useProduct } from "../hooks";

export const ProductDetail: React.FC = () => {
  const { product } = useProduct();
  return (
    <Layout>
      <DetailProduct product={product} />
    </Layout>
  );
};

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledLayout>
      <ActionBar position="top">
        <StyledTopBar>
          <Flex justify="space-between" wrap="nowrap">
            <HeaderButton>
              <ArrowLeftIcon />
            </HeaderButton>
            <Flex>
              <HeaderButton>
                <CartIcon />
              </HeaderButton>
              <HeaderButton>
                <DotsHorizontalIcon width={20} height={20} />
              </HeaderButton>
            </Flex>
          </Flex>
        </StyledTopBar>
      </ActionBar>
      <StyledContent>{children}</StyledContent>
      <ActionBar position="bottom">
        <StyledBottomBar>
          <Button block>Thêm vào giỏ hàng</Button>
        </StyledBottomBar>
      </ActionBar>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  height: 100vh;
  background-color: #f5f3f3;
`;
const StyledContent = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
`;

const StyledTopBar = styled.div`
  height: 3.5rem;
  background-color: #fff;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  > div {
    width: 100%;
  }
`;

const StyledBottomBar = styled.div`
  height: 3.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  box-sizing: border-box;
`;

const HeaderButton = styled(Button)`
  background-color: transparent !important;
  color: ${({ theme }) => theme.colors.textPrimary} !important;
  padding: 0.25rem !important;
`;
