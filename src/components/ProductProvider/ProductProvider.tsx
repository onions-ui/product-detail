import styled from "@emotion/styled";
import { Flex } from "../Flex";
import { Image } from "../Image";
import { Policies } from "../SellPolicy/Policies";
import { Text } from "../Text";
import { VerifiedIcon } from "../_shares/icons";

export interface ProductProviderProps {
  name: string;
  avatar?: string;
  verified?: boolean;
}
export const ProductProvider: React.FC<ProductProviderProps> = ({
  name,
  avatar,
  verified,
}) => {
  return (
    <Wrapper>
      <Flex gapX="s8" align="center" wrap="nowrap">
        <Avatar
          fit="contain"
          radius="round"
          width={40}
          ratio={1}
          src={
            avatar
              ? avatar
              : "https://cdn.tgdd.vn/Products/Images/42/220834/samsung-galaxy-a52-5g-128gb-1-400x460.png"
          }
        />
        <Flex wrap="nowrap">
          <ProviderName size="sm" color="textPrimary" weight="500">
            {name}
            &nbsp; &nbsp;
            <VerifiedIcon
              width={16}
              height={16}
              color="success"
              style={{ paddingBottom: 2 }}
            />
          </ProviderName>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const Avatar = styled(Image)`
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const ProviderName = styled(Text)`
  line-height: 1.5;
`;
