import styled from "@emotion/styled";
import React from "react";

export interface ActionBarProps {
  children: React.ReactNode;
  position:'top'|'bottom'
}

export const ActionBar: React.FC<ActionBarProps> = ({ children, position }) => {
  return <Wrapper position={position}>{children}</Wrapper>;
};


const Wrapper = styled.div<{position: 'top'|'bottom'}>(({position}) => ({
  position: 'fixed',
  zIndex: 1050,
  top: position === 'top' ? 0 : 'unset',
  bottom: position === 'bottom' ? 0 : 'unset', 
  width: '100%',
}));
