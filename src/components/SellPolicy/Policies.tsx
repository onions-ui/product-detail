import styled from "@emotion/styled";
import React from "react";
import { Flex } from "../Flex";
import { Image } from "../Image";
import { Text } from "../Text";

export interface PoliciesProps {
  policies: Array<{ label: string; imageUrl?: string }>;
}
export const Policies: React.FC<PoliciesProps> = ({ policies }) => {
  return (
    <Wrapper>
      <SectionTitle>Chính sách bán hàng</SectionTitle>
      <Flex direction="column" gapY="s12">
        {policies.map((policy, index) => (
          <Flex key={index} gap="s12" align="center">
            <Icon src={policy.imageUrl} />
            <Text>{policy.label}</Text>
          </Flex>
        ))}
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
const SectionTitle = styled.h4`
  margin: 0.5rem 0;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Icon = styled(Image)`
  min-width: 24px;
  min-height: 24px;
`;
