import styled from "@emotion/styled";
import { Flex } from "../Flex";
import { Link } from "../Link";
import { Text } from "../Text";

export interface ProductShortDescriptionProps {
  description?: string;
  brand?: string;
  sku?: string;
}

export const ProductShortDescription: React.FC<
  ProductShortDescriptionProps
> = ({ description, brand, sku }) => {
  return (
    <Wrapper>
      <StyledShortDescription
        dangerouslySetInnerHTML={{ __html: description || "" }}
      />
      <StyledFlex>
        <Text size="sm">
          Thương hiệu: &nbsp;
          <Text transform="uppercase">
            <Link href="#">{brand}</Link>
          </Text>
          &nbsp; | &nbsp;
          <Text transform="uppercase">sku:</Text>
          &nbsp;
          <Text transform="uppercase">{sku}</Text>
        </Text>
      </StyledFlex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
`;

const StyledShortDescription = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textPrimary};
  margin: 0.75rem 0;
  line-height: 1.25;
`;

const StyledFlex = styled(Flex)`
  color: ${(props) => props.theme.colors.muted};
`;
