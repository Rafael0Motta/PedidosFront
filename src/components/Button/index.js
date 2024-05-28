import React from "react";
import { Button as ButtonContainer } from "./style";

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
