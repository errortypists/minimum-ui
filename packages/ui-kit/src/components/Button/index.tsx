import React from "react";
import styled from "styled-components";

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface IProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  theme?: ButtonType;
}

const Button: React.FC<IProps> = ({ children, theme = ButtonType.DEFAULT }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  width: 200px;
  height: 200px;
  background-color: red;
`;
