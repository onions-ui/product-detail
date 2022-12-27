import styled from "@emotion/styled";
import React from "react";

export interface SectionProps {
  label: string;
  children: React.ReactNode;
}
export const InfoSection: React.FC<SectionProps> = ({ label, children }) => {
  return (
    <Wrapper>
      <LabelWrapper>
        <StyledLabel>{label}</StyledLabel>
      </LabelWrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
`;

const LabelWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
const StyledLabel = styled.h5`
  padding: 0.75rem 1rem;
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;

const Content = styled.div``;
